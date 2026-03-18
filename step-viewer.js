/* ═══════════════════════════════════════════════════════════════
   step-viewer.js — STEP file viewer via occt-import-js + Three.js
   Uses occt-import-js (purpose-built STEP/IGES importer, ~15 MB WASM)
   instead of the full OpenCascade.js bundle which has WASM fetch issues.
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const STEP_FILE  = 'step/gym_rack.STEP';
  const OCCT_JS    = 'https://cdn.jsdelivr.net/npm/occt-import-js@0.0.23/dist/occt-import-js.js';
  const OCCT_WASM  = 'https://cdn.jsdelivr.net/npm/occt-import-js@0.0.23/dist/occt-import-js.wasm';

  let svScene, svCamera, svRenderer, svControls;
  let svModel    = null;
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
    svRenderer.setClearColor(0x0a0d16, 1);

    svCamera = new THREE.PerspectiveCamera(45, W / H, 0.01, 1e6);
    svCamera.position.set(800, 600, 800);

    svScene = new THREE.Scene();

    svScene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(2, 3, 4); svScene.add(key);
    const fill = new THREE.DirectionalLight(0x88aaff, 1.2);
    fill.position.set(-3, 1, -2); svScene.add(fill);
    const rim = new THREE.PointLight(0xffc060, 1.5, 0);
    rim.position.set(0, -2, -4); svScene.add(rim);

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
  }

  /* ── Main init ────────────────────────────────────────────── */
  async function initViewer () {
    initThree();
    setStatus('Loading CAD engine… (~7 MB, one-time)');

    try {
      /* Load occt-import-js runtime */
      await loadScript(OCCT_JS);

      if (typeof occtimportjs === 'undefined') {
        throw new Error('occt-import-js did not register a global');
      }

      setStatus('Initialising STEP kernel…');
      const occt = await occtimportjs({
        locateFile: (path) => {
          if (path.endsWith('.wasm')) return OCCT_WASM;
          return path;
        }
      });

      setStatus('Fetching STEP file…');
      const res = await fetch(STEP_FILE);
      if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${STEP_FILE}`);
      const buf = new Uint8Array(await res.arrayBuffer());

      setStatus('Tessellating geometry…');
      const result = occt.ReadStepFile(buf, null);

      if (!result.success) throw new Error('occt-import-js: ReadStepFile returned failure');
      if (!result.meshes || result.meshes.length === 0) {
        setStatus('No renderable geometry found in STEP file.');
        return;
      }

      svModel = new THREE.Group();
      const PALETTE = [0x3b82f6, 0x778899, 0xb0c4de, 0x1a55d0, 0xd4af37, 0x444455];

      result.meshes.forEach((mesh, idx) => {
        /* Colour from STEP metadata; fall back to palette */
        let hexColor = PALETTE[idx % PALETTE.length];
        if (mesh.color) {
          hexColor = (Math.round(mesh.color.r * 255) << 16) |
                     (Math.round(mesh.color.g * 255) <<  8) |
                      Math.round(mesh.color.b * 255);
        }

        /* occt-import-js exposes flat typed arrays:
           position_array (Float32Array), normal_array, index_array (Uint32Array) */
        const positions = mesh.position_array || (mesh.attributes && mesh.attributes.position && mesh.attributes.position.array);
        const normals   = mesh.normal_array   || (mesh.attributes && mesh.attributes.normal   && mesh.attributes.normal.array);
        const indices   = mesh.index_array    || (mesh.index && mesh.index.array);

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

        const mat = new THREE.MeshStandardMaterial({
          color:     hexColor,
          metalness: 0.4,
          roughness: 0.55,
          side:      THREE.DoubleSide,
        });

        svModel.add(new THREE.Mesh(geo, mat));
      });

      svScene.add(svModel);
      fitCamera();
      hideLoading();

    } catch (err) {
      setStatus('Error: ' + err.message);
      console.error('[step-viewer]', err);
    }
  }

  /* ── Script loader ────────────────────────────────────────── */
  function loadScript (src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const s = document.createElement('script');
      s.src     = src;
      s.onload  = resolve;
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

    if (svControls) {
      svControls.target.copy(center);
      svControls.update();
    }

    const grid = new THREE.GridHelper(maxDim * 3, 20, 0x1a2040, 0x111828);
    grid.position.set(center.x, box.min.y, center.z);
    svScene.add(grid);
  }

  /* ── UI helpers ───────────────────────────────────────────── */
  function setStatus (msg) {
    const el = document.getElementById('cad-loading-text');
    if (el) el.textContent = msg;
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

  /* ── Start ────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
