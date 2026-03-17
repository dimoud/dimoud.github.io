/* ═══════════════════════════════════════════════════════════════
   models.js — Three 3D models cycling every 10 s
   Planetary Gearbox · Turbofan Engine · V4 Piston Engine
═══════════════════════════════════════════════════════════════ */

let scene, camera, renderer, clock;
let rotGroup = null, parts = [];
let explodeT = 0, exploding = false, isDragging = false;
let prevMouse = { x: 0, y: 0 }, floatT = 0, crankT = 0;
let currentMode = 'rotate';
let currentModelIdx = 0;
let modelCycleTimer = null;

/* ── Materials ──────────────────────────────────────────────── */
function makeMats() {
  return {
    chrome:   new THREE.MeshStandardMaterial({ color: 0xe8f4ff, metalness: 1.00, roughness: .03 }),
    steel:    new THREE.MeshStandardMaterial({ color: 0xaac4d8, metalness: .97,  roughness: .07 }),
    blue:     new THREE.MeshStandardMaterial({ color: 0x1a55d0, metalness: .88,  roughness: .18 }),
    blueB:    new THREE.MeshStandardMaterial({ color: 0x3a8aff, metalness: .85,  roughness: .16 }),
    gold:     new THREE.MeshStandardMaterial({ color: 0xf0c030, metalness: .96,  roughness: .07 }),
    brass:    new THREE.MeshStandardMaterial({ color: 0xd4a030, metalness: .97,  roughness: .09 }),
    orange:   new THREE.MeshStandardMaterial({ color: 0xff6820, metalness: .65,  roughness: .38, emissive: 0x441500 }),
    dark:     new THREE.MeshStandardMaterial({ color: 0x1e2a3c, metalness: .87,  roughness: .28 }),
    darkB:    new THREE.MeshStandardMaterial({ color: 0x0c1828, metalness: .90,  roughness: .22 }),
    titanium: new THREE.MeshStandardMaterial({ color: 0x8899aa, metalness: .95,  roughness: .12 }),
    silver:   new THREE.MeshStandardMaterial({ color: 0xddeeff, metalness: .99,  roughness: .04 }),
    red:      new THREE.MeshStandardMaterial({ color: 0xdd2020, metalness: .80,  roughness: .28 }),
  };
}

/* ── Lights ─────────────────────────────────────────────────── */
function addLights(s) {
  s.add(new THREE.AmbientLight(0x7090c0, 1.4));
  const key = new THREE.DirectionalLight(0xffffff, 5.5);
  key.position.set(10, 16, 12); key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048); s.add(key);
  const fill = new THREE.DirectionalLight(0x5090e0, 2.2);
  fill.position.set(-10, 6, -8); s.add(fill);
  const rim = new THREE.PointLight(0x40b0ff, 3.5, 65);
  rim.position.set(-6, 12, -12); s.add(rim);
  const bot = new THREE.PointLight(0x3070ff, 1.8, 55);
  bot.position.set(6, -10, 6); s.add(bot);
  const top = new THREE.DirectionalLight(0xe0f0ff, 1.8);
  top.position.set(0, 20, 0); s.add(top);
}

/* ── Gear shape helpers ─────────────────────────────────────── */
function gearShape(teeth, pR, tH, hR, spokes) {
  const s = new THREE.Shape(), step = (Math.PI * 2) / teeth;
  for (let i = 0; i < teeth; i++) {
    const a0=i*step-step*.42, a1=i*step-step*.16, a2=i*step+step*.16, a3=i*step+step*.42;
    const p = (a, r) => [Math.cos(a)*r, Math.sin(a)*r];
    i===0 ? s.moveTo(...p(a0,pR)) : s.lineTo(...p(a0,pR));
    s.lineTo(...p(a1,pR+tH)); s.lineTo(...p(a2,pR+tH)); s.lineTo(...p(a3,pR));
  }
  s.closePath();
  const hub = new THREE.Path(); hub.absarc(0,0,hR,0,Math.PI*2,true); s.holes.push(hub);
  const n = spokes || Math.max(4, Math.floor(teeth/3));
  for (let i=0; i<n; i++) {
    const a=(i/n)*Math.PI*2, r=pR*.55, sr=pR*.13;
    const sh = new THREE.Path(); sh.absarc(Math.cos(a)*r,Math.sin(a)*r,sr,0,Math.PI*2,true); s.holes.push(sh);
  }
  return s;
}

function ringShape(teeth, oR, tRR, tH) {
  const s = new THREE.Shape(); s.absarc(0,0,oR,0,Math.PI*2,false);
  const step = (Math.PI*2)/teeth, inner = new THREE.Path();
  for (let i=0; i<teeth; i++) {
    const a0=i*step-step*.38, a1=i*step-step*.14, a2=i*step+step*.14, a3=i*step+step*.38;
    const p = (a,r) => [Math.cos(a)*r, Math.sin(a)*r];
    i===0 ? inner.moveTo(...p(a0,tRR)) : inner.lineTo(...p(a0,tRR));
    inner.lineTo(...p(a1,tRR-tH)); inner.lineTo(...p(a2,tRR-tH)); inner.lineTo(...p(a3,tRR));
  }
  inner.closePath(); s.holes.push(inner); return s;
}

/* ═══════════════════════════════════════════════════════════════
   MODEL 0 — PLANETARY GEARBOX
═══════════════════════════════════════════════════════════════ */
function buildGearbox(group, m) {
  const ps = [];
  const eH={depth:.78,bevelEnabled:true,bevelThickness:.055,bevelSize:.044,bevelSegments:4};
  const eM={depth:.60,bevelEnabled:true,bevelThickness:.042,bevelSize:.032,bevelSegments:3};
  const eR={depth:.82,bevelEnabled:true,bevelThickness:.072,bevelSize:.062,bevelSegments:4};
  const OR = 2.85, pA = [0, Math.PI*2/3, Math.PI*4/3], pM = [m.gold, m.brass, m.silver];

  /* Sun gear */
  const gs = new THREE.Mesh(new THREE.ExtrudeGeometry(gearShape(20,1.9,.52,.29,6),eH), m.blueB);
  gs.castShadow=true; group.add(gs); ps.push({mesh:gs,o:gs.position.clone(),d:new THREE.Vector3(0,0,0),spin:.58});

  /* 3 Planet gears */
  pA.forEach((a,i)=>{
    const pg=new THREE.Mesh(new THREE.ExtrudeGeometry(gearShape(11,1.05,.43,.17,3),eM),pM[i]);
    pg.position.set(Math.cos(a)*OR,Math.sin(a)*OR,.09); pg.castShadow=true; group.add(pg);
    ps.push({mesh:pg,o:pg.position.clone(),d:new THREE.Vector3(Math.cos(a)*5.0,Math.sin(a)*5.0,1.5+i*.7),spin:-.97});
  });

  /* Ring gear */
  const gr=new THREE.Mesh(new THREE.ExtrudeGeometry(ringShape(40,4.4,3.88,.50),eR), m.darkB);
  gr.castShadow=true; group.add(gr); ps.push({mesh:gr,o:gr.position.clone(),d:new THREE.Vector3(0,0,-5.4),spin:-.09});

  /* Carrier plate */
  const cS=new THREE.Shape(); cS.absarc(0,0,3.65,0,Math.PI*2,false);
  const cHub=new THREE.Path(); cHub.absarc(0,0,2.15,0,Math.PI*2,true); cS.holes.push(cHub);
  pA.forEach(a=>{const h=new THREE.Path();h.absarc(Math.cos(a)*OR,Math.sin(a)*OR,.37,0,Math.PI*2,true);cS.holes.push(h);});
  const gc=new THREE.Mesh(new THREE.ExtrudeGeometry(cS,{depth:.28,bevelEnabled:false}),m.dark);
  gc.position.z=-.60; group.add(gc); ps.push({mesh:gc,o:gc.position.clone(),d:new THREE.Vector3(0,0,-2.9),spin:.17});

  /* Back plate */
  const bS=new THREE.Shape(); bS.absarc(0,0,5.05,0,Math.PI*2,false);
  const bRim=new THREE.Path(); bRim.absarc(0,0,4.52,0,Math.PI*2,true); bS.holes.push(bRim);
  [0,1,2,3,4,5,6,7].forEach(i=>{const a=(i/8)*Math.PI*2;const h=new THREE.Path();h.absarc(Math.cos(a)*4.76,Math.sin(a)*4.76,.21,0,Math.PI*2,true);bS.holes.push(h);});
  const gBack=new THREE.Mesh(new THREE.ExtrudeGeometry(bS,{depth:.38,bevelEnabled:false}),m.dark);
  gBack.position.z=-.94; group.add(gBack); ps.push({mesh:gBack,o:gBack.position.clone(),d:new THREE.Vector3(0,0,-6.2),spin:0});

  /* Front cover */
  const fS=new THREE.Shape(); fS.absarc(0,0,5.05,0,Math.PI*2,false);
  const fRim=new THREE.Path(); fRim.absarc(0,0,4.02,0,Math.PI*2,true); fS.holes.push(fRim);
  [0,1,2,3,4,5,6,7].forEach(i=>{const a=(i/8)*Math.PI*2;const h=new THREE.Path();h.absarc(Math.cos(a)*4.76,Math.sin(a)*4.76,.21,0,Math.PI*2,true);fS.holes.push(h);});
  const gFront=new THREE.Mesh(new THREE.ExtrudeGeometry(fS,{depth:.32,bevelEnabled:false}),m.dark);
  gFront.position.z=.93; group.add(gFront); ps.push({mesh:gFront,o:gFront.position.clone(),d:new THREE.Vector3(0,0,5.4),spin:0});

  /* 8 bolts */
  [0,1,2,3,4,5,6,7].forEach(i=>{
    const a=(i/8)*Math.PI*2, bx=Math.cos(a)*4.76, by=Math.sin(a)*4.76;
    const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.135,.135,2.28,8),m.brass);
    bolt.rotation.x=Math.PI/2; bolt.position.set(bx,by,.1); group.add(bolt);
    ps.push({mesh:bolt,o:bolt.position.clone(),d:new THREE.Vector3(bx*.14,by*.14,0),spin:0});
    const head=new THREE.Mesh(new THREE.CylinderGeometry(.23,.23,.21,6),m.gold);
    head.rotation.x=Math.PI/2; head.position.set(bx,by,1.07); group.add(head);
    ps.push({mesh:head,o:head.position.clone(),d:new THREE.Vector3(bx*.14,by*.14,1.75),spin:0});
  });

  /* Planet shafts */
  pA.forEach(a=>{
    const sh=new THREE.Mesh(new THREE.CylinderGeometry(.13,.13,2.35,12),m.chrome);
    sh.rotation.x=Math.PI/2; sh.position.set(Math.cos(a)*OR,Math.sin(a)*OR,.09); group.add(sh);
    ps.push({mesh:sh,o:sh.position.clone(),d:new THREE.Vector3(Math.cos(a)*5.6,Math.sin(a)*5.6,1.5),spin:0});
  });

  /* Bearing rings */
  [-.56,1.01].forEach(z=>{
    const br=new THREE.Mesh(new THREE.TorusGeometry(.37,.12,14,36),m.gold);
    br.position.z=z; group.add(br); ps.push({mesh:br,o:br.position.clone(),d:new THREE.Vector3(0,0,z*3.5),spin:0});
  });

  /* Output flange */
  const fl=new THREE.Mesh(new THREE.CylinderGeometry(.94,.94,.48,24),m.chrome);
  fl.rotation.x=Math.PI/2; fl.position.z=-1.62; group.add(fl);
  ps.push({mesh:fl,o:fl.position.clone(),d:new THREE.Vector3(0,0,-5.9),spin:.17});

  /* Keyway */
  const kw=new THREE.Mesh(new THREE.BoxGeometry(.15,.11,.50),m.steel);
  kw.position.set(.25,0,-1.62); group.add(kw);
  ps.push({mesh:kw,o:kw.position.clone(),d:new THREE.Vector3(.7,0,-5.9),spin:0});

  /* Input sprocket */
  const sp=new THREE.Mesh(new THREE.TorusGeometry(1.34,.16,12,30),m.chrome);
  sp.position.z=1.68; group.add(sp); ps.push({mesh:sp,o:sp.position.clone(),d:new THREE.Vector3(0,0,4.6),spin:.58});

  /* Outer housing ring */
  const hr=new THREE.Mesh(new THREE.TorusGeometry(4.76,.31,18,52),m.dark);
  group.add(hr); ps.push({mesh:hr,o:hr.position.clone(),d:new THREE.Vector3(0,0,0),spin:0});

  /* Inner spacer ring */
  const sr=new THREE.Mesh(new THREE.TorusGeometry(4.0,.12,10,40),m.steel);
  group.add(sr); ps.push({mesh:sr,o:sr.position.clone(),d:new THREE.Vector3(0,0,0),spin:-.04});

  return ps;
}

/* ═══════════════════════════════════════════════════════════════
   MODEL 1 — TURBOFAN ENGINE
═══════════════════════════════════════════════════════════════ */
function buildTurbofan(group, m) {
  const ps = [];

  /* Outer nacelle casing */
  const nacelle=new THREE.Mesh(new THREE.CylinderGeometry(3.1,2.6,10.0,36,1,true),m.titanium);
  nacelle.rotation.x=Math.PI/2; group.add(nacelle);
  ps.push({mesh:nacelle,o:nacelle.position.clone(),d:new THREE.Vector3(0,0,0),spin:0});

  /* Front nacelle lip */
  const frontLip=new THREE.Mesh(new THREE.TorusGeometry(3.1,.18,18,52),m.chrome);
  frontLip.position.z=5.0; group.add(frontLip);
  ps.push({mesh:frontLip,o:frontLip.position.clone(),d:new THREE.Vector3(0,0,4.5),spin:0});

  /* Rear nacelle lip */
  const rearLip=new THREE.Mesh(new THREE.TorusGeometry(2.6,.15,14,44),m.steel);
  rearLip.position.z=-5.0; group.add(rearLip);
  ps.push({mesh:rearLip,o:rearLip.position.clone(),d:new THREE.Vector3(0,0,-5.5),spin:0});

  /* Nose cone (spinner) */
  const cone=new THREE.Mesh(new THREE.ConeGeometry(.82,1.9,22),m.silver);
  cone.rotation.x=-Math.PI/2; cone.position.z=5.6; group.add(cone);
  ps.push({mesh:cone,o:cone.position.clone(),d:new THREE.Vector3(0,0,8.0),spin:2.2});

  /* Fan hub disk */
  const fanHub=new THREE.Mesh(new THREE.CylinderGeometry(.76,.76,.5,24),m.steel);
  fanHub.rotation.x=Math.PI/2; fanHub.position.z=4.6; group.add(fanHub);
  ps.push({mesh:fanHub,o:fanHub.position.clone(),d:new THREE.Vector3(0,0,5.5),spin:2.2});

  /* 20 Fan blades */
  const fanDisc=new THREE.Group(); fanDisc.position.z=4.5; group.add(fanDisc);
  for (let i=0; i<20; i++) {
    const a=(i/20)*Math.PI*2;
    /* Blade: thin tapered box */
    const blade=new THREE.Mesh(new THREE.BoxGeometry(.20,2.1,.09),m.chrome);
    blade.position.set(Math.cos(a)*1.72,Math.sin(a)*1.72,0);
    blade.rotation.z=a+Math.PI*0.12; /* slight twist */
    fanDisc.add(blade);
  }
  ps.push({mesh:fanDisc,o:fanDisc.position.clone(),d:new THREE.Vector3(0,0,5.5),spin:2.2});

  /* Fan blade tips ring */
  const tipRing=new THREE.Mesh(new THREE.TorusGeometry(2.85,.06,8,44),m.silver);
  tipRing.position.z=4.5; group.add(tipRing);
  ps.push({mesh:tipRing,o:tipRing.position.clone(),d:new THREE.Vector3(0,0,5.5),spin:2.2});

  /* 3 Compressor stages */
  for (let s=0; s<3; s++) {
    const z=2.8-s*1.4, R=2.65-s*.22, nB=26+s*4;
    const disc=new THREE.Group(); disc.position.z=z; group.add(disc);
    for (let i=0; i<nB; i++) {
      const a=(i/nB)*Math.PI*2;
      const b=new THREE.Mesh(new THREE.BoxGeometry(.068,.52,.26),s%2===0?m.steel:m.titanium);
      b.position.set(Math.cos(a)*R,Math.sin(a)*R,0);
      b.rotation.z=a+Math.PI/2; disc.add(b);
    }
    /* Hub spool */
    const spool=new THREE.Mesh(new THREE.CylinderGeometry(.40,.40,.26,18),m.dark);
    disc.add(spool);
    const rate=.7+s*.35;
    ps.push({mesh:disc,o:disc.position.clone(),d:new THREE.Vector3(0,0,z-4.0),spin:s%2===0?rate:-rate});
  }

  /* Diffuser ring between compressor and combustor */
  const diffuser=new THREE.Mesh(new THREE.TorusGeometry(2.4,.22,12,44),m.steel);
  diffuser.position.z=.5; group.add(diffuser);
  ps.push({mesh:diffuser,o:diffuser.position.clone(),d:new THREE.Vector3(0,0,-2.5),spin:0});

  /* Combustion chamber (annular) */
  const comb=new THREE.Mesh(new THREE.TorusGeometry(1.85,.62,18,52),m.orange);
  comb.rotation.x=Math.PI/2; comb.position.z=-0.9; group.add(comb);
  ps.push({mesh:comb,o:comb.position.clone(),d:new THREE.Vector3(0,0,-4.0),spin:.07});

  /* 8 combustion cans */
  for (let i=0; i<8; i++) {
    const a=(i/8)*Math.PI*2;
    const can=new THREE.Mesh(new THREE.CylinderGeometry(.30,.26,1.55,14),m.orange);
    can.rotation.x=Math.PI/2; can.position.set(Math.cos(a)*1.85,Math.sin(a)*1.85,-.9); group.add(can);
    ps.push({mesh:can,o:can.position.clone(),d:new THREE.Vector3(Math.cos(a)*4.5,Math.sin(a)*4.5,-4.0),spin:.07});
  }

  /* 2 Turbine stages (gold blades — bright!) */
  for (let s=0; s<2; s++) {
    const z=-2.6-s*1.2, nB=36+s*4;
    const disc=new THREE.Group(); disc.position.z=z; group.add(disc);
    for (let i=0; i<nB; i++) {
      const a=(i/nB)*Math.PI*2;
      const b=new THREE.Mesh(new THREE.BoxGeometry(.060,.65,.24),s===0?m.gold:m.brass);
      b.position.set(Math.cos(a)*2.05,Math.sin(a)*2.05,0);
      b.rotation.z=a+Math.PI/2; disc.add(b);
    }
    disc.add(new THREE.Mesh(new THREE.CylinderGeometry(.40,.40,.24,18),m.dark));
    const rate=1.4-s*.5;
    ps.push({mesh:disc,o:disc.position.clone(),d:new THREE.Vector3(0,0,z-3.5),spin:rate});
  }

  /* Exhaust nozzle */
  const nozzle=new THREE.Mesh(new THREE.CylinderGeometry(2.2,1.5,2.2,28,1,true),m.steel);
  nozzle.rotation.x=Math.PI/2; nozzle.position.z=-5.8; group.add(nozzle);
  ps.push({mesh:nozzle,o:nozzle.position.clone(),d:new THREE.Vector3(0,0,-9.0),spin:0});

  /* Inner nozzle cone */
  const nCone=new THREE.Mesh(new THREE.ConeGeometry(.65,1.8,18),m.titanium);
  nCone.rotation.x=Math.PI/2; nCone.position.z=-5.9; group.add(nCone);
  ps.push({mesh:nCone,o:nCone.position.clone(),d:new THREE.Vector3(0,0,-8.5),spin:0});

  /* Central shaft */
  const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.18,.18,12.5,12),m.chrome);
  shaft.rotation.x=Math.PI/2; group.add(shaft);
  ps.push({mesh:shaft,o:shaft.position.clone(),d:new THREE.Vector3(0,0,0),spin:2.2});

  /* Rear bearing support ring */
  const bearRing=new THREE.Mesh(new THREE.TorusGeometry(.80,.08,10,32),m.steel);
  bearRing.position.z=-4.2; group.add(bearRing);
  ps.push({mesh:bearRing,o:bearRing.position.clone(),d:new THREE.Vector3(0,0,-5.5),spin:0});

  return ps;
}

/* ═══════════════════════════════════════════════════════════════
   MODEL 2 — V4 PISTON ENGINE
═══════════════════════════════════════════════════════════════ */
function buildPistonEngine(group, m) {
  const ps = [];
  const CX = [-2.1, -0.7, 0.7, 2.1];

  /* Engine block */
  const block=new THREE.Mesh(new THREE.BoxGeometry(6.0,2.6,3.0),m.dark);
  block.position.y=-.4; group.add(block);
  ps.push({mesh:block,o:block.position.clone(),d:new THREE.Vector3(0,-5.0,0),spin:0});

  /* Block ribbing lines */
  for (let i=0; i<5; i++) {
    const rib=new THREE.Mesh(new THREE.BoxGeometry(.055,2.62,3.05),m.darkB);
    rib.position.set(-2.52+i*1.26,-.4,0); group.add(rib);
  }

  /* 4 Cylinder liners */
  CX.forEach((cx,i)=>{
    const liner=new THREE.Mesh(new THREE.CylinderGeometry(.50,.50,3.0,24,1,true),m.steel);
    liner.position.set(cx,1.0,0); group.add(liner);
    ps.push({mesh:liner,o:liner.position.clone(),d:new THREE.Vector3(cx*1.5,5.5,i*.5-.75),spin:0});
    /* Cylinder head per cylinder */
    const head=new THREE.Mesh(new THREE.BoxGeometry(1.05,.35,2.92),m.titanium);
    head.position.set(cx,2.66,0); group.add(head);
    ps.push({mesh:head,o:head.position.clone(),d:new THREE.Vector3(cx*1.5,6.0,i*.5-.75),spin:0});
  });

  /* 4 Pistons */
  CX.forEach((cx,i)=>{
    const piston=new THREE.Mesh(new THREE.CylinderGeometry(.44,.44,.65,24),m.chrome);
    piston.position.set(cx,.5,0); group.add(piston);
    ps.push({mesh:piston,o:new THREE.Vector3(cx,.5,0),d:new THREE.Vector3(cx*1.5,5.5,i*.5-.75),spin:0,pistonPhase:(i/4)*Math.PI*2});
  });

  /* 4 Connecting rods */
  CX.forEach((cx,i)=>{
    const rod=new THREE.Mesh(new THREE.BoxGeometry(.12,1.4,.12),m.steel);
    rod.position.set(cx,-.1,0); group.add(rod);
    ps.push({mesh:rod,o:new THREE.Vector3(cx,-.1,0),d:new THREE.Vector3(cx*1.5,5.0,i*.5-.75),spin:0,conrodPhase:(i/4)*Math.PI*2});
  });

  /* Crankshaft main journal */
  const crankMain=new THREE.Mesh(new THREE.CylinderGeometry(.16,.16,4.8,14),m.brass);
  crankMain.rotation.z=Math.PI/2; crankMain.position.y=-1.5; group.add(crankMain);
  ps.push({mesh:crankMain,o:crankMain.position.clone(),d:new THREE.Vector3(0,-5.5,0),spin:1.5});

  /* Crank webs + pins */
  const crankGroup=new THREE.Group(); crankGroup.position.y=-1.5; group.add(crankGroup);
  CX.forEach((cx,i)=>{
    const w1=new THREE.Mesh(new THREE.BoxGeometry(.22,.72,.28),m.gold);
    w1.position.set(cx,.36,0); crankGroup.add(w1);
    const pin=new THREE.Mesh(new THREE.CylinderGeometry(.13,.13,.38,12),m.brass);
    pin.rotation.z=Math.PI/2; pin.position.set(cx,.72,0); crankGroup.add(pin);
    const w2=new THREE.Mesh(new THREE.BoxGeometry(.22,.72,.28),m.gold);
    w2.position.set(cx,-.36,0); crankGroup.add(w2);
    /* Main bearing webs between cylinders */
    const bWeb=new THREE.Mesh(new THREE.BoxGeometry(.14,.50,.32),m.brass);
    bWeb.position.set(cx-.7,0,0); crankGroup.add(bWeb);
  });
  ps.push({mesh:crankGroup,o:crankGroup.position.clone(),d:new THREE.Vector3(0,-5.0,0),spin:1.5});

  /* Valve cover */
  const valveCover=new THREE.Mesh(new THREE.BoxGeometry(6.2,.38,3.0),m.blue);
  valveCover.position.y=2.88; group.add(valveCover);
  ps.push({mesh:valveCover,o:valveCover.position.clone(),d:new THREE.Vector3(0,5.5,0),spin:0});

  /* Cam cover bolts */
  for (let i=0; i<7; i++) {
    const cb=new THREE.Mesh(new THREE.CylinderGeometry(.07,.07,.58,8),m.brass);
    cb.position.set(-2.7+i*.9,3.04,1.25); group.add(cb);
  }

  /* Intake manifold */
  const intake=new THREE.Mesh(new THREE.BoxGeometry(5.2,.55,1.0),m.blue);
  intake.position.set(0,3.5,1.4); intake.rotation.x=-.2; group.add(intake);
  ps.push({mesh:intake,o:intake.position.clone(),d:new THREE.Vector3(0,6.0,3.0),spin:0});

  /* Intake runners */
  CX.forEach((cx,i)=>{
    const runner=new THREE.Mesh(new THREE.CylinderGeometry(.18,.22,.9,12),m.blueB);
    runner.rotation.x=-.3; runner.position.set(cx,3.12,.95); group.add(runner);
  });

  /* Exhaust headers (gold — bright!) */
  CX.forEach((cx,i)=>{
    const header=new THREE.Mesh(new THREE.CylinderGeometry(.15,.15,1.1,10),m.gold);
    header.rotation.x=.3; header.position.set(cx,2.88,-1.1); group.add(header);
  });

  /* Flywheel */
  const fw=new THREE.Mesh(new THREE.CylinderGeometry(1.3,1.3,.30,36),m.dark);
  fw.rotation.z=Math.PI/2; fw.position.set(-3.25,-1.5,0); group.add(fw);
  ps.push({mesh:fw,o:fw.position.clone(),d:new THREE.Vector3(-6.5,-2.0,0),spin:1.5});

  /* Flywheel ring gear teeth */
  const fwRing=new THREE.Mesh(new THREE.TorusGeometry(1.3,.09,10,44),m.chrome);
  fwRing.rotation.x=Math.PI/2; fwRing.position.set(-3.25,-1.5,0); group.add(fwRing);
  ps.push({mesh:fwRing,o:fwRing.position.clone(),d:new THREE.Vector3(-6.5,-2.0,0),spin:1.5});

  /* Oil pan */
  const oilPan=new THREE.Mesh(new THREE.BoxGeometry(5.8,.72,2.8),m.darkB);
  oilPan.position.y=-2.42; group.add(oilPan);
  ps.push({mesh:oilPan,o:oilPan.position.clone(),d:new THREE.Vector3(0,-6.5,0),spin:0});

  /* Oil drain bolt */
  const drain=new THREE.Mesh(new THREE.CylinderGeometry(.10,.10,.28,8),m.brass);
  drain.position.set(0,-2.85,0); group.add(drain);

  return ps;
}

/* ═══════════════════════════════════════════════════════════════
   INIT — shared renderer, camera, controls
═══════════════════════════════════════════════════════════════ */
function initThree() {
  const canvas=document.getElementById('hero3d');
  if (!canvas || typeof THREE==='undefined') { console.warn('Three.js not ready'); return; }
  const parent=canvas.parentElement, W=parent.clientWidth||640, H=parent.clientHeight||580;

  renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(W,H); renderer.setClearColor(0x000000,0);
  renderer.shadowMap.enabled=true; renderer.shadowMap.type=THREE.PCFSoftShadowMap;

  camera=new THREE.PerspectiveCamera(38,W/H,.1,300);
  camera.position.set(0,2.5,20); camera.lookAt(0,.5,0);
  clock=new THREE.Clock();

  loadModel(0);
  setupDrag(canvas, parent);
  animate();

  /* Cycle models every 10 s */
  modelCycleTimer=setInterval(()=>{
    currentModelIdx=(currentModelIdx+1)%3;
    loadModel(currentModelIdx);
  }, 10000);
}

function loadModel(idx) {
  scene=new THREE.Scene();
  addLights(scene);
  rotGroup=new THREE.Group();
  rotGroup.rotation.x=0.32; rotGroup.scale.set(0.7,0.7,0.7);
  scene.add(rotGroup);
  parts=[];
  explodeT=0; exploding=false; floatT=0; crankT=0;
  currentMode='rotate';

  const m=makeMats();
  if (idx===0)      parts=buildGearbox(rotGroup,m);
  else if (idx===1) parts=buildTurbofan(rotGroup,m);
  else              parts=buildPistonEngine(rotGroup,m);

  /* Reset controls UI */
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const rb=document.getElementById('btn-rotate'); if(rb) rb.classList.add('active');

  /* Update model indicator */
  const labels=['PLANETARY GEARBOX','TURBOFAN ENGINE','V4 PISTON ENGINE'];
  const ind=document.getElementById('model-indicator');
  if (ind) ind.textContent=labels[idx];
}

/* ── Drag controls ──────────────────────────────────────────── */
function setupDrag(canvas, parent) {
  let msx=0, msy=0, didDrag=false;
  canvas.addEventListener('mousedown',e=>{isDragging=true;didDrag=false;msx=e.clientX;msy=e.clientY;prevMouse={x:e.clientX,y:e.clientY};});
  window.addEventListener('mouseup',()=>isDragging=false);
  window.addEventListener('mousemove',e=>{
    if(!isDragging)return;
    if(Math.abs(e.clientX-msx)>4||Math.abs(e.clientY-msy)>4) didDrag=true;
    rotGroup.rotation.y+=(e.clientX-prevMouse.x)*.010;
    rotGroup.rotation.x+=(e.clientY-prevMouse.y)*.007;
    rotGroup.rotation.x=Math.max(-.9,Math.min(.9,rotGroup.rotation.x));
    prevMouse={x:e.clientX,y:e.clientY};
  });
  canvas.addEventListener('click',()=>{if(didDrag)return;if(currentMode!=='explode')setMode('explode');else resetModel();});
  canvas.addEventListener('touchstart',e=>{isDragging=true;prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  window.addEventListener('touchend',()=>isDragging=false);
  window.addEventListener('touchmove',e=>{if(!isDragging)return;rotGroup.rotation.y+=(e.touches[0].clientX-prevMouse.x)*.010;prevMouse={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
  window.addEventListener('resize',()=>{const W2=parent.clientWidth||640,H2=parent.clientHeight||580;camera.aspect=W2/H2;camera.updateProjectionMatrix();renderer.setSize(W2,H2);});
}

/* ── Render loop ────────────────────────────────────────────── */
function animate() {
  requestAnimationFrame(animate);
  const dt=Math.min(clock.getDelta(),.05);
  floatT+=dt; crankT+=dt;

  if (!isDragging && currentMode==='rotate') {
    rotGroup.rotation.y+=.004;
    rotGroup.position.y=Math.sin(floatT*.52)*.04;
    rotGroup.position.x=0;
  }

  parts.forEach(p=>{
    if (p.spin!==0) p.mesh.rotation.z+=p.spin*dt;
    /* Piston / conrod animation (only when assembled) */
    if (p.pistonPhase!==undefined && explodeT<.01) {
      const y=Math.sin(crankT*3.0+p.pistonPhase)*0.65;
      p.mesh.position.y=p.o.y+y;
    }
    if (p.conrodPhase!==undefined && explodeT<.01) {
      const y=Math.sin(crankT*3.0+p.conrodPhase)*0.42;
      p.mesh.position.y=p.o.y+y;
    }
  });

  if (exploding&&explodeT<1)      { explodeT=Math.min(1,explodeT+dt*.55); applyExplode(explodeT); }
  else if (!exploding&&explodeT>0) { explodeT=Math.max(0,explodeT-dt*.80); applyExplode(explodeT); }

  renderer.render(scene,camera);
}

function applyExplode(t) {
  const e=t<.5?2*t*t:-1+(4-2*t)*t;
  parts.forEach(p=>{
    p.mesh.position.x=p.o.x+p.d.x*3.0*e;
    p.mesh.position.y=p.o.y+p.d.y*3.0*e;
    p.mesh.position.z=p.o.z+p.d.z*3.0*e;
  });
}

/* ── Public API (called from HTML buttons) ──────────────────── */
function setMode(mode) {
  currentMode=mode; if(mode==='explode') exploding=true;
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const b=document.getElementById('btn-'+mode); if(b) b.classList.add('active');
}

function resetModel() {
  exploding=false; currentMode='rotate';
  if(rotGroup) rotGroup.rotation.set(.32,0,0), rotGroup.position.set(0,0,0);
  document.querySelectorAll('.vctrl').forEach(b=>b.classList.remove('active'));
  const rb=document.getElementById('btn-rotate'); if(rb) rb.classList.add('active');
}
