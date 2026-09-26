#!/usr/bin/env python3
"""wd-en.py — στατικό κείμενο + αγγλική σελίδα για τη «Κατασκευή Ιστοσελίδων».

Πηγή: webdesign.html (ελληνικά) + main.js (LANG.el / LANG.en).
  1. Γράφει στο webdesign.html τα ελληνικά του LANG.el στα στοιχεία με id
     (ό,τι βλέπει ρομπότ χωρίς JavaScript = ό,τι βλέπει ο επισκέπτης).
  2. Παράγει το webdesign-en.html: ίδια σελίδα, αγγλικό κείμενο, δικό της
     title/meta/canonical/JSON-LD, <html lang="en">.
  3. Ξαναγράφει το <head> SEO (title, meta, hreflang, OG, JSON-LD) και στις δύο.
Τρέχει ξανά μετά από κάθε αλλαγή στο webdesign.html ή στα wd_* του main.js:
    python3 "Claude outputs/wd-en.py"
Το webdesign-en.html ΔΕΝ διορθώνεται με το χέρι.
"""
import html, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, DST = os.path.join(ROOT, 'webdesign.html'), os.path.join(ROOT, 'webdesign-en.html')
BASE = 'https://expertease.eu/'
EL_URL, EN_URL = BASE + 'webdesign.html', BASE + 'webdesign-en.html'

def rd(p):
    with open(p, encoding='utf-8', newline='') as f: return f.read()
def wr(p, s):
    with open(p, 'w', encoding='utf-8', newline='') as f: f.write(s)

# ── LANG από το main.js ────────────────────────────────────────
mj = rd(os.path.join(ROOT, 'main.js'))
a = 0  # από την αρχή: περιλαμβάνει και τις σταθερές (π.χ. EXP_YEARS)
b = mj.index('\n};', mj.index('const LANG = {')) + 3
LANG = json.loads(subprocess.run(['node', '-e', mj[a:b] + '\nprocess.stdout.write(JSON.stringify(LANG))'],
                                 capture_output=True, text=True, check=True).stdout)

# ── Χάρτης id → κλειδί από τις set() της applyLang ─────────────
body = mj[mj.index('function applyLang'):]
MAP = {}
for m in re.finditer(r"set\('([\w-]+)',\s*(?:noArrow\()?t\.(\w+)\)?(\s*,\s*true)?\)", body):
    MAP.setdefault(m.group(1), (m.group(2), bool(m.group(3))))
for i in range(1, 9): MAP['wd-f%d' % i] = ('wd_f%d' % i, False)

def fill_ids(s, t):
    miss = []
    def rep(m):
        tag, idv = m.group(2), m.group(3)
        key, is_html = MAP[idv]
        if key not in t: return m.group(0)
        inner = m.group(4)
        if re.search(r'<%s\b' % tag, inner): miss.append(idv); return m.group(0)
        v = t[key] if is_html else html.escape(t[key], quote=False)
        return m.group(1) + v + m.group(5)
    ids = '|'.join(re.escape(k) for k in MAP)
    s = re.sub(r'(<(\w+)\b[^>]*\bid="(%s)"[^>]*>)(.*?)(</\2>)' % ids, rep, s, flags=re.S)
    return s, miss

def fill_data(s, lang):
    skipped = []
    def rep(m):
        tag, inner = m.group(2), m.group(4)
        if re.search(r'<%s\b' % tag, inner): skipped.append(m.group(0)[:60]); return m.group(0)
        return m.group(1) + html.unescape(m.group(3)) + m.group(5)
    s = re.sub(r'(<(\w+)\b[^>]*\bdata-%s="([^"]*)"[^>]*>)(.*?)(</\2>)' % lang, rep, s, flags=re.S)
    k = 'en' if lang == 'en' else 'el'
    s = re.sub(r'(<img\b[^>]*?)\balt="[^"]*"([^>]*\bdata-%s-alt="([^"]*)")' % k,
               lambda m: m.group(1) + 'alt="' + m.group(3) + '"' + m.group(2), s)
    s = re.sub(r'(<[^>]*?)\baria-label="[^"]*"([^>]*\bdata-%s-aria="([^"]*)")' % k,
               lambda m: m.group(1) + 'aria-label="' + m.group(3) + '"' + m.group(2), s)
    return s, skipped

# ── Head ανά γλώσσα ────────────────────────────────────────────
FAQ = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'wd-faq.json'), encoding='utf-8'))
EU = ['Greece','Cyprus','Austria','Belgium','Bulgaria','Croatia','Czechia','Denmark','Estonia','Finland','France','Germany',
      'Hungary','Ireland','Italy','Latvia','Lithuania','Luxembourg','Malta','Netherlands','Poland','Portugal','Romania',
      'Slovakia','Slovenia','Spain','Sweden']
META = {
 'el': dict(url=EL_URL, locale='el_GR',
   title='Κατασκευή Ιστοσελίδων · Όλη η Ελλάδα και η ΕΕ | Expertease',
   desc='Κατασκευή ιστοσελίδων από το μηδέν, χωρίς έτοιμα θέματα, από 500 € + ΦΠΑ. Δουλεύουμε εξ αποστάσεως με πελάτες σε όλη την Ελλάδα και την ΕΕ.',
   svc='Κατασκευή ιστοσελίδων',
   svcdesc='Ιστοσελίδες γραμμένες από το μηδέν, χωρίς έτοιμα θέματα και χωρίς WordPress, στα ελληνικά και στα αγγλικά. Η δουλειά γίνεται εξ αποστάσεως για πελάτες σε όλη την Ελλάδα, την Κύπρο και την Ευρωπαϊκή Ένωση.',
   offer='Ιστοσελίδα από 500 € + ΦΠΑ, με σταθερή γραπτή προσφορά', crumb=['Αρχική','Κατασκευή Ιστοσελίδων']),
 'en': dict(url=EN_URL, locale='en_GB',
   title='Custom Web Design & Development · Greece & EU | Expertease',
   desc='Hand-coded websites without templates, from €500 + VAT. A Greek studio working remotely with clients across Greece, Cyprus and the EU, in Greek and English.',
   svc='Website design and development',
   svcdesc='Websites written from scratch, without templates or WordPress, in Greek and English. Projects run remotely for clients across Greece, Cyprus and the European Union.',
   offer='Website from €500 + VAT, with a fixed written quote', crumb=['Home','Web Design']),
}
def head_block(lang):
    M = META[lang]; qi, ai = (0, 1) if lang == 'el' else (2, 3)
    ld = {'@context': 'https://schema.org', '@graph': [
      {'@type': ['Organization', 'ProfessionalService'], '@id': BASE + '#org', 'name': 'Expertease Designs',
       'url': BASE, 'logo': BASE + 'images/logo.png', 'email': 'info@expertease.eu', 'telephone': '+302107561836',
       'address': {'@type': 'PostalAddress', 'streetAddress': 'Ymittou 157', 'addressLocality': 'Athens',
                   'postalCode': '11633', 'addressRegion': 'Attica', 'addressCountry': 'GR'},
       'sameAs': ['https://www.linkedin.com/company/expertease-designs', 'https://www.instagram.com/design_expertease/']},
      {'@type': 'Service', '@id': M['url'] + '#service', 'name': M['svc'], 'description': M['svcdesc'],
       'serviceType': ['Web design', 'Website development', 'Bilingual website', 'Landing page'],
       'provider': {'@id': BASE + '#org'}, 'url': M['url'], 'inLanguage': lang,
       'availableLanguage': ['el', 'en'],
       'areaServed': [{'@type': 'Country', 'name': c} for c in EU] + [{'@type': 'Place', 'name': 'European Union'}],
       'availableChannel': {'@type': 'ServiceChannel', 'serviceUrl': BASE + 'contact.html',
                            'name': 'Remote (phone, video call, email)' if lang == 'en' else 'Εξ αποστάσεως (τηλέφωνο, βιντεοκλήση, email)'},
       'offers': {'@type': 'Offer', 'priceCurrency': 'EUR', 'price': '500', 'description': M['offer'],
                  'priceSpecification': {'@type': 'PriceSpecification', 'minPrice': '500', 'priceCurrency': 'EUR', 'valueAddedTaxIncluded': False}}},

      {'@type': 'FAQPage', '@id': M['url'] + '#faq', 'inLanguage': lang, 'mainEntity': [
        {'@type': 'Question', 'name': f[qi], 'acceptedAnswer': {'@type': 'Answer', 'text': f[ai]}} for f in FAQ]},
      {'@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': M['crumb'][0], 'item': BASE},
        {'@type': 'ListItem', 'position': 2, 'name': M['crumb'][1], 'item': M['url']}]}]}
    e = lambda x: html.escape(x, quote=True)
    return f'''<title>{e(M['title'])}</title>
<meta name="description" content="{e(M['desc'])}">
<link rel="canonical" href="{M['url']}">
<link rel="alternate" hreflang="el" href="{EL_URL}">
<link rel="alternate" hreflang="en" href="{EN_URL}">
<link rel="alternate" hreflang="x-default" href="{EL_URL}">
<link rel="icon" href="https://expertease.eu/images/logo.png" type="image/png">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:locale" content="{M['locale']}">
<meta property="og:url" content="{M['url']}">
<meta property="og:site_name" content="Expertease Designs">
<meta property="og:title" content="{e(M['title'])}">
<meta property="og:description" content="{e(M['desc'])}">
<meta property="og:image" content="https://expertease.eu/images/logo.png">
<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{e(M['title'])}">
<meta name="twitter:description" content="{e(M['desc'])}">
<meta name="twitter:image" content="https://expertease.eu/images/logo.png">
<!-- JSON-LD: παράγεται από το Claude outputs/wd-en.py -->
<script type="application/ld+json">
{json.dumps(ld, ensure_ascii=False, indent=1)}
</script>
'''

def set_head(s, lang):
    a = s.index('<title>'); b = s.index('<!-- Google Analytics consent')
    return s[:a] + head_block(lang) + s[b:]

def faq_html(lang):
    out = []
    for i, f in enumerate(FAQ):
        q, an = (f[0], f[1]) if lang == 'el' else (f[2], f[3])
        e = lambda x: html.escape(x, quote=True)
        out.append(f'      <details class="wds-q"{" open" if i == 0 else ""}><summary data-el="{e(f[0])}" data-en="{e(f[2])}">{e(q)}</summary>'
                   f'<p data-el="{e(f[1])}" data-en="{e(f[3])}">{e(an)}</p></details>')
    return '\n'.join(out)

def set_faq(s, lang):
    return re.sub(r'(<div class="wds-qa">\n).*?(\n    </div>)', lambda m: m.group(1) + faq_html(lang) + m.group(2), s, count=1, flags=re.S)

LANGSW = '''<script>/* Κουμπί γλώσσας → η άλλη εκδοχή της σελίδας (%s) */
(function(){var to=%s;document.querySelectorAll('.lang-btn').forEach(function(b){b.addEventListener('click',function(){if(b.dataset.lang===to.l)location.href=to.u;});});})();</script>'''

# ── 1. Ελληνική (in place) ─────────────────────────────────────
src = rd(SRC)
el, miss1 = fill_ids(src, LANG['el'])
el, sk1 = fill_data(el, 'el')
el = set_head(el, 'el'); el = set_faq(el, 'el')
el = re.sub(r'<script>/\* Κουμπί γλώσσας.*?</script>',
            LANGSW % ('ελληνική', "{l:'en',u:'webdesign-en.html'}"), el, flags=re.S)
if el != src: wr(SRC, el)

# ── 2. Αγγλική (παράγωγη) ──────────────────────────────────────
en, miss2 = fill_ids(el, LANG['en'])
en, sk2 = fill_data(en, 'en')
en = set_head(en, 'en'); en = set_faq(en, 'en')
en = en.replace('<html lang="el">', '<html lang="en">', 1)
en = re.sub(r"<script>\(function\(\)\{try\{var l=localStorage.*?</script>",
            "<script>(function(){document.documentElement.lang='en';try{localStorage.setItem('lang','en');}catch(e){}})();</script>", en, count=1, flags=re.S)
en = en.replace('<a href="#main" class="skip-link">Μετάβαση στο κύριο περιεχόμενο</a>', '<a href="#main" class="skip-link">Skip to main content</a>')
en = re.sub(r'class="lang-btn active"(\s*)data-lang="el"', r'class="lang-btn"\1data-lang="el"', en)
en = re.sub(r'class="lang-btn"\s*data-lang="en"', 'class="lang-btn active" data-lang="en"', en)
en = en.replace('href="webdesign.html"      id="nav-webdesign"', 'href="webdesign-en.html"  id="nav-webdesign"')
en = en.replace('href="webdesign.html"      id="mnav-webdesign"', 'href="webdesign-en.html"  id="mnav-webdesign"')
en = re.sub(r'<script>/\* Κουμπί γλώσσας.*?</script>',
            LANGSW % ('αγγλική', "{l:'el',u:'webdesign.html'}"), en, flags=re.S)
en = en.replace('<!DOCTYPE html>', '<!DOCTYPE html>\n<!-- ΠΑΡΑΓΩΓΟ ΑΡΧΕΙΟ: μην το διορθώνετε. Πηγή: webdesign.html + main.js → python3 "Claude outputs/wd-en.py" -->', 1)
wr(DST, en)

leftover = [x for x in re.findall(r'>([^<>]*[α-ωάέήίόύώ][^<>]*)<', en.split('<body', 1)[1]) if x.strip()]
print('el ok, en ok · ids:', len(MAP), '· nested-skip:', sorted(set(miss1 + miss2)), len(sk1) + len(sk2))
print('Ελληνικά που έμειναν στην αγγλική:', leftover[:15])
