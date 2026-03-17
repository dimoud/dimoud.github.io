/* ═══════════════════════════════════════════════════════════════
   models.js — Three 3D models cycling every 10 s
   Precision Planetary · Turbofan w/ Stators · DOHC Inline-4
═══════════════════════════════════════════════════════════════ */

let scene, camera, renderer, clock;
let rotGroup = null, parts = [];
let explodeT = 0, exploding = false, isDragging = false;
let prevMouse = { x: 0, y: 0 }, floatT = 0, mechT = 0;

/* Global Settings */
let currentMode = 'rotate';
let currentModelIdx = 0;
let modelCycleTimer = null;

/* ── Materials ──────────────────────────────────────────────── */
function makeMats() {
  return {
    chrome:   new THREE.MeshStandardMaterial({ color: 0xe8f4ff, metalness: 1.0, roughness: 0.1 }),
    steel:    new THREE.MeshStandardMaterial({ color: 0xb0c4de, metalness: 0.8, roughness: 0.35 }),
    blue:     new THREE.MeshStandardMaterial({ color: 0x1a55d0, metalness: 0.6, roughness: 0.4 }),
    gold:     new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.2 }),
    brass:    new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.3 }),
    orange:   new THREE.MeshStandardMaterial({ color: 0xff4400, metalness: 0.4, roughness: 0.6, emissive: 0x551100 }),
    dark:     new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.7, roughness: 0.7 }),
    darkB:    new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.5 }),
    titanium: new THREE.MeshStandardMaterial({ color: 0x778899, metalness: 0.7, roughness: 0.3 }),
    glass:    new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.1, roughness: 0.1, transmission: 0.9, transparent: true })
  };
}

/* ── Lights ─────────────────────────────────────────────────── */
function addLights(s) {
  s.add(new THREE.AmbientLight(0xffffff, 1.2));
  const key = new THREE.DirectionalLight(0xffffff, 4.0);
  key.position.set(10, 15, 12); key.castShadow = true;
  s.add(key);
  const fill = new THREE.DirectionalLight(0xaaccff, 2.5);
  fill.position.set(-10, 5, -10); s.add(fill);
  const back = new THREE.PointLight(0xffaa55, 4.0, 50);
  back.position.set(0, -5, -15); s.add(back);
}

/* ── Gear shape helpers ─────────────────────────────────────── */
function gearShape(teeth, pR, tH, hR) {
  const s = new THREE.Shape(), step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a0=i*step-step*.4, a1=i*step-step*.15, a2=i*step+step*.15, a3=i*step+step*.4;
    const p = (a, r) => [Math.cos(a)*r, Math.sin(a)*r];
    i===0 ? s.moveTo(...p(a0,pR)) : s.lineTo(...p(a0,pR));
    s.lineTo(...p(a1,pR+tH)); s.lineTo(...p(a2,pR+tH)); s.lineTo(...p(a3,pR));
  }
  s.closePath();
  if (hR > 0) {
    const hub = new THREE.Path(); hub.absarc(0,0,hR,0,Math.PI*2,true); s.holes.push(hub);
  }
  return s;
}

function ringShape(teeth, oR, tRR, tH) {
  const s = new THREE.Shape(); s.absarc(0,0,oR,0,Math.PI*2,false);
  const step = (Math.PI*2)/teeth, inner = new THREE.Path();
  for (let i=0; i<teeth; i++) {
    const a0=i*step-step*.4, a1=i*step-step*.15, a2=i*step+step*.15, a3=i*step+step*.4;
    const p = (a,r) => [Math.cos(a)*r, Math.sin(a)*r];
    i===0 ? inner.moveTo(...p(a0,tRR)) : inner.lineTo(...p(a0,tRR));
    inner.lineTo(...p(a1,tRR-tH)); inner.lineTo(...p(a2,tRR-tH)); inner.lineTo(...p(a3,tRR));
  }
  inner.closePath(); s.holes.push(inner); return s;
}

/* ═══════════════════════════════════════════════════════════════
   MODEL 0 — PRECISION PLANETARY GEARBOX
═══════════════════════════════════════════════════════════════ */
function buildGearbox(group, m) {
  const ps = [];
  const ext = { depth: 0.6, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.02, bevelSegments: 2 };
  
  // Exact Kinematics: Ts=18, Tp=12, Tr=42 (18 + 2*12 = 42). Modulus = 0.2
  const Ts = 18, Tp = 12, Tr = 42;
  const Rs = 1.8, Rp = 1.2, Rr = 4.2; 
  const orbitR = Rs + Rp; // 3.0

  /* Sun Gear */
  const sun = new THREE.Mesh(new THREE.ExtrudeGeometry(gearShape(Ts, Rs, 0.25, 0.6), ext), m.gold);
  group.add(sun);
  
  const sunShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 3.0, 32), m.chrome);
  sunShaft.rotation.x = Math.PI/2; sunShaft.position.z = 1.5; group.add(sunShaft);
  
  ps.push({mesh: sun, isSun: true, o: sun.position.clone(), d: new THREE.Vector3(0,0,2)});
  ps.push({mesh: sunShaft, isSun: true, o: sunShaft.position.clone(), d: new THREE.Vector3(0,0,4)});

  /* Planets & Carrier */
  const carrierGroup = new THREE.Group(); group.add(carrierGroup);
  ps.push({mesh: carrierGroup, isCarrier: true, o: carrierGroup.position.clone(), d: new THREE.Vector3(0,0,0)});

  const pAngles = [0, Math.PI*2/3, Math.PI*4/3];
  pAngles.forEach((a, i) => {
    const planet = new THREE.Mesh(new THREE.ExtrudeGeometry(gearShape(Tp, Rp, 0.25, 0.4), ext), m.steel);
    // Initial position aligned mathematically
    planet.position.set(Math.cos(a)*orbitR, Math.sin(a)*orbitR, 0);
    
    // To mesh perfectly at t=0, rotate planet so a tooth points at the sun
    // For Tp=12, teeth are every PI/6. 
    planet.rotation.z = a + (Math.PI / Tp); 
    group.add(planet);
    
    ps.push({
      mesh: planet, isPlanet: true, angle: a,
      o: planet.position.clone(), d: new THREE.Vector3(Math.cos(a)*5, Math.sin(a)*5, 0)
    });

    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 1.4, 16), m.titanium);
    pin.rotation.x = Math.PI/2; pin.position.set(Math.cos(a)*orbitR, Math.sin(a)*orbitR, 0.3);
    carrierGroup.add(pin);
  });

  /* Carrier Plates */
  const cShape = new THREE.Shape(); cShape.absarc(0,0, 3.8, 0, Math.PI*2, false);
  const cHub = new THREE.Path(); cHub.absarc(0,0, 0.7, 0, Math.PI*2, true); cShape.holes.push(cHub);
  const carrierPlate = new THREE.Mesh(new THREE.ExtrudeGeometry(cShape, {depth: 0.2, bevelEnabled: false}), m.dark);
  carrierPlate.position.z = -0.4; carrierGroup.add(carrierPlate);
  
  const outputShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 3.0, 32), m.darkB);
  outputShaft.rotation.x = Math.PI/2; outputShaft.position.z = -1.5; carrierGroup.add(outputShaft);

  /* Ring Gear (Fixed) */
  const ring = new THREE.Mesh(new THREE.ExtrudeGeometry(ringShape(Tr, 4.8, Rr, 0.25), ext), m.blue);
  group.add(ring);
  ps.push({mesh: ring, o: ring.position.clone(), d: new THREE.Vector3(0,0,-3)});

  // Store kinematic constants
  group.userData = { Ts, Tp, Tr, orbitR };

  return ps;
}

/* ═══════════════════════════════════════════════════════════════
   MODEL 1 — TURBOFAN ENGINE (Rotors + Stators)
═══════════════════════════════════════════════════════════════ */
function buildTurbofan(group, m) {
  const ps = [];
  
  // Cutaway Casings (1/4 sliced out)
  const cutStart = Math.PI * 0.25, cutLen = Math.PI * 1.5;
  const outerCase = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.2, 11.0, 36, 1, false, cutStart, cutLen), m.titanium);
  outerCase.rotation.x = Math.PI / 2; group.add(outerCase);
  ps.push({mesh: outerCase, o: outerCase.position.clone(), d: new THREE.Vector3(0, 5, 0)});

  const innerCase = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.2, 6.0, 32, 1, false, cutStart, cutLen), m.steel);
  innerCase.rotation.x = Math.PI/2; innerCase.position.z = -1.0; group.add(innerCase);
  ps.push({mesh: innerCase, o: innerCase.position.clone(), d: new THREE.Vector3(0, -5, 0)});

  // Spools
  const lpSpool = new THREE.Group(); group.add(lpSpool);
  const hpSpool = new THREE.Group(); group.add(hpSpool);
  ps.push({mesh: lpSpool, isSpool: true, speed: -2.0, o: lpSpool.position.clone(), d: new THREE.Vector3(0,0, 3)});
  ps.push({mesh: hpSpool, isSpool: true, speed: -4.5, o: hpSpool.position.clone(), d: new THREE.Vector3(0,0,-3)});

  lpSpool.add(new THREE.Mesh(new THREE.ConeGeometry(0.9, 2.5, 24), m.chrome)).children[0].rotation.x = -Math.PI/2;
  lpSpool.children[0].position.z = 5.5;

  // Fan (LP)
  for(let i=0; i<24; i++) {
    const a = (i/24)*Math.PI*2;
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.15, 2.6, 0.4), m.chrome);
    b.position.set(Math.cos(a)*2.1, Math.sin(a)*2.1, 4.2); b.rotation.set(0.4, 0, a); lpSpool.add(b);
  }

  // HP Compressor Rotors & Stators
  const statorGroup = new THREE.Group(); group.add(statorGroup);
  ps.push({mesh: statorGroup, o: statorGroup.position.clone(), d: new THREE.Vector3(0, 5, 0)});

  for (let s = 0; s < 4; s++) {
    const z = 1.0 - s * 0.6;
    const r = 2.2 - s * 0.1;
    
    // Rotor (Spins)
    const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.2, 24), m.dark);
    rotor.rotation.x = Math.PI/2; rotor.position.z = z; hpSpool.add(rotor);
    for (let i = 0; i < 36; i++) {
      const a = (i/36)*Math.PI*2;
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.05, r - 0.7, 0.15), m.steel);
      b.position.set(Math.cos(a)*(r+0.7)/2, Math.sin(a)*(r+0.7)/2, z);
      b.rotation.set(0.25, 0, a); hpSpool.add(b);
    }

    // Stator (Fixed to casing, cutaway matched)
    if (s < 3) {
      const sz = z - 0.3;
      for (let i = 0; i < 36; i++) {
        const a = (i/36)*Math.PI*2;
        if (a > cutStart && a < cutStart + cutLen) {
          const st = new THREE.Mesh(new THREE.BoxGeometry(0.04, r - 0.72, 0.15), m.brass);
          st.position.set(Math.cos(a)*(r+0.72)/2, Math.sin(a)*(r+0.72)/2, sz);
          st.rotation.set(-0.25, 0, a); statorGroup.add(st);
        }
      }
    }
  }

  // Combustor
  const combustor = new THREE.Mesh(new THREE.CylinderGeometry(1.8, 1.8, 1.5, 32, 1, false, cutStart, cutLen), m.orange);
  combustor.rotation.x = Math.PI/2; combustor.position.z = -2.5; group.add(combustor);
  ps.push({mesh: combustor, o: combustor.position.clone(), d: new THREE.Vector3(0, 0, -5)});

  // LP Turbine
  for (let s = 0; s < 3; s++) {
    const z = -4.5 - s * 0.6;
    for (let i = 0; i < 48; i++) {
      const a = (i/48)*Math.PI*2;
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.06, 1.6, 0.25), m.gold);
      b.position.set(Math.cos(a)*1.4, Math.sin(a)*1.4, z);
      b.rotation.set(-0.35, 0, a); lpSpool.add(b);
    }
  }

  return ps;
}

/* ═══════════════════════════════════════════════════════════════
   MODEL 2 — DOHC INLINE-4 ENGINE (Valves & Pistons)
═══════════════════════════════════════════════════════════════ */
function buildPistonEngine(group, m) {
  const ps = [];
  const crankY = -1.2, crankR = 0.6, conrodL = 2.4;
  
  // Firing order 1-3-4-2. Phases relative to crank (0 to 4PI for full cycle)
  const cyls = [
    { x: -2.25, crankPhase: 0,       cyclePhase: 0 },         // Cyl 1
    { x: -0.75, crankPhase: Math.PI, cyclePhase: Math.PI*3 }, // Cyl 2
    { x:  0.75, crankPhase: Math.PI, cyclePhase: Math.PI },   // Cyl 3
    { x:  2.25, crankPhase: 0,       cyclePhase: Math.PI*2 }  // Cyl 4
  ];

  /* Block & Head */
  const block = new THREE.Mesh(new THREE.BoxGeometry(6.5, 3.5, 2.5), m.dark);
  block.position.y = 1.0; group.add(block);
  ps.push({mesh: block, o: block.position.clone(), d: new THREE.Vector3(0, 0, 4)});

  const head = new THREE.Mesh(new THREE.BoxGeometry(6.5, 1.5, 2.4), m.titanium);
  head.position.y = 3.5; group.add(head);
  ps.push({mesh: head, o: head.position.clone(), d: new THREE.Vector3(0, 0, -4)});

  /* Crankshaft */
  const crankGroup = new THREE.Group(); crankGroup.position.y = crankY; group.add(crankGroup);
  ps.push({mesh: crankGroup, isCrank: true, o: crankGroup.position.clone(), d: new THREE.Vector3(0, -5, 0)});
  
  const mainCrank = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 6.8, 16), m.steel);
  mainCrank.rotation.z = Math.PI/2; crankGroup.add(mainCrank);

  /* Camshafts (Intake & Exhaust) */
  const inCam = new THREE.Group(), exCam = new THREE.Group();
  inCam.position.set(0, 4.4, 0.5); exCam.position.set(0, 4.4, -0.5);
  group.add(inCam); group.add(exCam);
  ps.push({mesh: inCam, isCam: true, o: inCam.position.clone(), d: new THREE.Vector3(0, 6, 2)});
  ps.push({mesh: exCam, isCam: true, o: exCam.position.clone(), d: new THREE.Vector3(0, 6, -2)});

  [inCam, exCam].forEach(cam => {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 6.6, 16), m.chrome);
    shaft.rotation.z = Math.PI/2; cam.add(shaft);
  });

  cyls.forEach((cyl) => {
    /* Piston & Rod */
    const pinY = Math.cos(cyl.crankPhase) * crankR;
    const pinZ = Math.sin(cyl.crankPhase) * crankR;
    
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.8, 16), m.brass);
    pin.rotation.z = Math.PI/2; pin.position.set(cyl.x, pinY, pinZ); crankGroup.add(pin);
    
    const web = new THREE.Mesh(new THREE.BoxGeometry(0.3, crankR+0.3, 0.5), m.steel);
    web.position.set(cyl.x - 0.4, pinY/2, pinZ/2); crankGroup.add(web);

    const piston = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.9, 32), m.chrome);
    group.add(piston);
    const rod = new THREE.Mesh(new THREE.BoxGeometry(0.25, conrodL, 0.35), m.titanium);
    group.add(rod);

    /* Valves (2 per cylinder) */
    const inValve = new THREE.Group(), exValve = new THREE.Group();
    group.add(inValve); group.add(exValve);
    
    [inValve, exValve].forEach((v, idx) => {
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.2, 8), m.steel);
      const vHead = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.1, 16), m.chrome);
      vHead.position.y = -0.6; v.add(stem); v.add(vHead);
      v.position.set(cyl.x, 3.8, idx === 0 ? 0.5 : -0.5);
    });

    /* Cam Lobes */
    const inLobe = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.25, 16), m.darkB);
    inLobe.rotation.z = Math.PI/2; inLobe.position.set(cyl.x, 0, 0); inCam.add(inLobe);
    
    const exLobe = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.25, 16), m.darkB);
    exLobe.rotation.z = Math.PI/2; exLobe.position.set(cyl.x, 0, 0); exCam.add(exLobe);

    ps.push({
      isEngineKinematic: true, cx: cyl.x, crankPhase: cyl.crankPhase, cyclePhase: cyl.cyclePhase,
      piston, rod, inValve, exValve, inLobe, exLobe,
      oP: piston.position.clone(), oR: rod.position.clone()
    });
  });

  return ps;
}

/* ═══════════════════════════════════════════════════════════════
   INIT & KINEMATICS ENGINE
═══════════════════════════════════════════════════════════════ */
function initThree() {
  const canvas=document.getElementById('hero3d');
  if (!canvas || typeof THREE==='undefined') return;
  const parent=canvas.parentElement, W=parent.clientWidth||640, H=parent.clientHeight||580;

  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(W,H); renderer.setClearColor(0x000000,0);
  camera=new THREE.PerspectiveCamera(38,W/H,.1,300);
  camera.position.set(0, 2, 22); camera.lookAt(0,0,0);
  clock=new THREE.Clock();

  loadModel(0);
  setupDrag(canvas, parent);
  animate();

  modelCycleTimer=setInterval(()=>loadModel((currentModelIdx+1)%3), 10000);
}

function loadModel(idx) {
  currentModelIdx = idx;
  scene=new THREE.Scene(); addLights(scene);
  rotGroup=new THREE.Group(); rotGroup.rotation.x=0.25; rotGroup.scale.set(0.7,0.7,0.7);
  scene.add(rotGroup);
  parts=[]; explodeT=0; exploding=false; floatT=0; mechT=0; currentMode='rotate';

  const m=makeMats();
  if (idx===0)      parts=buildGearbox(rotGroup,m);
  else if (idx===1) parts=buildTurbofan(rotGroup,m);
  else              parts=buildPistonEngine(rotGroup,m);

  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const rb=document.getElementById('btn-rotate'); if(rb) rb.classList.add('active');
  const labels=['PRECISION PLANETARY','TURBOFAN W/ STATORS','DOHC INLINE-4'];
  const ind=document.getElementById('model-indicator'); if (ind) ind.textContent=labels[idx];
}

function setupDrag(canvas, parent) {
  let msx=0, msy=0, didDrag=false;
  canvas.addEventListener('mousedown',e=>{isDragging=true;didDrag=false;msx=e.clientX;msy=e.clientY;prevMouse={x:e.clientX,y:e.clientY};});
  window.addEventListener('mouseup',()=>isDragging=false);
  window.addEventListener('mousemove',e=>{
    if(!isDragging)return;
    if(Math.abs(e.clientX-msx)>4||Math.abs(e.clientY-msy)>4) didDrag=true;
    rotGroup.rotation.y+=(e.clientX-prevMouse.x)*.010;
    rotGroup.rotation.x+=(e.clientY-prevMouse.y)*.007;
    rotGroup.rotation.x=Math.max(-1.2,Math.min(1.2,rotGroup.rotation.x));
    prevMouse={x:e.clientX,y:e.clientY};
  });
  canvas.addEventListener('click',()=>{if(!didDrag) exploding=!exploding;});
}

function animate() {
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),.05);
  floatT+=dt; if (explodeT < 0.1) mechT += dt;

  if (!isDragging && currentMode==='rotate') {
    rotGroup.rotation.y+=0.005; rotGroup.position.y=Math.sin(floatT*.8)*.05;
  }

  // --- MODEL 0: Planetary Math ---
  if (currentModelIdx === 0 && rotGroup.userData.Ts) {
    const { Ts, Tp, Tr, orbitR } = rotGroup.userData;
    const sunSpeed = 2.0;
    const sunAngle = mechT * sunSpeed;
    const carrierAngle = sunAngle * (Ts / (Ts + Tr));
    const planetSpinRel = (sunAngle - carrierAngle) * (-Ts / Tp);

    parts.forEach(p => {
      if (p.isSun) p.mesh.rotation.z = sunAngle;
      if (p.isCarrier) p.mesh.rotation.z = carrierAngle;
      if (p.isPlanet) {
        // Absolute position based on carrier, absolute spin based on relative gear math
        p.mesh.position.set(Math.cos(p.angle + carrierAngle)*orbitR, Math.sin(p.angle + carrierAngle)*orbitR, 0);
        p.mesh.rotation.z = p.angle + carrierAngle + planetSpinRel + (Math.PI / Tp);
      }
    });
  }

  // --- MODEL 1: Turbofan Math ---
  if (currentModelIdx === 1) {
    parts.forEach(p => { if (p.isSpool) p.mesh.rotation.z = mechT * p.speed; });
  }

  // --- MODEL 2: DOHC Engine Math ---
  if (currentModelIdx === 2) {
    const crankSpeed = -4.0, crankAngle = mechT * crankSpeed, camAngle = crankAngle * 0.5;
    const crankY = -1.2, crankR = 0.6, conrodL = 2.4;

    parts.forEach(p => {
      if (p.isCrank) p.mesh.rotation.x = crankAngle;
      if (p.isCam) p.mesh.rotation.x = camAngle;
      if (p.isEngineKinematic) {
        // Piston & Rod Slider-Crank
        const lA = crankAngle + p.crankPhase;
        const pinY = crankY + Math.cos(lA) * crankR, pinZ = Math.sin(lA) * crankR;
        const pistonY = pinY + Math.sqrt(conrodL*conrodL - pinZ*pinZ);
        
        p.piston.position.set(p.cx, pistonY, 0);
        p.rod.position.set(p.cx, (pinY + pistonY)/2, pinZ/2);
        p.rod.rotation.x = -Math.atan2(pinZ, pistonY - pinY);

        // Valvetrain & Cams
        // Intake opens during stroke 0-PI. Exhaust during 3PI-4PI.
        const cPhase = (camAngle - p.cyclePhase/2) % (Math.PI*2);
        
        // Calculate cam lobe rotation and visual offset
        p.inLobe.position.y = Math.cos(cPhase) * 0.08;
        p.inLobe.position.z = Math.sin(cPhase) * 0.08;
        
        const exPhase = cPhase - Math.PI*1.5; // Offset by 3 strokes
        p.exLobe.position.y = Math.cos(exPhase) * 0.08;
        p.exLobe.position.z = Math.sin(exPhase) * 0.08;

        // Simple valve lift based on lobe position pointing down
        p.inValve.position.y = 3.8 - Math.max(0, Math.cos(cPhase) * 0.25);
        p.exValve.position.y = 3.8 - Math.max(0, Math.cos(exPhase) * 0.25);
      }
    });
  }

  // Explode lerping
  if (exploding&&explodeT<1) explodeT=Math.min(1,explodeT+dt*0.8);
  else if (!exploding&&explodeT>0) explodeT=Math.max(0,explodeT-dt*1.2);
  
  const e = explodeT < 0.5 ? 2*explodeT*explodeT : -1+(4-2*explodeT)*explodeT;
  parts.forEach(p => {
    if (p.mesh && p.d && !p.isPlanet) { // Planets managed dynamically above
      p.mesh.position.lerpVectors(p.o, new THREE.Vector3().copy(p.o).add(p.d), e);
    }
  });

  renderer.render(scene,camera);
}

function setMode(mode) { currentMode=mode; if(mode==='explode') exploding=true; }
function resetModel() { exploding=false; currentMode='rotate'; if(rotGroup) rotGroup.rotation.set(.25,0,0); }