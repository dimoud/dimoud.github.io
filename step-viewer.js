/* ═══════════════════════════════════════════════════════════════
   step-viewer.js — STEP file viewer via occt-import-js + Three.js
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const STEP_FILE  = 'step/gym_rack.STEP';
  const OCCT_JS    = 'https://cdn.jsdelivr.net/npm/occt-import-js@0.0.23/dist/occt-import-js.js';
  const OCCT_WASM  = 'https://cdn.jsdelivr.net/npm/occt-import-js@0.0.23/dist/occt-import-js.wasm';

  let occt        = null;   /* engine, kept alive for re-use */
  let svScene, svCamera, svRenderer, svControls;
  let svModel     = null;
  let svWireframe = false;
  let svStarted   = false;

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

    /* Even multi-directional lighting */
    svScene.add(new THREE.HemisphereLight(0xffffff, 0xaabbcc, 1.8));
    svScene.add(new THREE.AmbientLight(0xffffff, 1.5));

    const lights = [
      { color: 0xffffff, intensity: 2.8, pos: [ 5,  8,  5] },  /* key — top-front-right */
      { color: 0xddeeff, intensity: 2.0, pos: [-5,  4, -4] },  /* fill — top-back-left  */
      { color: 0xffffff, intensity: 1.6, pos: [ 0, 10,  0] },  /* top                   */
      { color: 0xffeedd, intensity: 1.4, pos: [ 0, -8,  0] },  /* bottom bounce         */
      { color: 0xeef4ff, intensity: 1.6, pos: [-6,  0,  6] },  /* left-front            */
      { color: 0xffffff, intensity: 1.4, pos: [ 6,  0, -6] },  /* right-back            */
      { color: 0xffd8a0, intensity: 1.2, pos: [ 0,  2, 10] },  /* front warm            */
      { color: 0xccddff, intensity: 1.0, pos: [ 0,  2,-10] },  /* back cool             */
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

      await loadStepFromBuffer(buf, 'gym_rack.STEP');

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

    const PALETTE = [0x5b9cf6, 0x90a8c0, 0xc8daf0, 0x4477e0, 0xe8c84a, 0x8899aa];
    svModel = new THREE.Group();

    result.meshes.forEach((mesh, idx) => {
      let hexColor = PALETTE[idx % PALETTE.length];
      if (mesh.color) {
        hexColor = (Math.round(mesh.color.r * 255) << 16) |
                   (Math.round(mesh.color.g * 255) <<  8) |
                    Math.round(mesh.color.b * 255);
      }

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

      svModel.add(new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
        color: hexColor, metalness: 0, roughness: 0.65, side: THREE.DoubleSide,
      })));
    });

    svScene.add(svModel);
    fitCamera();
    hideLoading();

    /* Update filename label */
    if (filename) updateFileLabel(filename);
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

  /* ── Camera auto-fit ──────────────────────────────────────── */
  function fitCamera () {
    if (!svModel) return;

    const box    = new THREE.Box3().setFromObject(svModel);
    const center = box.getCenter(new THREE.Vector3());
    const size   = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1000;

    svCamera.near = maxDim * 0.001;
    svCamera.far  = maxDim * 200;
    svCamera.updateProjectionMatrix();

    svCamera.position.set(
      center.x + maxDim * 1.4,
      center.y + maxDim * 0.9,
      center.z + maxDim * 1.4
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

  window.stepResetCamera = function () { fitCamera(); };

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
