/* ═══════════════════════════════════════════════════════════════
   step-viewer.js — STEP file viewer via OpenCascade.js + Three.js
   • Lazy-loads the CAD engine when the section scrolls into view
   • Extracts real tessellated geometry (no placeholder boxes)
   • XDE colour extraction (keeps original STEP colours)
   • Falls back to solid-by-solid with palette colours if XDE fails
═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const STEP_FILE = 'step/gym_rack.STEP';
  const OC_CDN   = 'https://cdn.jsdelivr.net/npm/opencascade.js@1.1.1/dist/opencascade.wasm.js';

  let oc  = null;
  let svScene, svCamera, svRenderer, svControls;
  let svModel    = null;
  let svWireframe = false;
  let svStarted   = false;

  /* ── Boot: trigger on first scroll into view ─────────────── */
  function boot() {
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

  /* ── Three.js scene setup ────────────────────────────────── */
  function initThree() {
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

    /* Lights */
    svScene.add(new THREE.AmbientLight(0xffffff, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(2, 3, 4); svScene.add(key);
    const fill = new THREE.DirectionalLight(0x88aaff, 1.2);
    fill.position.set(-3, 1, -2); svScene.add(fill);
    const rim = new THREE.PointLight(0xffc060, 1.5, 0);
    rim.position.set(0, -2, -4); svScene.add(rim);

    /* OrbitControls */
    if (typeof THREE.OrbitControls !== 'undefined') {
      svControls = new THREE.OrbitControls(svCamera, svRenderer.domElement);
      svControls.enableDamping   = true;
      svControls.dampingFactor   = 0.07;
      svControls.screenSpacePanning = true;
    }

    /* Responsive resize */
    new ResizeObserver(() => {
      const w = wrap.clientWidth, h = wrap.clientHeight;
      if (w > 0 && h > 0) {
        svCamera.aspect = w / h;
        svCamera.updateProjectionMatrix();
        svRenderer.setSize(w, h);
      }
    }).observe(wrap);

    /* Render loop */
    (function loop() {
      requestAnimationFrame(loop);
      if (svControls) svControls.update();
      svRenderer.render(svScene, svCamera);
    })();
  }

  /* ── Main init ───────────────────────────────────────────── */
  async function initViewer() {
    initThree();
    setStatus('Loading CAD engine… (~63 MB, one-time)');

    try {
      setStatus('Initialising OpenCascade kernel…');
      let opencascadeInit;
      try {
        // Try ESM dynamic import first (opencascade.js@1.1.1 dist is ESM)
        const mod = await import(OC_CDN);
        opencascadeInit = mod.default || mod.opencascade || mod;
      } catch (_) {
        // Fall back to classic script global
        await loadScript(OC_CDN);
        opencascadeInit = window.opencascade;
      }
      oc = await opencascadeInit({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/opencascade.js@1.1.1/dist/${file}`
      });
      setStatus('Fetching STEP file…');
      await loadStep(STEP_FILE);
    } catch (err) {
      setStatus('Error: ' + err.message);
      console.error('[step-viewer]', err);
    }
  }

  /* ── Dynamic script loader ───────────────────────────────── */
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
      const s = document.createElement('script');
      s.src = src;
      s.onload  = resolve;
      s.onerror = () => reject(new Error('Failed to load ' + src));
      document.head.appendChild(s);
    });
  }

  /* ── STEP loading ────────────────────────────────────────── */
  async function loadStep(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const buf = await res.arrayBuffer();

    oc.FS.writeFile('/model.step', new Uint8Array(buf));
    setStatus('Tessellating geometry…');

    let meshes = [];

    /* Try XDE (colour-aware) first */
    try {
      meshes = extractWithXDE();
    } catch (e) {
      console.warn('[step-viewer] XDE extraction failed, using fallback:', e);
      meshes = extractFallback();
    }

    if (meshes.length === 0) {
      setStatus('No renderable geometry found.');
      return;
    }

    svModel = new THREE.Group();
    meshes.forEach(m => svModel.add(m));
    svScene.add(svModel);

    fitCamera();
    hideLoading();
  }

  /* ══════════════════════════════════════════════════════════
     XDE extraction — reads colours per solid/face from STEP
  ══════════════════════════════════════════════════════════ */
  function extractWithXDE() {
    const meshes = [];

    /* Create XDE document via CAF application */
    const cafReader = new oc.STEPCAFControl_Reader_1();
    cafReader.SetColorMode(true);
    cafReader.SetNameMode(true);

    const status = cafReader.ReadFile('/model.step');
    if (status !== oc.IFSelect_ReturnStatus.IFSelect_RetDone) {
      throw new Error('STEPCAFControl_Reader: ReadFile failed');
    }

    /* Create document handle */
    const docHandle = new oc.Handle_TDocStd_Document_2(
      new oc.TDocStd_Document_2(
        new oc.TCollection_ExtendedString_2('MDTV-CAF')
      )
    );

    cafReader.Transfer_1(docHandle);

    const shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(docHandle.get().Main()).get();
    const colorTool = oc.XCAFDoc_DocumentTool.ColorTool(docHandle.get().Main()).get();

    const freeLabels = new oc.TDF_LabelSequence_1();
    shapeTool.GetFreeShapes(freeLabels);

    for (let i = 1; i <= freeLabels.Size(); i++) {
      processLabel(freeLabels.Value(i), shapeTool, colorTool, meshes, null);
    }

    return meshes;
  }

  function processLabel(label, shapeTool, colorTool, meshes, inheritColor) {
    const color = readColor(label, colorTool) ?? inheritColor;

    if (shapeTool.IsSimpleShape_1(label)) {
      const shape = shapeTool.GetShape_1(label);
      const mesh  = tessellate(shape, color ?? 0x8899aa);
      if (mesh) meshes.push(mesh);
      return;
    }

    /* Recurse into component references */
    const comps = new oc.TDF_LabelSequence_1();
    shapeTool.GetComponents_1(label, comps, false);

    for (let i = 1; i <= comps.Size(); i++) {
      const compLabel = comps.Value(i);
      const compColor = readColor(compLabel, colorTool);

      if (shapeTool.IsReference_1(compLabel)) {
        const refLabel = new oc.TDF_Label_1();
        shapeTool.GetReferredShape_1(compLabel, refLabel);
        const refColor = readColor(refLabel, colorTool);
        processLabel(refLabel, shapeTool, colorTool, meshes,
          compColor ?? refColor ?? color);
      } else {
        processLabel(compLabel, shapeTool, colorTool, meshes,
          compColor ?? color);
      }
    }
  }

  function readColor(label, colorTool) {
    const types = [
      oc.XCAFDoc_ColorType.XCAFDoc_ColorSurf,
      oc.XCAFDoc_ColorType.XCAFDoc_ColorGen,
      oc.XCAFDoc_ColorType.XCAFDoc_ColorCurv,
    ];
    const rgba = new oc.Quantity_ColorRGBA_1();
    for (const type of types) {
      try {
        if (colorTool.GetColor_1(label, type, rgba)) {
          const rgb = rgba.GetRGB();
          return (Math.round(rgb.Red()   * 255) << 16) |
                 (Math.round(rgb.Green() * 255) <<  8) |
                  Math.round(rgb.Blue()  * 255);
        }
      } catch (_) { /* not all labels carry colour */ }
    }
    return null;
  }

  /* ══════════════════════════════════════════════════════════
     Fallback — STEPControl_Reader, solid-by-solid, palette colours
  ══════════════════════════════════════════════════════════ */
  function extractFallback() {
    const meshes = [];
    const palette = [0x3b82f6, 0x778899, 0xb0c4de, 0x1a55d0, 0xd4af37, 0x444455];

    const reader = new oc.STEPControl_Reader_1();
    reader.ReadFile('/model.step');
    reader.TransferRoots();
    const shape = reader.OneShape();

    const exp = new oc.TopExp_Explorer_2(
      shape,
      oc.TopAbs_ShapeEnum.TopAbs_SOLID,
      oc.TopAbs_ShapeEnum.TopAbs_SHAPE
    );

    let idx = 0;
    while (exp.More()) {
      const solid = oc.TopoDS.Solid_1(exp.Current());
      const mesh  = tessellate(solid, palette[idx++ % palette.length]);
      if (mesh) meshes.push(mesh);
      exp.Next();
    }

    /* If no solids found, tessellate the whole shape */
    if (meshes.length === 0) {
      const mesh = tessellate(shape, 0x778899);
      if (mesh) meshes.push(mesh);
    }

    return meshes;
  }

  /* ══════════════════════════════════════════════════════════
     Core tessellation — BRepMesh → faces → BufferGeometry
  ══════════════════════════════════════════════════════════ */
  function tessellate(shape, hexColor) {
    try {
      /* Mesh the shape at 0.3 mm linear deflection, 0.5 rad angular */
      new oc.BRepMesh_IncrementalMesh_2(shape, 0.3, false, 0.5, false);

      const verts = [];

      const faceExp = new oc.TopExp_Explorer_2(
        shape,
        oc.TopAbs_ShapeEnum.TopAbs_FACE,
        oc.TopAbs_ShapeEnum.TopAbs_SHAPE
      );

      while (faceExp.More()) {
        const face     = oc.TopoDS.Face_1(faceExp.Current());
        const reversed = face.Orientation_1() === oc.TopAbs_Orientation.TopAbs_REVERSED;

        const loc       = new oc.TopLoc_Location_1();
        const triHandle = oc.BRep_Tool.Triangulation(face, loc);

        if (!triHandle.IsNull()) {
          const poly   = triHandle.get();
          const nbTri  = poly.NbTriangles();

          for (let t = 1; t <= nbTri; t++) {
            const tri = poly.Triangle(t);
            let n1 = tri.Value(1), n2 = tri.Value(2), n3 = tri.Value(3);
            if (reversed) { const tmp = n2; n2 = n3; n3 = tmp; }

            for (const ni of [n1, n2, n3]) {
              const pt = poly.Node(ni);
              verts.push(pt.X(), pt.Y(), pt.Z());
            }
          }
        }

        faceExp.Next();
      }

      if (verts.length === 0) return null;

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(verts), 3));
      geo.computeVertexNormals();

      const mat = new THREE.MeshStandardMaterial({
        color:     hexColor ?? 0x8899aa,
        metalness: 0.4,
        roughness: 0.55,
        side:      THREE.DoubleSide,
      });

      return new THREE.Mesh(geo, mat);

    } catch (err) {
      console.warn('[step-viewer] tessellate error:', err);
      return null;
    }
  }

  /* ── Camera auto-fit ─────────────────────────────────────── */
  function fitCamera() {
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

    /* Faint ground grid */
    const grid = new THREE.GridHelper(maxDim * 3, 20, 0x1a2040, 0x111828);
    grid.position.set(center.x, box.min.y, center.z);
    svScene.add(grid);
  }

  /* ── Loading UI helpers ──────────────────────────────────── */
  function setStatus(msg) {
    const el = document.getElementById('cad-loading-text');
    if (el) el.textContent = msg;
  }

  function hideLoading() {
    const el = document.getElementById('cad-loading');
    if (!el) return;
    el.style.transition = 'opacity .5s';
    el.style.opacity    = '0';
    setTimeout(() => { el.style.display = 'none'; }, 550);
  }

  /* ── Public controls ─────────────────────────────────────── */
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

  window.stepResetCamera = function () {
    fitCamera();
  };

  /* ── Start ───────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
