#!/usr/bin/env python3
"""bake-el.py — γράφει στο στατικό HTML τα ελληνικά του LANG.el (main.js),
ώστε η σελίδα να ανοίγει κατευθείαν στα ελληνικά χωρίς αλλαγή κειμένου μετά τη φόρτωση.
Χρήση: python3 "Claude outputs/bake-el.py"   (μετά από κάθε αλλαγή στα κείμενα του main.js)"""
import html, json, os, re, subprocess, sys
ROOT = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES = ['index.html', '3dprint.html', 'software.html', 'cad.html', 'webdesign.html']
def rd(p):
    with open(p, encoding='utf-8', newline='') as f: return f.read()
def wr(p, s):
    with open(p, 'w', encoding='utf-8', newline='') as f: f.write(s)
mj = rd(os.path.join(ROOT, 'main.js'))
b = mj.index('\n};', mj.index('const LANG = {')) + 3
LANG = json.loads(subprocess.run(['node', '-e', mj[:b] + '\nprocess.stdout.write(JSON.stringify(LANG))'],
                                 capture_output=True, text=True, check=True).stdout)
body = mj[mj.index('function applyLang'):]
MAP = {}
for m in re.finditer(r"set\('([\w-]+)',\s*(?:noArrow\()?t\.(\w+)\)?(\s*,\s*true)?\)", body):
    MAP.setdefault(m.group(1), (m.group(2), bool(m.group(3))))
for m in re.finditer(r"for\s*\(let i=1;i<=(\d+);i\+\+\)\s*set\('([\w-]+)'\+i,\s*t\['(\w+)'\+i\]\)", body):
    for i in range(1, int(m.group(1)) + 1): MAP['%s%d' % (m.group(2), i)] = ('%s%d' % (m.group(3), i), False)
T = LANG['el']
ids = '|'.join(re.escape(k) for k in MAP)
def fill(s):
    n = [0]
    def rep(m):
        tag, idv, inner = m.group(2), m.group(3), m.group(4)
        key, is_html = MAP[idv]
        v = T.get(key)
        if not isinstance(v, str) or v == '' or re.search(r'<%s\b' % tag, inner): return m.group(0)
        v = v if is_html else html.escape(v, quote=False)
        if inner == v: return m.group(0)
        n[0] += 1
        return m.group(1) + v + m.group(5)
    s = re.sub(r'(<(\w+)\b[^>]*\bid="(%s)"[^>]*>)(.*?)(</\2>)' % ids, rep, s, flags=re.S)
    # στοιχεία data-el / data-en (redesign.js)
    def rep2(m):
        tag, inner = m.group(2), m.group(4)
        if re.search(r'<%s\b' % tag, inner): return m.group(0)
        v = html.unescape(m.group(3))
        if inner == v: return m.group(0)
        n[0] += 1
        return m.group(1) + v + m.group(5)
    s = re.sub(r'(<(\w+)\b[^>]*\bdata-el="([^"]*)"[^>]*>)(.*?)(</\2>)', rep2, s, flags=re.S)
    return s, n[0]
for p in PAGES:
    fp = os.path.join(ROOT, p)
    if not os.path.exists(fp): continue
    s = rd(fp); s2, n = fill(s)
    if s2 != s: wr(fp, s2)
    print(p, 'αλλαγές:', n)
