/* gearbox-v2 / worker.js — ο μειωτήρας σε Web Worker (OffscreenCanvas).
   Όλη η βαριά δουλειά (γεωμετρία, shaders, καρέ) γίνεται εδώ, όχι στο κύριο νήμα της σελίδας. */
import { createGearbox } from './scene.js';

let api = null;
const queue = [];
const emit = (type, data) => postMessage({ type, data });

self.onmessage = async (e) => {
  const m = e.data;
  if (m.type === 'init') {
    try {
      /* έλεγχος WebGL πριν από οτιδήποτε άλλο — αν λείπει, η σελίδα περνά στο κύριο νήμα */
      const gl = m.canvas.getContext('webgl2', { alpha: true, antialias: m.opts.dpr < 1.5 });
      if (!gl) { emit('fail'); return; }
      api = await createGearbox(m.canvas, m.opts, emit);
      queue.splice(0).forEach(run);
    } catch (err) { emit('fail', String(err && err.message || err)); }
    return;
  }
  if (!api) { if (m.type === 'scroll' || m.type === 'resize' || m.type === 'run') queue.push(m); return; }
  run(m);
};

function run(m) {
  switch (m.type) {
    case 'resize':   api.resize(m.w, m.h); break;
    case 'dragging': api.dragging(m.on); break;
    case 'drag':     api.drag(m.dx, m.dy); break;
    case 'click':    api.click(); break;
    case 'mode':     api.setMode(m.mode); break;
    case 'reset':    api.resetModel(); break;
    case 'scroll':   api.setScrollExplode(m.t); break;
    case 'run':      api.run(m.on); break;
  }
}
