/* ═══════════════════════════════════════════════════════════════
   step-viewer.js — STEP file viewer via occt-import-js + Three.js
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const STEP_FILE  = 'step/shaft_3.STEP';
  const OCCT_JS    = 'https://cdn.jsdelivr.net/npm/occt-import-js@0.0.23/dist/occt-import-js.js';
  const OCCT_WASM  = 'https://cdn.jsdelivr.net/npm/occt-import-js@0.0.23/dist/occt-import-js.wasm';

  let occt        = null;   /* engine, kept alive for re-use */
  let svScene, svCamera, svRenderer, svControls;
  let svModel        = null;
  let svWireframe    = false;
  let svStarted      = false;
  let svLastFilename = null;

  /* ── Boot: trigger on first scroll into view ─────────────── */
  function boot () {
    const section = document.getElementById('cad-viewer');
    if (!section) return;

    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !svStarted) {
        svStarted = true;
        obs.disconnect();
        initViewer();
      }
    }, { threshold: 0.05 });
    obs.observe(section);
  }

  /* ── Three.js scene setup ─────────────────────────────────── */
  function initThree () {
    const canvas = document.getElementById('stepCanvas');
    if (!canvas) return;
    const wrap = canvas.parentElement;
    const W = wrap.clientWidth  || 700;
    const H = wrap.clientHeight || 520;

    svRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    svRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    svRenderer.setSize(W, H);
    svRenderer.setClearColor(0x000000, 0);   /* transparent */

    svCamera = new THREE.PerspectiveCamera(45, W / H, 0.01, 1e6);
    svCamera.position.set(800, 600, 800);

    svScene = new THREE.Scene();

    /* 3-point studio lighting — shows form without blowing out */
    svScene.add(new THREE.AmbientLight(0xffffff, 0.45));

    const lights = [
      { color: 0xffffff, intensity: 2.2, pos: [ 4,  6,  5] },   /* key   — top-front-right */
      { color: 0xddeeff, intensity: 0.9, pos: [-5,  2, -3] },   /* fill  — opposite side   */
      { color: 0xffeedd, intensity: 0.7, pos: [ 1, -4, -5] },   /* rim   — back-bottom     */
    ];
    lights.forEach(({ color, intensity, pos }) => {
      const l = new THREE.DirectionalLight(color, intensity);
      l.position.set(...pos);
      svScene.add(l);
    });

    if (typeof THREE.OrbitControls !== 'undefined') {
      svControls = new THREE.OrbitControls(svCamera, svRenderer.domElement);
      svControls.enableDamping      = true;
      svControls.dampingFactor      = 0.07;
      svControls.screenSpacePanning = true;
    }

    new ResizeObserver(() => {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      if (w > 0 && h > 0) {
        svCamera.aspect = w / h;
        svCamera.updateProjectionMatrix();
        svRenderer.setSize(w, h);
      }
    }).observe(wrap);

    (function loop () {
      requestAnimationFrame(loop);
      if (svControls) svControls.update();
      svRenderer.render(svScene, svCamera);
    })();

    setupFileHandlers();
  }

  /* ── Main init ────────────────────────────────────────────── */
  async function initViewer () {
    initThree();
    setStatus('Loading CAD engine… (~7 MB, one-time)');

    try {
      await loadScript(OCCT_JS);
      if (typeof occtimportjs === 'undefined') {
        throw new Error('occt-import-js did not register a global');
      }

      setStatus('Initialising STEP kernel…');
      occt = await occtimportjs({
        locateFile: (path) => path.endsWith('.wasm') ? OCCT_WASM : path
      });

      setStatus('Fetching STEP file…');
      const res = await fetch(STEP_FILE);
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${STEP_FILE}`);
      const buf = new Uint8Array(await res.arrayBuffer());

      await loadStepFromBuffer(buf, 'shaft_3.STEP');

    } catch (err) {
      setStatus('Error: ' + err.message);
      console.error('[step-viewer]', err);
    }
  }

  /* ── Load a STEP buffer (used for both default file and user files) ── */
  async function loadStepFromBuffer (buf, filename) {
    if (!occt) { setStatus('Engine not ready yet, please wait…'); return; }

    setStatus('Tessellating geometry…');

    /* Remove previous model */
    if (svModel) { svScene.remove(svModel); svModel = null; }

    const result = occt.ReadStepFile(buf, null);

    if (!result.success) throw new Error('ReadStepFile failed');
    if (!result.meshes || result.meshes.length === 0) {
      setStatus('No renderable geometry found in STEP file.');
      return;
    }

    /* Accent palette — copper, gold, dark red only; no blue tones */
    const ACCENTS  = [0xb87040, 0xc8a030, 0x7a1c1c, 0xa06030, 0xd4a84b];
    /* Neutral greyscale — pure grey, no blue cast */
    const NEUTRAL  = 0x888888;
    /* Greyscale ramp for single-part files */
    const SINGLES  = [0x909090, 0x7a7a7a, 0xa8a8a8, 0x686868, 0xb8b8b8];
    const N        = result.meshes.length;

    /* Single part: pick a greyscale from the filename hash */
    const singleColor = (function () {
      let h = 0;
      const s = filename || '';
      for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0xffff;
      return SINGLES[h % SINGLES.length];
    })();

    /* Spread accents evenly so ≤30% of parts are coloured */
    const step     = Math.ceil(N / Math.max(1, Math.floor(N * 0.30)));
    svModel = new THREE.Group();

    result.meshes.forEach((mesh, idx) => {
      const hexColor = (N === 1)
        ? singleColor
        : (idx % step === 0)
          ? ACCENTS[Math.floor(idx / step) % ACCENTS.length]
          : NEUTRAL;

      const positions = mesh.position_array ||
        (mesh.attributes && mesh.attributes.position && mesh.attributes.position.array);
      const normals   = mesh.normal_array   ||
        (mesh.attributes && mesh.attributes.normal   && mesh.attributes.normal.array);
      const indices   = mesh.index_array    ||
        (mesh.index && mesh.index.array);

      if (!positions || positions.length === 0) return;

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(positions), 3));
      if (normals && normals.length > 0) {
        geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(normals), 3));
      }
      if (indices && indices.length > 0) {
        geo.setIndex(new THREE.BufferAttribute(new Uint32Array(indices), 1));
      }
      if (!normals || normals.length === 0) geo.computeVertexNormals();

      svModel.add(new THREE.Mesh(geo, new THREE.MeshPhongMaterial({
        color: hexColor, specular: 0x000000, shininess: 0, side: THREE.DoubleSide,
      })));
    });

    svScene.add(svModel);
    fitCamera(filename);
    hideLoading();

    /* Update filename label and remember for reset */
    if (filename) { svLastFilename = filename; updateFileLabel(filename); }
  }

  /* ── Drag-and-drop + file input ───────────────────────────── */
  function setupFileHandlers () {
    const wrap  = document.getElementById('stepCanvas')?.parentElement;
    const input = document.getElementById('stepFileInput');

    if (wrap) {
      wrap.addEventListener('dragover', e => {
        e.preventDefault();
        wrap.classList.add('drop-hover');
      });
      wrap.addEventListener('dragleave', e => {
        if (!wrap.contains(e.relatedTarget)) wrap.classList.remove('drop-hover');
      });
      wrap.addEventListener('drop', e => {
        e.preventDefault();
        wrap.classList.remove('drop-hover');
        const file = e.dataTransfer.files[0];
        if (file) readAndLoad(file);
      });
    }

    if (input) {
      input.addEventListener('change', () => {
        if (input.files[0]) readAndLoad(input.files[0]);
        input.value = '';   /* allow re-selecting the same file */
      });
    }
  }

  function readAndLoad (file) {
    const reader = new FileReader();
    reader.onload = e => {
      showLoading();
      loadStepFromBuffer(new Uint8Array(e.target.result), file.name)
        .catch(err => { setStatus('Error: ' + err.message); console.error('[step-viewer]', err); });
    };
    reader.readAsArrayBuffer(file);
  }

  function updateFileLabel (name) {
    const el = document.querySelector('.cad-file-label span:last-child');
    if (el) el.textContent = name;
  }

  /* ── Script loader ────────────────────────────────────────── */
  function loadScript (src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const s = document.createElement('script');
      s.src = src; s.onload = resolve;
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
  }

  /* ── Per-file camera presets ─────────────────────────────────
     dir  : [dx, dy, dz] direction multipliers
     scale: zoom multiplier (>1 = farther out, <1 = closer in)  */
  const FILE_CAMERA = {
    'shaft_3.STEP': { scale: 0.70, dir: [ 0.7,  1.0,  0.7] },  /* 30% closer, top-45°  */
    'shaft_2.STEP': { scale: 1.00, dir: [ 1.4,  0.15, 0.1] },  /* side view            */
    'sheet3.STEP':  { scale: 1.30, dir: [ 0.7,  1.0,  0.7] },  /* 30% farther out      */
    'ancor.STEP':   { scale: 1.00, dir: [-0.7,  1.0, -0.7] },  /* opposite side        */
  };

  /* ── Camera auto-fit ──────────────────────────────────────── */
  function fitCamera (filename) {
    if (!svModel) return;

    const box    = new THREE.Box3().setFromObject(svModel);
    const center = box.getCenter(new THREE.Vector3());
    const size   = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1000;

    svCamera.near = maxDim * 0.001;
    svCamera.far  = maxDim * 200;
    svCamera.updateProjectionMatrix();

    const preset      = (filename && FILE_CAMERA[filename]) || { scale: 1.0, dir: [0.7, 1.0, 0.7] };
    const [dx, dy, dz] = preset.dir;
    const s            = preset.scale;

    svCamera.position.set(
      center.x + maxDim * dx * s,
      center.y + maxDim * dy * s,
      center.z + maxDim * dz * s
    );
    svCamera.lookAt(center);

    if (svControls) { svControls.target.copy(center); svControls.update(); }
  }

  /* ── UI helpers ───────────────────────────────────────────── */
  function setStatus (msg) {
    const el = document.getElementById('cad-loading-text');
    if (el) el.textContent = msg;
  }

  function showLoading () {
    const el = document.getElementById('cad-loading');
    if (!el) return;
    el.style.display = '';
    el.style.opacity = '1';
  }

  function hideLoading () {
    const el = document.getElementById('cad-loading');
    if (!el) return;
    el.style.transition = 'opacity .5s';
    el.style.opacity    = '0';
    setTimeout(() => { el.style.display = 'none'; }, 550);
  }

  /* ── Public controls ──────────────────────────────────────── */
  window.stepToggleWireframe = function () {
    svWireframe = !svWireframe;
    if (svModel) {
      svModel.traverse(obj => {
        if (obj.isMesh) obj.material.wireframe = svWireframe;
      });
    }
    const btn = document.getElementById('cadBtnWire');
    if (btn) btn.classList.toggle('active', svWireframe);
  };

  window.stepResetCamera = function () { fitCamera(svLastFilename); };

  window.stepLoadFile = async function (url, filename, listItem) {
    if (!occt) { return; }
    /* Highlight active item */
    document.querySelectorAll('.cad-filelist-item').forEach(el => el.classList.remove('active'));
    if (listItem) listItem.classList.add('active');
    showLoading();
    setStatus('Fetching ' + filename + '…');
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const buf = new Uint8Array(await res.arrayBuffer());
      await loadStepFromBuffer(buf, filename);
    } catch (err) {
      setStatus('Error: ' + err.message);
      console.error('[step-viewer]', err);
    }
  };

  window.stepOpenFile = function () {
    document.getElementById('stepFileInput')?.click();
  };

  /* ── Start ────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
