function _lgv3isDE(){return /^\/de(?=\/|$)/.test(location.pathname);}
function _lgv3P(){var p=(location.pathname||"/").replace(/^\/de(?=\/|$)/,"")||"/";var SM={"loesungen":"solutions","ueber-uns":"about","kontakt":"contact","glossar":"glossary","anbietervergleich":"compare","bestenlisten":"review","termin-buchen":"meeting","rechner":"tools","forderungsmanagement":"collections","abzugsmanagement":"deductions","liquiditaetsplanung":"cash-flow-forecasting","kundenreferenzen":"customer-stories","dso-rechner":"dso-calculator","liquiditaetsplanung-tool":"cash-flow-forecasting-tool"};var s=p.split("/");for(var i=0;i<s.length;i++){if(SM[s[i]])s[i]=SM[s[i]];}return s.join("/")||"/";}
(function () {
function lgv3NeutralizeBrokenEmbeds() {
if (document.body && document.body.dataset.lgv3EmbedsFixed === '1') return;
var BAD_PATTERNS = [
/(?:^|\/)_embeds\//,
/(?:^|\/)_dashboard_overlay\.js(?:$|\?)/,
/[/_](?:dso-calculator|cashflow-tool)\.js(?:$|\?)/
];
var killed = 0;
document.querySelectorAll('script[src]').forEach(function (s) {
var src = s.getAttribute('src') || '';
var bad = BAD_PATTERNS.some(function (p) { return p.test(src); });
if (!bad) return;
s.setAttribute('type', 'javascript/blocked');
s.setAttribute('data-lgv3-neutralized', src);
s.removeAttribute('src');
if (s.parentNode) s.parentNode.removeChild(s);
killed++;
});
if (document.body) document.body.dataset.lgv3EmbedsFixed = '1';
if (killed > 0 && window.console) console.info('[lgv3] Neutralized ' + killed + ' broken embed script(s).');
}
lgv3NeutralizeBrokenEmbeds();
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', lgv3NeutralizeBrokenEmbeds);
}
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
function attachCursorGlow(box) {
let targetX = 50, targetY = 50;
let currentX = 50, currentY = 50;
let velX = 0, velY = 0;
let rafId = null, hovering = false;
const STIFFNESS = 0.14, DAMPING = 1.0;
function stepSpring(current, target, velocity) {
const force = (target - current) * STIFFNESS;
velocity = (velocity + force) * (1 - DAMPING * 0.18);
return [current + velocity, velocity];
}
function frame() {
[currentX, velX] = stepSpring(currentX, targetX, velX);
[currentY, velY] = stepSpring(currentY, targetY, velY);
box.style.setProperty('--mouse-x', currentX.toFixed(2) + '%');
box.style.setProperty('--mouse-y', currentY.toFixed(2) + '%');
const settled = Math.abs(targetX - currentX) < 0.05 && Math.abs(targetY - currentY) < 0.05;
if (hovering || !settled) rafId = requestAnimationFrame(frame);
else rafId = null;
}
function startLoop() { if (rafId === null) rafId = requestAnimationFrame(frame); }
box.addEventListener('pointermove', function (e) {
const rect = box.getBoundingClientRect();
targetX = ((e.clientX - rect.left) / rect.width) * 100;
targetY = ((e.clientY - rect.top) / rect.height) * 100;
hovering = true;
box.setAttribute('data-hover', '1');
startLoop();
});
box.addEventListener('pointerleave', function () {
hovering = false;
targetX = 50; targetY = 50;
box.removeAttribute('data-hover');
startLoop();
});
box.addEventListener('pointerdown', function (e) {
if (e.pointerType === 'touch') {
box.setAttribute('data-hover', '1');
setTimeout(function () { box.removeAttribute('data-hover'); }, 900);
}
});
}
function wrapChars(root) {
function recurse(node) {
if (node.nodeType === 3) {
const text = node.nodeValue;
if (!text) return;
const frag = document.createDocumentFragment();
const tokens = text.split(/(\s+)/);
tokens.forEach(function (token) {
if (token === '') return;
if (/^\s+$/.test(token)) {
const s = document.createElement('span');
s.className = 'char space';
s.textContent = ' ';
frag.appendChild(s);
} else {
const wword = document.createElement('span');
wword.className = 'wword';
token.split('').forEach(function (ch) {
const s = document.createElement('span');
s.className = 'char';
s.textContent = ch;
wword.appendChild(s);
});
frag.appendChild(wword);
}
});
node.parentNode.replaceChild(frag, node);
} else if (node.nodeType === 1) {
const style = node.getAttribute('style') || '';
if (style.indexOf('-webkit-text-fill-color') !== -1) {
node.classList.add('char');
const wword = document.createElement('span');
wword.className = 'wword';
node.parentNode.insertBefore(wword, node);
wword.appendChild(node);
return;
}
if (node.childNodes && node.childNodes.length) {
Array.from(node.childNodes).forEach(recurse);
}
}
}
Array.from(root.childNodes).forEach(recurse);
}
function attachReveal(h) {
wrapChars(h);
const chars = h.querySelectorAll('.char:not(.space)');
chars.forEach(function (c, i) {
c.style.setProperty('--char-delay', (i * 14) + 'ms');
});
h.classList.add('chars-split');
const io = new IntersectionObserver(function (entries) {
entries.forEach(function (entry) {
if (entry.isIntersecting) {
entry.target.classList.add('revealed');
io.unobserve(entry.target);
}
});
}, { threshold: 0.35 });
io.observe(h);
}
function addDropdownBridges() {
document.querySelectorAll('.navbar .dropdown.w-dropdown').forEach(function (dd) {
if (!dd.querySelector('.lgv3-hover-bridge')) {
var b = document.createElement('div');
b.className = 'lgv3-hover-bridge';
b.setAttribute('aria-hidden', 'true');
dd.appendChild(b);
}
dd.setAttribute('data-delay', '500');
});
}
function injectGlossaryBreadcrumb() {
if (!/^\/glossary\/[^\/]+/.test(_lgv3P())) return;
if (document.querySelector('.tf-breadcrumb')) return;
var h1 = document.querySelector('.tf-glossary-h1');
if (!h1) return;
var name = h1.textContent.trim();
var esc = function (s) { return s.replace(/[<>&"']/g, function (c) { return ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'})[c]; }); };
var crumb = document.createElement('div');
crumb.className = 'tf-breadcrumb';
crumb.setAttribute('aria-label', 'Breadcrumb');
crumb.innerHTML =
'<a href="/">Home</a>' +
'<span class="tf-breadcrumb-sep" aria-hidden="true">→</span>' +
'<a href="/glossary">Glossary</a>' +
'<span class="tf-breadcrumb-sep" aria-hidden="true">→</span>' +
'<span class="tf-breadcrumb-current">' + esc(name) + '</span>';
h1.parentNode.insertBefore(crumb, h1);
var ld = {
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Home","item":location.origin + "/"},
{"@type":"ListItem","position":2,"name":"Glossary","item":location.origin + "/glossary"},
{"@type":"ListItem","position":3,"name":name,"item":location.href.split('#')[0].split('?')[0]}
]
};
var s = document.createElement('script');
s.type = 'application/ld+json';
s.textContent = JSON.stringify(ld);
document.head.appendChild(s);
}
var SOLUTION_IMAGE_MAPS = {
'cash-application': [
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9ed7814b30f551626c60_e57293d5e53a3981daeaa229a2ec9fad_card-cash-app.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9ed7814b30f551626c66_card-docsense.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9ed7814b30f551626c60_e57293d5e53a3981daeaa229a2ec9fad_card-cash-app.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9ed7814b30f551626c62_card-doc-intel.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9ed7814b30f551626c64_card-journal.avif'
],
'collections': [
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9effac59f55ed2162c5c_89904a67e2dbf13e9bdb59df36357cc2_card-collections.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9effac59f55ed2162c5f_card-customer.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9effac59f55ed2162c61_card-ai-workflow.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9effac59f55ed2162c63_card-wf-builder.avif'
],
'deductions': [
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9f1d00e7328a348be73d_641b78d95aecfce017fced10a3f3b5e4_card-ded-dash.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9f1d00e7328a348be73d_641b78d95aecfce017fced10a3f3b5e4_card-ded-dash.avif',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69df9f1d00e7328a348be73f_card-ded-case.avif'
],
};
function syncSolutionsImages() { if(_lgv3isDE())return;
var m = _lgv3P().match(/^\/solutions\/([a-z-]+?)(?:---wip)?\/?$/);
if (!m) return;
var key = m[1];
var expected = SOLUTION_IMAGE_MAPS[key];
if (!expected) return;
if (document.body.dataset.lgv3SolImg === '1') return;
document.body.dataset.lgv3SolImg = '1';
var realImgs = Array.from(document.querySelectorAll('section img, main img, .container img')).filter(function (img) {
var r = img.getBoundingClientRect();
var src = (img.src || '').toLowerCase();
if (r.width < 100 && r.height < 100) return false;
if (src.indexOf('logo') !== -1 || src.indexOf('icon') !== -1) return false;
if (img.closest('.section.footer-a, .navbar, nav, header.navbar')) return false;
return true;
});
expected.forEach(function (url, i) {
if (realImgs[i] && realImgs[i].src !== url) {
realImgs[i].src = url;
realImgs[i].srcset = '';
}
});
}
function swapSolutionsHero() {
if (!/^\/solutions(---wip)?\/?$/.test(_lgv3P())) return;
var hero = document.querySelector('.hero-mockup img, .hero-platform-grid img, section.hero img[src*="card"]');
if (!hero) return;
if (hero.dataset.lgv3SolutionsSwapped === '1') return;
hero.dataset.lgv3SolutionsSwapped = '1';
hero.src = 'https://daks2k3a4ib2z.cloudfront.net/684931abb239b84984296d93/69e143ec714bf41a33721b7c_solutions-hero-cards.avif';
hero.srcset = '';
hero.alt = 'Transformance solutions hero — four product cards (ClearMatch, CollectPulse, ClaimIQ, CashPulse) orbiting Vero AI agent';
}
function injectFounderPhotos() {
if (!/^\/about(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3FounderPhotos === '1') return;
document.body.dataset.lgv3FounderPhotos = '1';
var photos = {
'paul hanke':   'https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif',
'nick parenti': 'https://cdn.prod.website-files.com/684931abb239b84984296d93/685287db4beca520c820d9c5_Profile%20Nick%20Parenti.webp'
};
document.querySelectorAll('.team-card').forEach(function (card) {
var nameEl = card.querySelector('h4, .team-id h4');
var name = nameEl ? nameEl.textContent.trim().toLowerCase() : '';
var url = photos[name];
if (!url) return;
var avatar = card.querySelector('.avatar, .team-avatar');
if (!avatar) return;
avatar.innerHTML = '<img src="' + url + '" alt="' + (nameEl.textContent.trim()) + '" loading="lazy" />';
avatar.removeAttribute('aria-hidden');
avatar.classList.add('lgv3-photo-avatar');
});
}
function updateBlogTile(tile, post) {
var imgEl = tile.querySelector('img');
if (imgEl && post.img) {
imgEl.src = post.img;
if (post.imgAlt) imgEl.alt = post.imgAlt;
imgEl.srcset = '';
}
var titleEl = tile.querySelector('[data-cms-field="title"], h2, h3, h4, .heading-h5, .post-title, .feat-title');
if (titleEl && post.title) titleEl.textContent = post.title;
var catEl = tile.querySelector('[data-cms-field="category"], .category, .post-category, .feat-eyebrow:not(.featured-badge)');
if (catEl && post.category) catEl.textContent = post.category;
var dateEl = tile.querySelector('[data-cms-field="date"], .date, .post-date, .feat-date');
if (dateEl && post.date) dateEl.textContent = post.date;
var primaryLink = tile.querySelector('a[href]');
if (primaryLink && post.url) primaryLink.href = post.url;
if (post.url) {
var wrapLink = tile.closest('a.feat-link, a.post-link, a.blog-link');
if (wrapLink) wrapLink.setAttribute('href', post.url);
}
var overlay = tile.querySelector('.lgv3-card-link-overlay');
if (!overlay) {
overlay = document.createElement('a');
overlay.className = 'lgv3-card-link-overlay';
tile.style.position = tile.style.position || 'relative';
tile.style.cursor = 'pointer';
overlay.style.cssText = 'position:absolute;inset:0;z-index:5;text-decoration:none;';
tile.appendChild(overlay);
}
if (post.url) {
overlay.href = post.url;
overlay.setAttribute('aria-label', post.title || '');
}
}
function lgv3FixBlogPillSlugs() {
if (!/^\/blog(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3BlogPillSlugs === '1') return;
var SLUG_FIXES = {
'vero': {label: 'AI in Finance', slug: 'ai-in-finance'},
'vero ai': {label: 'AI in Finance', slug: 'ai-in-finance'},
'cash-application': {label: 'Cash Application', slug: 'cash-app'},
'cash application': {label: 'Cash Application', slug: 'cash-app'},
'cashflow': {label: 'Cash Flow Forecasting', slug: 'cash-flow-forecasting'}
};
var pills = document.querySelectorAll('.blog-filter button, .filter-pill, [class*="blog-filter"] button');
pills.forEach(function (pill) {
var currentSlug = (pill.getAttribute('data-cms-filter') || '').toLowerCase();
var currentText = (pill.textContent || '').trim().toLowerCase();
var fix = SLUG_FIXES[currentSlug] || SLUG_FIXES[currentText];
if (!fix) return;
pill.setAttribute('data-cms-filter', fix.slug);
pill.textContent = fix.label;
});
document.body.dataset.lgv3BlogPillSlugs = '1';
}
function wireBlogIndex() {
if (!/^\/blog(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3BlogIdx === '1') return;
document.body.dataset.lgv3BlogIdx = '1';
lgv3FixBlogPillSlugs();
function lgv3NormalizePillText(s) {
var first = (s || '').split('\n').map(function (x) { return x.trim(); }).filter(Boolean)[0] || '';
first = first.replace(/[\s(]+\d+\)?$/, '').trim();
return first.toLowerCase();
}
function lgv3SlugifyCategory(s) {
return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '');
}
var pills = document.querySelectorAll('.blog-filter button, .filter-pill, [class*="blog-filter"] button');
pills.forEach(function (pill) {
if (pill.dataset.lgv3PillBound === '1') return;
pill.dataset.lgv3PillBound = '1';
pill.addEventListener('click', function () {
pills.forEach(function (p) { p.classList.remove('active'); p.classList.remove('is-active'); });
pill.classList.add('active');
pill.classList.add('is-active');
var filterAttr = pill.getAttribute('data-cms-filter') || pill.getAttribute('data-category') || '';
var pillSlug = lgv3SlugifyCategory(filterAttr || lgv3NormalizePillText(pill.textContent));
var pillText = lgv3NormalizePillText(pill.textContent);
var showAll = pillSlug === '' || pillSlug === 'all' || pillSlug === 'allposts' ||
pillText === '' || pillText === 'all' || pillText === 'all posts';
document.querySelectorAll('.post-card, article.post-card, article.feat-glass, [data-cms-item]').forEach(function (card) {
if (showAll) { card.style.display = ''; return; }
var catEl = card.querySelector('.post-category, .post-eyebrow, .feat-eyebrow:not(.featured-badge), .pc-cat, [data-cms-field="category"]');
var rawCat = catEl ? catEl.textContent : '';
var cardCatSlug = lgv3SlugifyCategory(rawCat);
var cardCatText = lgv3NormalizePillText(rawCat);
var visible =
cardCatSlug === pillSlug ||
(cardCatSlug !== '' && pillSlug !== '' &&
(cardCatSlug.indexOf(pillSlug) !== -1 || pillSlug.indexOf(cardCatSlug) !== -1)) ||
(cardCatText !== '' && pillText !== '' &&
(cardCatText.indexOf(pillText) !== -1 || pillText.indexOf(cardCatText) !== -1));
card.style.display = visible ? '' : 'none';
});
if (typeof lgv3FixBlogCounter === 'function') {
document.body.dataset.lgv3BlogCounterFixed = '';
lgv3FixBlogCounter();
}
});
});
var blogGrid = document.querySelector('.blog-grid, .blog-cards, .post-card') || document.body;
blogGrid = blogGrid.parentElement || blogGrid;
var spinner = null;
if (!document.querySelector('.lgv3-blog-spinner')) {
spinner = document.createElement('div');
spinner.className = 'lgv3-blog-spinner';
spinner.setAttribute('aria-live', 'polite');
spinner.setAttribute('role', 'status');
spinner.style.cssText = 'display:flex;align-items:center;justify-content:center;gap:0.75rem;padding:1.25rem;margin:1rem 0;font:500 14px/1.2 system-ui,sans-serif;color:#5e5e5e;';
spinner.innerHTML = '<span style="display:inline-block;width:18px;height:18px;border:2px solid #d0d0d0;border-top-color:#FF5043;border-radius:50%;animation:lgv3spin 0.8s linear infinite;"></span><span>Loading latest posts…</span>';
if (!document.getElementById('lgv3-spin-kf')) {
var kf = document.createElement('style');
kf.id = 'lgv3-spin-kf';
kf.textContent = '@keyframes lgv3spin{to{transform:rotate(360deg)}}';
document.head.appendChild(kf);
}
blogGrid.insertBefore(spinner, blogGrid.firstChild);
}
function lgv3RemoveBlogSpinner() {
if (spinner && spinner.parentNode) spinner.parentNode.removeChild(spinner);
}
fetch(_lgv3isDE() ? '/de/blog-old-2026' : '/blog-old-2026', { credentials: 'same-origin' })
.then(function (r) { return r.text(); })
.then(function (html) {
lgv3RemoveBlogSpinner();
var dom = new DOMParser().parseFromString(html, 'text/html');
var items = Array.from(dom.querySelectorAll('.w-dyn-item .blog-post, .w-dyn-item'));
if (items.length === 0) return;
var posts = items.map(function (item) {
var link = item.querySelector('a[href*="/blog-posts/"]');
var img = item.querySelector('img');
var titleAnchor = item.querySelectorAll('a[href*="/blog-posts/"]')[1]
|| item.querySelector('.heading-h5, h1, h2, h3, h4, h5, h6')
|| item.querySelector('a[href*="/blog-posts/"]');
var catLink = item.querySelector('a[href*="/blog-categories/"]');
var date = item.querySelector('.small-text:not(.bold-text)');
return {
url: link ? (function(h){return (_lgv3isDE()&&h&&h.charAt(0)==='/'&&h.indexOf('/de/')!==0)?'/de'+h:h;})(link.getAttribute('href')) : null,
img: img ? img.src : null,
imgAlt: img ? img.alt : '',
title: titleAnchor ? titleAnchor.textContent.trim() : '',
category: catLink ? catLink.textContent.trim() : '',
date: date ? date.textContent.trim() : ''
};
}).filter(function (p) { return p.url && p.title; });
var seenUrls = {};
posts = posts.filter(function (p) {
if (seenUrls[p.url]) return false;
seenUrls[p.url] = true;
return true;
});
if (posts.length === 0) return;
var featured = document.querySelector('article[data-cms-item="featured-post"], article.feat-glass');
if (featured && posts[0]) updateBlogTile(featured, posts[0]);
var regular = Array.from(document.querySelectorAll('.post-card, article.post-card'));
if (regular.length > 0) {
var template = regular[regular.length - 1].cloneNode(true);
var parent = regular[0].parentElement;
regular.forEach(function (tile, i) {
var post = posts[i + 1];
if (post) {
updateBlogTile(tile, post);
tile.style.display = '';
} else {
tile.style.display = 'none';
}
});
var startIdx = regular.length + 1;
var maxPosts = Math.min(posts.length, 100);
for (var i = startIdx; i < maxPosts; i++) {
var clone = template.cloneNode(true);
updateBlogTile(clone, posts[i]);
clone.style.display = '';
parent.appendChild(clone);
}
}
if (typeof lgv3FixBlogCounter === 'function') {
document.body.dataset.lgv3BlogCounterFixed = '';
lgv3FixBlogCounter();
}
try{if(typeof lgv3InjectBlogFounderPhotos==='function')lgv3InjectBlogFounderPhotos();}catch(x){}
document.documentElement.classList.remove('lgv3-blog-loading');
})
.catch(function (e) { lgv3RemoveBlogSpinner(); document.documentElement.classList.remove('lgv3-blog-loading'); console.warn('Blog CMS fetch failed:', e); });
}
function slugify(s) {
return (s || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function lgv3FillMissingGlossaryTerms() {
if (!/^\/glossary(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3GlossaryFilled === '1') return;
if (_lgv3isDE()) { document.body.dataset.lgv3GlossaryFilled = '1'; return; }
var firstGrid = document.querySelector('.entry-grid');
if (!firstGrid) return;
function gridForLetter(letter) {
var lower = (letter || '').toLowerCase();
var block = document.getElementById('letter-' + lower);
if (block) {
var g = block.querySelector('.entry-grid');
if (g) return g;
}
return firstGrid;
}
function normName(s) { return (s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }
fetch(_lgv3isDE() ? '/de/glossary-old-2026' : '/glossary-old-2026', {credentials: 'same-origin'})
.then(function (r) { return r.text(); })
.then(function (html) {
var dom = new DOMParser().parseFromString(html, 'text/html');
var anchors = dom.querySelectorAll('.tf-glossary-grid-link, .w-dyn-item a[href*="/glossary/"]');
var cmsTerms = {};
anchors.forEach(function (a) {
var url = a.getAttribute('href');
if (!url || url === '/glossary' || url === '/glossary/') return;
var name = (a.querySelector('h3, h4, .heading-h5')?.textContent || a.textContent || '').trim();
if (!name) return;
var nn = normName(name);
if (!cmsTerms[nn]) cmsTerms[nn] = {url: url, name: name};
});
var existing = {};
Array.prototype.forEach.call(document.querySelectorAll('.entry-card'), function (card) {
var raw = (card.querySelector('h3, .entry-name, .entry-title')?.textContent || '').trim();
var n = normName(raw);
if (!n) return;
if (!cmsTerms[n]) {
card.style.display = 'none';
card.setAttribute('data-lgv3-stale', '1');
} else {
existing[n] = true;
}
});
var added = 0;
if (!_lgv3isDE()) Object.keys(cmsTerms).forEach(function (nn) {
if (existing[nn]) return;
var term = cmsTerms[nn];
var url = term.url;
var name = term.name;
var card = document.createElement('article');
card.className = 'entry-card lgv3-glossary-added';
card.setAttribute('data-cms-category', 'general');
card.style.cssText = 'position:relative;cursor:pointer;';
var _gde = _lgv3isDE();
card.innerHTML =
'<span class="entry-eyebrow" data-cms-field="category">' + (_gde ? 'REFERENZ' : 'REFERENCE') + '</span>' +
'<h3><a href="' + url + '" data-cms-field="term">' + name + '</a></h3>' +
'<p data-cms-field="definition-short">' + (_gde ? 'Für die vollständige Definition tippen.' : 'Tap to read the full definition.') + '</p>' +
'<span class="entry-link">' + (_gde ? 'Definition lesen' : 'Read definition') + ' &rarr;</span>' +
'<a class="lgv3-card-link-overlay" href="' + url + '" aria-label="' + name + '" style="position:absolute;inset:0;z-index:5;text-decoration:none;"></a>';
var targetGrid = gridForLetter(name.charAt(0));
targetGrid.appendChild(card);
existing[nn] = true;
added++;
});
document.querySelectorAll('.letter-block').forEach(function (block) {
var visibleCount = Array.prototype.filter.call(
block.querySelectorAll('.entry-card'),
function (c) { return c.style.display !== 'none'; }
).length;
var head = block.querySelector('.letter-head');
if (!head) return;
var countSpan = head.querySelector('.letter-count, [class*="terms-count"], [class*="count"]');
if (countSpan && /\d+\s*terms?/i.test(countSpan.textContent || '')) {
countSpan.textContent = visibleCount + ' terms';
} else {
var headText = (head.textContent || '').replace(/\s+/g, ' ').trim();
var m = headText.match(/^([A-Z\d])\s+(\d+)\s*TERMS?$/i);
if (m) {
var walker = document.createTreeWalker(head, NodeFilter.SHOW_TEXT, null, false);
var node;
while ((node = walker.nextNode())) {
if (/\d+\s*TERMS?/i.test(node.nodeValue)) {
node.nodeValue = node.nodeValue.replace(/\d+\s*TERMS?/i, visibleCount + ' TERMS');
break;
}
}
}
}
block.style.display = visibleCount > 0 ? '' : 'none';
});
document.body.dataset.lgv3GlossaryFilled = '1';
if (added > 0) {
}
})
.catch(function (e) { console.warn('Glossary fill failed:', e); });
}
function wireGlossaryIndex() {
if (!/^\/glossary(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3Glossary === '1') return;
document.body.dataset.lgv3Glossary = '1';
lgv3FillMissingGlossaryTerms();
var cards = document.querySelectorAll('.entry-card');
cards.forEach(function (card) {
var titleLink = card.querySelector('a[href*="glossary"]');
var nameEl = card.querySelector('h3, .entry-name, .entry-title');
var name = nameEl ? nameEl.textContent.trim() : (titleLink ? titleLink.textContent.trim() : '');
if (!name) return;
var url = (_lgv3isDE() && titleLink && titleLink.getAttribute('href')) ? titleLink.getAttribute('href') : '/glossary/' + slugify(name);
if (titleLink) titleLink.href = url;
card.style.position = card.style.position || 'relative';
card.style.cursor = 'pointer';
if (!card.querySelector('.lgv3-card-link-overlay')) {
var overlay = document.createElement('a');
overlay.className = 'lgv3-card-link-overlay';
overlay.href = url;
overlay.setAttribute('aria-label', name);
overlay.style.cssText = 'position:absolute;inset:0;z-index:5;text-decoration:none;';
card.appendChild(overlay);
}
});
var pills = document.querySelectorAll('.filter-pill');
pills.forEach(function (pill) {
pill.addEventListener('click', function () {
pills.forEach(function (p) { p.classList.remove('active'); });
pill.classList.add('active');
var filterAttr = pill.getAttribute('data-cms-filter') || pill.getAttribute('data-cat');
var pillText = typeof lgv3NormalizePillText === 'function' ? lgv3NormalizePillText(pill.textContent) : (pill.textContent || '').trim().toLowerCase();
var pillSlug = typeof lgv3SlugifyCategory === 'function' ? lgv3SlugifyCategory(filterAttr || pillText) : (filterAttr || pillText).toLowerCase().replace(/[^a-z0-9]+/g, '');
var showAll = pillSlug === '' || pillSlug === 'all' || pillSlug === 'allterms';
var liveCards = document.querySelectorAll('.entry-card');
liveCards.forEach(function (card) {
var cardCatEl = card.querySelector('.entry-category, .entry-eyebrow, .cat, [data-cms-field="category"]');
var rawCat = (card.getAttribute('data-category') || card.getAttribute('data-cms-category') || (cardCatEl ? cardCatEl.textContent : '') || '');
var cardSlug = typeof lgv3SlugifyCategory === 'function' ? lgv3SlugifyCategory(rawCat) : rawCat.toLowerCase().replace(/[^a-z0-9]+/g, '');
var visible = showAll || cardSlug === pillSlug || cardSlug.indexOf(pillSlug) !== -1 || pillSlug.indexOf(cardSlug) !== -1;
card.style.display = visible ? '' : 'none';
});
document.querySelectorAll('.letter-group, .az-section, [class*="letter-group"], [class*="az-group"]').forEach(function (group) {
var visibleCards = Array.from(group.querySelectorAll('.entry-card')).filter(function (c) { return c.style.display !== 'none'; });
group.style.display = visibleCards.length > 0 ? '' : 'none';
var countEl = group.querySelector('.letter-count, [class*="count"], [class*="terms-count"]');
if (countEl && /\d+\s*terms?/i.test(countEl.textContent || '')) {
countEl.textContent = visibleCards.length + ' terms';
}
});
});
});
var search = document.querySelector('.search-input, input[placeholder*="Search"]');
if (search) {
var resultsHost = search.closest('.glossary, .glossary-index, main, section') || document.body;
var searchHost = search.closest('section, .glossary-controls, .search-wrap') || search.parentElement;
var emptyMsg = null;
function ensureEmptyMsg() {
if (emptyMsg) return emptyMsg;
emptyMsg = document.createElement('div');
emptyMsg.className = 'lgv3-glossary-empty';
emptyMsg.setAttribute('role', 'status');
emptyMsg.setAttribute('aria-live', 'polite');
emptyMsg.style.cssText = 'padding:2rem 1rem;margin:1.5rem 0;text-align:center;font:500 15px/1.4 system-ui,sans-serif;color:#5e5e5e;border:1px dashed rgba(0,0,0,0.12);border-radius:12px;';
emptyMsg.textContent = 'No glossary terms match your search. Try a different query.';
return emptyMsg;
}
function showEmptyMsg() {
var e = ensureEmptyMsg();
if (e.parentNode) return;
if (searchHost && searchHost.parentNode) searchHost.parentNode.insertBefore(e, searchHost.nextSibling);
else resultsHost.appendChild(e);
}
function hideEmptyMsg() {
if (emptyMsg && emptyMsg.parentNode) emptyMsg.parentNode.removeChild(emptyMsg);
}
Array.prototype.forEach.call(document.querySelectorAll('.lgv3-glossary-empty'), function (el) {
if (el.parentNode) el.parentNode.removeChild(el);
});
search.addEventListener('input', function (e) {
var q = (e.target.value || '').toLowerCase().trim();
var liveCards = document.querySelectorAll('.entry-card');
var visibleCount = 0;
liveCards.forEach(function (card) {
var text = (card.textContent || '').toLowerCase();
var ds = card.dataset || {};
var attrText = ((ds.term || '') + ' ' + (ds.title || '') + ' ' + (ds.name || '')).toLowerCase();
var combined = text + ' ' + attrText;
var show = (q === '' || combined.indexOf(q) !== -1);
card.style.display = show ? '' : 'none';
if (show) visibleCount++;
});
if (q) {
pills.forEach(function (p) { p.classList.remove('active'); });
(pills[0] || {}).classList && pills[0].classList.add('active');
}
document.querySelectorAll('.letter-group, .az-section, [class*="letter-group"]').forEach(function (group) {
var any = Array.from(group.querySelectorAll('.entry-card')).some(function (c) { return c.style.display !== 'none'; });
group.style.display = any ? '' : 'none';
});
if (q !== '' && visibleCount === 0) showEmptyMsg(); else hideEmptyMsg();
});
}
document.querySelectorAll('.az-letter, [class*="letter-jump"], [data-letter]').forEach(function (link) {
var letter = link.textContent.trim().toUpperCase();
if (!letter || letter.length > 1) return;
link.style.cursor = 'pointer';
link.addEventListener('click', function (e) {
e.preventDefault();
var target = document.querySelector('[data-az-letter="' + letter + '"], #az-' + letter + ', [id="letter-' + letter + '"]');
if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
});
});
}
function rebuildBlogHero() {
if (!/^\/blog-posts\//.test(_lgv3P())) return;
var meta = document.querySelector('.blog-intro-section .post-meta');
var author = document.querySelector('.blog-intro-section .post-author');
if (!meta || !author) return;
if (author.querySelector('.lgv3-blog-date')) return;
var lines = meta.innerText.trim().split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
if (lines.length < 2) return;
var cat = lines[0];
var date = lines[1];
var catLink = Array.from(meta.querySelectorAll('a')).find(function (a) { return a.innerText.trim() === cat; });
meta.classList.add('lgv3-hide');
var mkSep = function () { var s = document.createElement('span'); s.className = 'lgv3-blog-date-sep'; s.textContent = ' · '; return s; };
var dt = document.createElement('span');
dt.className = 'lgv3-blog-date';
dt.textContent = date;
author.appendChild(mkSep());
author.appendChild(dt);
var catEl;
if (catLink) {
catEl = catLink.cloneNode(true);
catEl.classList.add('lgv3-blog-category');
} else {
catEl = document.createElement('span');
catEl.className = 'lgv3-blog-category';
catEl.textContent = cat;
}
author.appendChild(mkSep());
author.appendChild(catEl);
}
function lgv3SwapBestArHeroLogos() {
if (!/^\/(comparison\/)?best-accounts-receivable-software(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3HeroLogoSwap === '1') return;
var HERO_SWAPS = {
'tesorio':    'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a24834964a9341b45750d8b_vendor-tesorio.svg',
'versapay':   'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a24834964a9341b45750d9d_vendor-versapay.svg',
'highradius': 'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a2483494c712808868fe229_vendor-highradius.webp'
};
var imgs = document.querySelectorAll('.listicle-hero-cluster .lhc-logo img');
for (var i = 0; i < imgs.length; i++) {
var img = imgs[i];
var alt = (img.getAttribute('alt') || '').toLowerCase().trim();
if (HERO_SWAPS[alt]) {
img.setAttribute('src', HERO_SWAPS[alt]);
img.removeAttribute('srcset');
}
}
document.body.dataset.lgv3HeroLogoSwap = '1';
}
function injectVendorLogosBestAR() {
if (!/^\/(comparison\/)?best-accounts-receivable-software(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3VendorCards === '1') return;
document.body.dataset.lgv3VendorCards = '1';
var BEST_AR_LOGOS = {
'highradius':   'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a2483494c712808868fe229_vendor-highradius.webp',
'billtrust':    'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc2e5389f9f77a9aa13_vendor-billtrust.png',
'blackline':    'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc3e5389f9f77a9aa4f_vendor-blackline.png',
'esker':        'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a253f26f8c1e9f2444f7798_vendor-esker.png',
'sidetrade':    'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc304f5ea9caf10ff7a_vendor-sidetrade.png',
'versapay':     'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a24834964a9341b45750d9d_vendor-versapay.svg',
'quadient ar':  'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc388b076aaf67d3b2a_vendor-quadient.png',
'quadient':     'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc388b076aaf67d3b2a_vendor-quadient.png',
'tesorio':      'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a24834964a9341b45750d8b_vendor-tesorio.svg'
};
document.querySelectorAll('.vendor-card').forEach(function (card) {
if (card.classList.contains('vc-card-winner')) return; // skip Transformance
var titleEl = card.querySelector('h2, h3, h4');
if (!titleEl) return;
var nameLower = (titleEl.textContent || '').toLowerCase().trim();
var nameStripped = nameLower.replace(/\s*\([^)]*\)\s*/g, '').trim();
var url = BEST_AR_LOGOS[nameStripped] || BEST_AR_LOGOS[nameLower];
if (!url) return;
var logoSlot = card.querySelector('.vc-logo');
if (logoSlot && logoSlot.querySelector('.lgv3-vendor-card-logo')) return;
var img = document.createElement('img');
img.className = 'lgv3-vendor-card-logo';
img.src = url;
img.alt = titleEl.textContent.trim() + ' logo';
img.loading = 'lazy';
img.style.cssText = 'max-width:100%;max-height:48px;width:auto;height:auto;display:block;';
if (logoSlot) {
logoSlot.innerHTML = '';
logoSlot.appendChild(img);
} else {
titleEl.parentElement.insertBefore(img, titleEl);
}
var stale = card.querySelectorAll('.vc-name-block > .lgv3-vendor-card-logo');
stale.forEach(function (n) { if (n.parentNode) n.parentNode.removeChild(n); });
});
}
var VENDOR_LOGOS = {
'billtrust':   'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc2e5389f9f77a9aa13_vendor-billtrust.png',
'blackline':   'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc3e5389f9f77a9aa4f_vendor-blackline.png',
'esker':       'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a253f26f8c1e9f2444f7798_vendor-esker.png',
'highradius':  'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a2483494c712808868fe229_vendor-highradius.webp',
'quadient':    'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc388b076aaf67d3b2a_vendor-quadient.png',
'quadient ar': 'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc388b076aaf67d3b2a_vendor-quadient.png',
'sidetrade':   'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a22edc304f5ea9caf10ff7a_vendor-sidetrade.png',
'tesorio':     'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a24834964a9341b45750d8b_vendor-tesorio.svg',
'versapay':    'https://cdn.prod.website-files.com/684931abb239b84984296d93/6a24834964a9341b45750d9d_vendor-versapay.svg'
};
function vendorLogoSwap() {
document.querySelectorAll('img').forEach(function (img) {
if (img.getAttribute('data-lgv3-vendor-swapped') === '1') return;
var alt = (img.alt || '').trim().toLowerCase();
if (!alt) return;
var url = VENDOR_LOGOS[alt];
if (!url) return;
var currentSrc = img.src || '';
if (currentSrc.indexOf('vendor-') === -1) return;
img.setAttribute('data-lgv3-vendor-swapped', '1');
img.src = url;
img.srcset = '';
});
}
function injectBlogBreadcrumb() {
if (!/^\/blog-posts\//.test(_lgv3P())) return;
if (document.querySelector('.tf-breadcrumb')) return;
var heroContainer = document.querySelector('.blog-intro-section .container');
if (!heroContainer) return;
var h1 = document.querySelector('.blog-intro-section h1');
if (!h1) return;
var name = h1.textContent.trim();
var esc = function (s) { return s.replace(/[<>&"']/g, function (c) { return ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'})[c]; }); };
var crumb = document.createElement('div');
crumb.className = 'tf-breadcrumb';
crumb.style.justifyContent = 'center';
crumb.style.textAlign = 'center';
crumb.setAttribute('aria-label', 'Breadcrumb');
crumb.innerHTML =
'<a href="/">Home</a>' +
'<span class="tf-breadcrumb-sep" aria-hidden="true">→</span>' +
'<a href="/blog">Blog</a>' +
'<span class="tf-breadcrumb-sep" aria-hidden="true">→</span>' +
'<span class="tf-breadcrumb-current">' + esc(name) + '</span>';
heroContainer.insertBefore(crumb, heroContainer.firstChild);
var ld = {
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Home","item":location.origin + "/"},
{"@type":"ListItem","position":2,"name":"Blog","item":location.origin + "/blog"},
{"@type":"ListItem","position":3,"name":name,"item":location.href.split('#')[0].split('?')[0]}
]
};
var s = document.createElement('script');
s.type = 'application/ld+json';
s.textContent = JSON.stringify(ld);
document.head.appendChild(s);
}
function addBlogReadingTime() {
if (!/^\/blog-posts\//.test(_lgv3P())) return;
var author = document.querySelector('.blog-intro-section .post-author');
var article = document.querySelector('.article.w-richtext');
if (!author || !article) return;
if (author.querySelector('.lgv3-reading-time')) return;
var words = (article.innerText || '').trim().split(/\s+/).length;
var mins = Math.max(1, Math.round(words / 400));
var sep = document.createElement('span');
sep.className = 'lgv3-blog-date-sep';
sep.textContent = ' · ';
var rt = document.createElement('span');
rt.className = 'lgv3-reading-time';
rt.textContent = mins + ' min read';
author.appendChild(sep);
author.appendChild(rt);
}
function injectBlogArticleSchema() {
if (!/^\/blog-posts\//.test(_lgv3P())) return;
if (document.querySelector('script[type="application/ld+json"][data-lgv3-article]')) return;
var h1 = document.querySelector('.blog-intro-section h1');
if (!h1) return;
var headline = h1.textContent.trim();
var dateEl = document.querySelector('.blog-intro-section .post-author .lgv3-blog-date');
var dateText = dateEl ? dateEl.textContent.trim() : null;
var datePub = null;
if (dateText) {
var parsed = new Date(dateText);
if (!isNaN(parsed.getTime())) datePub = parsed.toISOString();
}
var authorEl = document.querySelector('.blog-intro-section .post-author .small-text, .blog-intro-section .post-author .heading-h5');
var authorName = authorEl ? authorEl.textContent.trim() : null;
var heroImg = document.querySelector('.blog-hero img, .blog-intro-section .content---xl img');
var imgSrc = heroImg ? heroImg.src : null;
var descMeta = document.querySelector('meta[name="description"]');
var description = descMeta ? descMeta.content : '';
var ld = {
"@context": "https://schema.org",
"@type": "Article",
"headline": headline,
"url": location.href.split('#')[0].split('?')[0],
"mainEntityOfPage": location.href.split('#')[0].split('?')[0],
"description": description,
"publisher": {
"@type": "Organization",
"name": "Transformance",
"url": "https://www.transformance.ai/"
}
};
if (datePub) ld.datePublished = datePub;
if (authorName) ld.author = { "@type": "Person", "name": authorName };
if (imgSrc) ld.image = imgSrc;
var s = document.createElement('script');
s.type = 'application/ld+json';
s.setAttribute('data-lgv3-article', '1');
s.textContent = JSON.stringify(ld);
document.head.appendChild(s);
}
function activateBlogGrid() {
if (!/^\/blog-posts\//.test(_lgv3P())) return;
document.querySelectorAll('section.section > .container > .content---m').forEach(function (cm) {
if (cm.querySelector('.article-wrapper')) cm.classList.add('lgv3-blog-grid');
});
}
function hoistBlogTOC() {
if (!/^\/blog-posts\//.test(_lgv3P())) return;
if (document.querySelector('.lgv3-blog-toc-side')) return;
var tocH = document.querySelector('.article.w-richtext h2#table-of-contents');
var tocList = tocH ? tocH.nextElementSibling : null;
if (!tocH || !tocList || tocList.tagName !== 'UL') return;
var contentM = document.querySelector('.content---m.lgv3-blog-grid') || document.querySelector('section.section .content---m');
if (!contentM) return;
var side = document.createElement('aside');
side.className = 'lgv3-blog-toc-side';
side.setAttribute('aria-label', 'In this article');
var h = document.createElement('h2');
h.textContent = 'In This Article';
side.appendChild(h);
side.appendChild(tocList.cloneNode(true));
contentM.appendChild(side);
}
function lgv3DedupeBlogCards() {
if (!/^\/blog(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3BlogDedup === '1') return;
var cards = document.querySelectorAll('.post-card, .blog-card, .w-dyn-item');
var seen = {};
var removed = 0;
cards.forEach(function (c) {
var h = c.querySelector('h2, h3, [data-cms-field="title"]');
var title = h ? (h.textContent || '').trim().toLowerCase() : '';
if (!title) return;
if (seen[title]) {
c.style.display = 'none';
removed++;
} else {
seen[title] = true;
}
});
if (removed > 0) document.body.dataset.lgv3BlogDedup = '1';
}
function lgv3FixDeductionsKpis() {
if (!/^\/solutions\/deductions(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3DedKpiFixed === '1') return;
var SWAPS = [
{ matchLabel: /disputed revenue resolved/i, label: 'Annual leakage recovered',     value: '1-2% of revenue' },
{ matchLabel: /backlog cleared/i,           label: 'Median time to resolution',    value: '<10 days' },
{ matchLabel: /auto-classified/i,           label: 'Auto-classification accuracy', value: '90-95%' }
];
document.querySelectorAll('.stat-cell').forEach(function (cell) {
var labelEl = cell.querySelector('.stat-label');
var valueEl = cell.querySelector('.stat-value');
if (!labelEl || !valueEl) return;
var currentLabel = (labelEl.textContent || '').trim();
var match = null;
for (var i = 0; i < SWAPS.length; i++) {
if (SWAPS[i].matchLabel.test(currentLabel)) { match = SWAPS[i]; break; }
}
if (!match) return;
labelEl.textContent = match.label;
valueEl.textContent = match.value;
});
document.body.dataset.lgv3DedKpiFixed = '1';
}
function lgv3FixCfSolutionKpis() {
if (!/^\/solutions\/cash-flow-forecasting(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3CfKpiFixed === '1') return;
var cells = document.querySelectorAll('.stat-value, .tf-stat-number, [class*=stat-value]');
cells.forEach(function (c) {
var t = (c.textContent || '').trim();
if (t === '00-00%' || t === '00%-00%' || t === '0-00%' || t === '00%') {
c.textContent = '90-95%';
} else if (t === '0-week' || t === '00-week' || t === '0 week' || t === '8-week' || t === '8 week') {
c.textContent = '13-week';
}
});
document.body.dataset.lgv3CfKpiFixed = '1';
}
function lgv3TagBody() {
var p = _lgv3P();
if (/^\/(home(---wip)?)?\/?$/.test(p)) document.body.classList.add('lgv3-home-page');
if (/^\/solutions(---wip)?\/?$/.test(p)) document.body.classList.add('lgv3-solutions-page');
if (/^\/solutions\/cash-flow-forecasting(---wip)?\/?$/.test(p)) document.body.classList.add('lgv3-cfsol-page');
}
function lgv3InjectSolutionsHeroImg() { if(_lgv3isDE())return;
if (!/^\/solutions(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3SolHeroImg === '1') return;
var hg = document.querySelector('.hero-glass');
if (!hg) return;
if (hg.querySelector('.lgv3-solutions-hero-img')) {
document.body.dataset.lgv3SolHeroImg = '1';
return;
}
var img = document.createElement('img');
img.className = 'lgv3-solutions-hero-img';
img.src = 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69e143ec714bf41a33721b7c_solutions-hero-cards.avif';
img.alt = 'Transformance solutions hero — four product cards (ClearMatch, CollectPulse, ClaimIQ, CashPulse) orbiting Vero AI agent';
img.loading = 'eager';
img.setAttribute('fetchpriority', 'high');
img.decoding = 'async';
hg.appendChild(img);
document.body.dataset.lgv3SolHeroImg = '1';
}
function lgv3FixSolutionMockups() { if(_lgv3isDE())return;
var p = _lgv3P();
if (document.body.dataset.lgv3SolMockups === '1') return;
var BASE = 'https://cdn.prod.website-files.com/684931abb239b84984296d93/';
var ASSETS = {
cashpulse:   BASE + '6a25a071e0da6bf804c8f9cb_card-cashpulse-v2.avif',
mlpipeline:  BASE + '6a259bf935ac2fefc938b05a_card-ml-pipeline-v2.avif',
scenarios:   BASE + '69df9feacd0cbc06fa2894f3_card-scenarios.avif',
creditrisk:  BASE + '69df9fe9cd0cbc06fa2894ed_card-credit-risk.avif',
dedDash:     BASE + '69df9f1d00e7328a348be73d_641b78d95aecfce017fced10a3f3b5e4_card-ded-dash.avif',
dedCase:     BASE + '69df9f1d00e7328a348be73f_card-ded-case.avif',
agentTools:  BASE + '69dfa29e8fbd5921989d7640_card-agent-tools.avif',
aiWorkflow:  BASE + '69df9effac59f55ed2162c61_card-ai-workflow.avif',
wfBuilder:   BASE + '69df9effac59f55ed2162c63_card-wf-builder.avif'
};
var SWAPS = {};
if (/^\/solutions\/cash-flow-forecasting(---wip)?\/?$/.test(p)) {
SWAPS = {
'multi-horizon engine':    ASSETS.creditrisk,
'ml pipeline':             ASSETS.mlpipeline,
'predictive forecasting':  ASSETS.cashpulse,
'scenario planning':       ASSETS.scenarios
};
document.querySelectorAll('.fb-glass').forEach(function (g) {
var eb = g.querySelector('.section-eyebrow, .eyebrow, .label');
if (!eb || !/ml pipeline/i.test(eb.textContent || '')) return;
g.classList.add('lgv3-ml-pipeline-section');
var mockup = g.querySelector('.fb-mockup-wide');
if (mockup && mockup.parentElement !== g) {
g.appendChild(mockup);
}
});
var heroImg = document.querySelector('.hero-mockup img, .hero-glass img, section.hero img[src*="cashpulse"]');
if (heroImg) {
heroImg.src = ASSETS.cashpulse;
heroImg.removeAttribute('srcset');
}
if (document.body.dataset.lgv3CfReordered !== '1') {
var sections = {};
document.querySelectorAll('section.container.section, section.container.feature, section').forEach(function (s) {
var eb = s.querySelector('.section-eyebrow, .eyebrow');
if (!eb) return;
var key = (eb.textContent || '').trim().toLowerCase();
if (!sections[key]) sections[key] = s;
});
var multiHorizon = sections['multi-horizon engine'];
var scenarioPlanning = sections['scenario planning'];
if (multiHorizon && scenarioPlanning && multiHorizon.parentNode === scenarioPlanning.parentNode) {
scenarioPlanning.parentNode.insertBefore(multiHorizon, scenarioPlanning.nextSibling);
document.body.dataset.lgv3CfReordered = '1';
}
}
document.querySelectorAll('.lgv3-ml-pipeline-section .fb-head p, .lgv3-ml-pipeline-section .fb-sub').forEach(function (p) {
if (p.dataset.lgv3MlSplit === '1') return;
var txt = (p.textContent || '').trim();
if (!/Manual models go stale/i.test(txt)) return;
var newHtml =
'Manual models go stale. Generic vendor models miss what actually moves your cash.' +
'<br><br>' +
'CashPulse runs multi-horizon, multi-entity forecasts that refit continuously, factoring in forward variables your spreadsheet can\'t see: FX, commodity prices, weather, macro indicators.' +
'<br><br>' +
'90-95%+ accuracy across short intervals and long horizons. Trace any number back to the inputs that produced it.';
p.innerHTML = newHtml;
p.dataset.lgv3MlSplit = '1';
});
} else if (/^\/solutions\/deductions(---wip)?\/?$/.test(p)) {
SWAPS = {
'auto-classification':     ASSETS.dedDash,
'auto classification':     ASSETS.dedDash
};
} else if (/^\/solutions\/vero-agent(---wip)?\/?$/.test(p)) {
SWAPS = {
'institutional memory':    ASSETS.aiWorkflow
};
} else {
return;
}
var seenContainers = new WeakSet();
document.querySelectorAll('.fb-mockup, .fb-mockup-wide, .feature-mockup').forEach(function (container) {
if (seenContainers.has(container)) return;
seenContainers.add(container);
var sec = container.closest('.fb-glass') || container.closest('section');
if (!sec) return;
var eyebrow = sec.querySelector('.section-eyebrow, .eyebrow, .label');
var eyebrowText = (eyebrow ? eyebrow.textContent : '').toLowerCase().trim();
if (!eyebrowText) return;
var matched = null;
for (var key in SWAPS) {
if (eyebrowText.indexOf(key) !== -1) { matched = SWAPS[key]; break; }
}
if (!matched) return;
var img = container.querySelector('img');
var altText = (sec.querySelector('h2')?.textContent || eyebrowText).trim();
if (img) {
img.setAttribute('src', matched);
img.removeAttribute('srcset');
} else {
var newImg = document.createElement('img');
newImg.setAttribute('src', matched);
newImg.setAttribute('alt', altText);
newImg.setAttribute('loading', 'lazy');
container.appendChild(newImg);
}
});
document.body.dataset.lgv3SolMockups = '1';
}
function lgv3SwapCfForecastCopy() {
if (!/^\/solutions\/cash-flow-forecasting(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3CfForecastCopy === '1') return;
var h2s = document.querySelectorAll('h2.section-title');
var target = null;
for (var i = 0; i < h2s.length; i++) {
if (/forecasts that see the future/i.test(h2s[i].textContent || '')) {
target = h2s[i];
break;
}
}
if (!target) return;
target.textContent = 'Forecasts that fit your business - across markets';
var head = target.closest('.fb-head-centered') || target.parentElement;
if (head) {
var p = head.querySelector('p');
if (p) {
p.textContent = "Manual models go stale. Generic vendor models miss what actually moves your cash. CashPulse runs multi-horizon, multi-entity forecasts that refit continuously, factoring in forward variables your spreadsheet can't see: FX, commodity prices, weather, macro indicators. 90-95%+ accuracy across short intervals and long horizons. Trace any number back to the inputs that produced it.";
}
}
document.body.dataset.lgv3CfForecastCopy = '1';
}
function lgv3InjectMeetingEmbed() {
if (!/^\/meeting(---wip)?\/?$/.test(_lgv3P())) return;
if (document.querySelector('.meetings-iframe-container, iframe[src*="meetings"]')) { document.body.dataset.lgv3MeetingEmbed = '1'; return; }
if (document.body.dataset.lgv3MeetingEmbed === '1') return;
document.body.dataset.lgv3MeetingEmbed = '1';
var calPanel = document.querySelector('.cal-panel');
if (calPanel) {
var placeholder = calPanel.querySelector('.cal-placeholder, .cal-placeholder-inner');
if (placeholder) {
placeholder.style.display = 'none';
}
var foot = calPanel.querySelector('.cal-panel-foot');
var iframe = document.createElement('div');
iframe.className = 'meetings-iframe-container';
iframe.setAttribute('data-src', 'https://meetings-eu1.hubspot.com/phanke?embed=true');
iframe.style.cssText = 'min-height:580px;width:100%;';
if (foot && foot.parentNode === calPanel) {
calPanel.insertBefore(iframe, foot);
} else {
calPanel.appendChild(iframe);
}
var oldScript = document.getElementById('lgv3-hubspot-meetings-script');
if (oldScript && oldScript.parentNode) oldScript.parentNode.removeChild(oldScript);
Array.prototype.forEach.call(document.querySelectorAll('script[src*="MeetingsEmbedCode"]'), function (s) {
if (s.parentNode && s !== oldScript) s.parentNode.removeChild(s);
});
var s = document.createElement('script');
s.id = 'lgv3-hubspot-meetings-script';
s.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
s.async = true;
document.body.appendChild(s);
return;
}
var heroHost = document.querySelector('.hero-glass') || document.querySelector('h1');
var insertHost = heroHost ? (heroHost.closest('section') || heroHost) : (document.querySelector('main, body'));
if (!insertHost || !insertHost.parentNode) return;
var hsBlock = document.createElement('div');
hsBlock.className = 'lgv3-meeting-block';
hsBlock.style.cssText = 'margin:24px auto;max-width:980px;padding:0 20px;';
var iframe = document.createElement('div');
iframe.className = 'meetings-iframe-container';
iframe.setAttribute('data-src', 'https://meetings-eu1.hubspot.com/phanke?embed=true');
hsBlock.appendChild(iframe);
var fallback = document.createElement('div');
fallback.className = 'tf-meeting-fallback';
fallback.setAttribute('role', 'note');
fallback.innerHTML = '' +
'<div class="tf-meeting-fallback__inner">' +
'<img class="tf-meeting-fallback__avatar" src="https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif" alt="Paul Hanke, Co-Founder of Transformance" width="56" height="56" loading="lazy">' +
'<p class="tf-meeting-fallback__copy">' +
'<span class="tf-meeting-fallback__eyebrow">DON&#39;T SEE THE CALENDAR ABOVE?</span>' +
'Some browsers (Firefox, Safari in Private mode, Brave) block embedded scheduling tools as third-party trackers. That&#39;s why it may look empty. Nothing wrong with your setup.' +
'</p>' +
'<a class="tf-meeting-fallback__btn" href="https://meetings-eu1.hubspot.com/phanke" target="_blank" rel="noopener noreferrer">Book a call with Paul <span aria-hidden="true" class="tf-meeting-fallback__arrow">→</span></a>' +
'</div>';
hsBlock.appendChild(fallback);
insertHost.parentNode.insertBefore(hsBlock, insertHost.nextSibling);
if (!document.getElementById('lgv3-hubspot-meetings-script')) {
var s = document.createElement('script');
s.id = 'lgv3-hubspot-meetings-script';
s.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
s.async = true;
document.body.appendChild(s);
}
if (!document.getElementById('lgv3-meeting-fallback-style')) {
var style = document.createElement('style');
style.id = 'lgv3-meeting-fallback-style';
style.textContent = '.tf-meeting-fallback{margin:8px auto 0;max-width:720px;padding:14px 18px;border:1px solid #E5E5E5;border-radius:12px;background:#F6F4F1;font-family:Geist,-apple-system,system-ui,Segoe UI,Roboto,sans-serif;box-sizing:border-box}.tf-meeting-fallback *{box-sizing:border-box}.tf-meeting-fallback__inner{display:flex;gap:16px;align-items:center;justify-content:space-between;flex-wrap:wrap}.tf-meeting-fallback__avatar{width:56px;height:56px;border-radius:50%;object-fit:cover;flex:0 0 auto;box-shadow:0 0 0 2px #FFFFFF,0 1px 3px rgba(0,0,0,.08);display:block}.tf-meeting-fallback__copy{font-size:13px;line-height:1.55;color:#666;margin:0;flex:1 1 320px}.tf-meeting-fallback__eyebrow{display:block;font-family:Geist Mono,ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;letter-spacing:3px;color:#999;margin-bottom:4px;font-weight:400;text-transform:uppercase}.tf-meeting-fallback__btn{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:#0A0A0A;color:#fff;border-radius:10px;font-family:Geist,sans-serif;font-weight:500;font-size:14px;text-decoration:none;white-space:nowrap;transition:background .2s ease,transform .08s ease;flex:0 0 auto}.tf-meeting-fallback__btn:hover{background:#1A1A1A}.tf-meeting-fallback__btn:active{transform:translateY(1px)}.tf-meeting-fallback__arrow{display:inline-block;transition:transform .2s ease}.tf-meeting-fallback__btn:hover .tf-meeting-fallback__arrow{transform:translateX(3px)}@media (max-width:560px){.tf-meeting-fallback__inner{flex-direction:column;align-items:center;text-align:center}.tf-meeting-fallback__copy{flex:1 1 auto}.tf-meeting-fallback__avatar{width:52px;height:52px}.tf-meeting-fallback__btn{justify-content:center;width:100%}}';
document.head.appendChild(style);
}
var embedHosts = document.querySelectorAll('.w-embed');
if (embedHosts.length > 1) {
var largest = null, largestSize = 0;
for (var i = 0; i < embedHosts.length; i++) {
var e = embedHosts[i];
var size = (e.innerHTML || '').length;
if (size > largestSize && size > 500) {
largestSize = size;
largest = e;
}
}
if (largest && largest !== hsBlock) {
largest.style.display = 'none';
}
}
}
function lgv3InjectBlogFounderPhotos() {
if (!/^\/blog(---wip)?\/?$/.test(_lgv3P())) return;
var PIC = {
paul: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/68494720f0211b2372893faf_Profile%20Picture.avif',
nick: 'https://cdn.prod.website-files.com/684931abb239b84984296d93/685287db4beca520c820d9c5_Profile%20Nick%20Parenti.webp'
};
var swap = function (avatar) {
if (avatar.dataset.lgv3FounderInjected === '1') return;
var authorMini = avatar.closest('.author-mini') || avatar.parentNode;
if (!authorMini) return;
var nameEl = authorMini.querySelector('[data-cms-field="author-name"]');
var rawName = nameEl ? (nameEl.textContent || '').trim().toLowerCase() : '';
var url = null;
if (rawName.indexOf('paul') !== -1) url = PIC.paul;
else if (rawName.indexOf('nick') !== -1) url = PIC.nick;
if (!url) return;
var img = document.createElement('img');
img.src = url;
img.alt = nameEl ? nameEl.textContent.trim() : 'author';
img.loading = 'lazy';
img.decoding = 'async';
img.style.cssText = 'width:28px;height:28px;border-radius:50%;object-fit:cover;display:inline-block;vertical-align:middle;background:#f0e8de;flex:0 0 auto;';
avatar.innerHTML = '';
avatar.appendChild(img);
avatar.style.cssText = 'display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:transparent;padding:0;';
avatar.dataset.lgv3FounderInjected = '1';
};
document.querySelectorAll('.author-mini .avatar, .pc-meta .avatar').forEach(swap);
if (!window.__lgv3BlogFounderMO) {
try {
var mo = new MutationObserver(function (muts) {
muts.forEach(function (m) {
m.addedNodes.forEach(function (n) {
if (n.nodeType !== 1) return;
if (n.classList && n.classList.contains('avatar')) swap(n);
else if (n.querySelectorAll) n.querySelectorAll('.avatar').forEach(swap);
});
});
});
var host = document.querySelector('.blog-grid, .blog-cards, body') || document.body;
mo.observe(host, { childList: true, subtree: true });
window.__lgv3BlogFounderMO = mo;
} catch (e) {  }
}
}
function lgv3FixContactSubmitText() {
if (!/^\/contact(---wip)?\/?$/.test(_lgv3P())) return;
var btn = document.querySelector('form button[type="submit"]');
if (!btn) return;
if (btn.dataset.lgv3SubmitRelabeled === '1') return;
if (btn.innerHTML.indexOf('Book a Call') !== -1) {
btn.innerHTML = btn.innerHTML.replace(/Book a Call/g, 'Submit');
}
btn.dataset.lgv3SubmitRelabeled = '1';
}
function lgv3FixCfToolExcelAnchor() {
if (!/^\/tools\/cash-flow-forecasting-tool(---wip)?\/?$/.test(_lgv3P())) return;
var btn = document.querySelector('a.btn-primary.btn-grad[href="#excel-toolkit"]');
if (!btn) return;
if (btn.dataset.lgv3CfAnchorFixed === '1') return;
btn.dataset.lgv3CfAnchorFixed = '1';
btn.addEventListener('click', function (e) {
var target = document.getElementById('excel');
if (!target) {
target = Array.prototype.find.call(document.querySelectorAll('h2, h3'), function (h) {
var t = (h.textContent || '').toLowerCase();
return t.indexOf('peek at what is inside') !== -1 || t.indexOf('13-week cash flow') !== -1;
});
}
if (target) {
e.preventDefault();
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
history.replaceState(null, '', '#excel');
}
});
}
function lgv3Inject404CTAs() {
if (!/^\/404(---wip)?\/?$/.test(_lgv3P()) && document.documentElement.getAttribute('data-wf-page') !== '684931abb239b84984296eee') return;
if (document.body.dataset.lgv3404Ctas === '1') return;
document.body.dataset.lgv3404Ctas = '1';
var ICONS = {
home: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 2l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
solutions: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
blog: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
insights: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m12.728 0a8 8 0 1 1-11.314 0 8 8 0 0 1 11.314 0z"/><path d="M9 17h6v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/></svg>',
contact: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
meeting: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>',
};
var LINKS = [
{ href: '/', label: 'Home', icon: 'home' },
{ href: '/solutions', label: 'Solutions', icon: 'solutions' },
{ href: '/blog', label: 'Blog', icon: 'blog' },
{ href: '/meeting', label: 'Meeting', icon: 'meeting' },
];
var bodyEmbed = null;
var embeds = document.querySelectorAll('.w-embed');
for (var i = 0; i < embeds.length; i++) {
var html = embeds[i].innerHTML || '';
if (/popular pages/i.test(html) && embeds[i].querySelectorAll('a').length >= 4) {
bodyEmbed = embeds[i];
break;
}
}
var container = document.createElement('div');
container.className = 'lgv3-404-ctas';
container.style.cssText = 'display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;max-width:880px;margin:24px auto 0;padding:0 20px;';
var headWrap = document.createElement('div');
headWrap.className = 'lgv3-404-cta-head';
headWrap.style.cssText = 'max-width:880px;margin:48px auto 0;padding:0 20px;text-align:center;font-family:Geist,-apple-system,system-ui,Segoe UI,Roboto,sans-serif;';
headWrap.innerHTML =
'<div style="font:600 22px/1.2 Geist,sans-serif;color:#0a0a0a;margin:0 0 6px 0;">Popular pages</div>' +
'<div style="font:400 15px/1.4 Geist,sans-serif;color:#5e5e5e;">Try one of these instead.</div>';
LINKS.forEach(function (l) {
var a = document.createElement('a');
a.href = l.href;
a.className = 'lgv3-404-cta';
a.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:18px 16px;border-radius:14px;background:rgba(255,255,255,0.55);backdrop-filter:blur(10px);border:1px solid rgba(10,10,10,0.08);color:#0a0a0a;text-decoration:none;font:500 14px/1.2 Geist,system-ui,sans-serif;letter-spacing:0.02em;transition:transform 200ms cubic-bezier(0.23,1,0.32,1),box-shadow 200ms cubic-bezier(0.23,1,0.32,1),border-color 200ms;';
a.innerHTML = '<span style="color:#FF5043;display:inline-flex;align-items:center;justify-content:center;">' + ICONS[l.icon] + '</span><span>' + l.label + '</span>';
a.addEventListener('mouseenter', function () {
a.style.transform = 'translateY(-2px)';
a.style.boxShadow = '0 12px 28px rgba(0,0,0,0.08)';
a.style.borderColor = 'rgba(255,80,67,0.5)';
});
a.addEventListener('mouseleave', function () {
a.style.transform = 'translateY(0)';
a.style.boxShadow = 'none';
a.style.borderColor = 'rgba(10,10,10,0.08)';
});
container.appendChild(a);
});
if (bodyEmbed) {
bodyEmbed.innerHTML = '';
bodyEmbed.appendChild(headWrap);
bodyEmbed.appendChild(container);
document.body.dataset.lgv3404Ctas = '1';
if (!document.getElementById('lgv3-404-mobile-style')) {
var style = document.createElement('style');
style.id = 'lgv3-404-mobile-style';
style.textContent = '@media (max-width: 640px){.lgv3-404-ctas{grid-template-columns:repeat(2,minmax(0,1fr)) !important;}}';
document.head.appendChild(style);
}
return;
}
var hero = document.querySelector('.hero-glass, h1, main, body');
if (hero && hero.parentNode) {
if (hero.tagName === 'H1') {
hero.parentNode.insertBefore(headWrap, hero.nextSibling);
headWrap.parentNode.insertBefore(container, headWrap.nextSibling);
} else {
hero.appendChild(headWrap);
hero.appendChild(container);
}
}
if (!document.getElementById('lgv3-404-mobile-style')) {
var style = document.createElement('style');
style.id = 'lgv3-404-mobile-style';
style.textContent = '@media (max-width: 640px){.lgv3-404-ctas{grid-template-columns:repeat(2,minmax(0,1fr)) !important;}}';
document.head.appendChild(style);
}
}
function lgv3HideDuplicateNav() {
if (document.body.dataset.lgv3NavDeduped === '1') return;
var navScopes = document.querySelectorAll('.navbar, nav, .nav-buttons, .w-nav, header');
if (!navScopes.length) navScopes = [document.body];
var labels = ['login', 'get started'];
var hidden = 0;
for (var s = 0; s < navScopes.length; s++) {
var scope = navScopes[s];
for (var l = 0; l < labels.length; l++) {
var seen = false;
var anchors = scope.querySelectorAll('a, button');
for (var i = 0; i < anchors.length; i++) {
var el = anchors[i];
var txt = (el.textContent || '').trim().toLowerCase();
if (txt !== labels[l]) continue;
if (!seen) { seen = true; continue; }
el.setAttribute('aria-hidden', 'true');
el.style.display = 'none';
hidden++;
}
}
}
document.body.dataset.lgv3NavDeduped = '1';
}
function lgv3FixMojibake() {
if (document.body.dataset.lgv3MojibakeFixed === '1') return;
var imgs = document.querySelectorAll('img[alt*="Ebersp"]');
for (var i = 0; i < imgs.length; i++) {
var img = imgs[i];
var alt = img.getAttribute('alt') || '';
if (alt.indexOf('�') !== -1 || alt === 'Ebersp�cher') {
img.setAttribute('alt', 'Eberspächer');
}
}
document.body.dataset.lgv3MojibakeFixed = '1';
}
function lgv3WireContactForm() {
if (!/^\/contact(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3ContactFormWired === '1') return;
var form = document.querySelector('form.form-grid[action="#"]') ||
document.querySelector('form[action="#"][method="post"]');
if (!form) return;
if (!form.querySelector('input[name="name"], input[name="Name"]')) return;
if (!form.querySelector('input[name="email"], input[name="Email"]')) return;
var WF_ID = 'wf-form-Contact-WIP';
var WF_NAME = 'Contact WIP';
form.id = WF_ID;
form.setAttribute('data-name', WF_NAME);
form.setAttribute('name', WF_ID);
form.setAttribute('method', 'get');
form.setAttribute('action', '');
form.removeAttribute('novalidate');
var wfPage = document.documentElement.getAttribute('data-wf-page');
if (wfPage) form.setAttribute('data-wf-page-id', wfPage);
form.setAttribute('data-wf-element-id', 'lgv3-contact-001');
form.setAttribute('data-turnstile-sitekey', '0x4AAAAAAAQTptj2So4dx43e');
form.setAttribute('aria-label', WF_NAME);
var p = form.parentNode;
if (p && !p.classList.contains('w-form')) {
var wrap = document.createElement('div');
wrap.className = 'w-form';
p.insertBefore(wrap, form);
wrap.appendChild(form);
var done = document.createElement('div');
done.className = 'w-form-done';
done.setAttribute('tabindex', '-1');
done.setAttribute('role', 'region');
done.setAttribute('aria-label', 'Email Form success');
done.style.display = 'none';
done.style.padding = '20px';
done.style.background = 'rgba(255,255,255,0.6)';
done.style.borderRadius = '12px';
done.style.marginTop = '16px';
done.innerHTML = '<div><strong>Thanks. We got it.</strong> We will follow up within one business day.</div>';
wrap.appendChild(done);
var fail = document.createElement('div');
fail.className = 'w-form-fail';
fail.setAttribute('tabindex', '-1');
fail.setAttribute('role', 'region');
fail.setAttribute('aria-label', 'Email Form failure');
fail.style.display = 'none';
fail.style.padding = '20px';
fail.style.background = 'rgba(255,80,67,0.08)';
fail.style.borderRadius = '12px';
fail.style.marginTop = '16px';
fail.innerHTML = '<div>Something went wrong. Email <a href="mailto:support@transformance.ai" style="text-decoration:underline">support@transformance.ai</a> directly and we will reply within one business day.</div>';
wrap.appendChild(fail);
}
try {
if (window.Webflow && typeof window.Webflow.require === 'function') {
var forms = window.Webflow.require('forms');
if (forms && typeof forms.ready === 'function') forms.ready();
} else if (window.Webflow && typeof window.Webflow.ready === 'function') {
window.Webflow.ready();
}
} catch (e) {  }
document.body.dataset.lgv3ContactFormWired = '1';
}
function lgv3FixDeadHtmlLinks() {
if (document.body.dataset.lgv3HtmlLinksFixed === '1') return;
var MAP = {
'home.html':              '/',
'about.html':             '/about',
'contact.html':           '/contact',
'meeting.html':           '/meeting',
'blog.html':              '/blog',
'glossary.html':          '/glossary',
'customer-stories.html':  '/customer-stories',
'privacy.html':           '/privacy',
'imprint.html':           '/imprint',
'cash-application.html':  '/solutions/cash-application',
'collections.html':       '/solutions/collections',
'deductions.html':        '/solutions/deductions',
'cashflow.html':          '/solutions/cash-flow-forecasting',
'cash-flow.html':         '/solutions/cash-flow-forecasting',
'cash-flow-forecasting.html': '/solutions/cash-flow-forecasting',
'vero.html':              '/solutions/vero-agent',
'vero-agent.html':        '/solutions/vero-agent',
'solutions.html':         '/solutions',
'dso-calculator.html':    '/tools/dso-calculator',
'cashflow-tool.html':     '/tools/cash-flow-forecasting-tool',
'cash-flow-forecasting-tool.html': '/tools/cash-flow-forecasting-tool',
'best-accounts-receivable-software.html': '/best-accounts-receivable-software',
'compare-billtrust.html': '/comparison/transformance-vs-billtrust',
'compare-highradius.html': '/comparison/transformance-vs-highradius',
'blog-post.html':         '/blog'
};
var anchors = document.querySelectorAll('a[href]');
var fixed = 0;
for (var i = 0; i < anchors.length; i++) {
var a = anchors[i];
var href = a.getAttribute('href') || '';
if (!href || href.indexOf('#') === 0 || /^(https?:|mailto:|tel:|javascript:)/.test(href)) continue;
var key = href.replace(/^\.?\/?/, '').split('/').pop().toLowerCase();
if (MAP[key]) {
a.setAttribute('href', MAP[key]);
fixed++;
} else if (/\.html(\?|#|$)/i.test(href)) {
a.setAttribute('href', '/');
fixed++;
} else if (href === '#') {
a.setAttribute('data-lgv3-dead-anchor', '1');
}
}
if (fixed > 0) document.body.dataset.lgv3HtmlLinksFixed = '1';
}
function lgv3FixDsoLogoSrc() {
if (document.body.dataset.lgv3DsoLogoFixed === '1') return;
var imgs = document.querySelectorAll('img[src*="logo-transformance-black"]');
var CDN_URL = 'https://cdn.prod.website-files.com/684931abb239b84984296d93/69e24f0552b3cfb851b64c4b_transformance-lockup-black.svg';
for (var i = 0; i < imgs.length; i++) {
var src = imgs[i].getAttribute('src') || '';
if (!/^https?:/.test(src)) {
imgs[i].setAttribute('src', CDN_URL);
}
}
document.body.dataset.lgv3DsoLogoFixed = '1';
}
function lgv3FixBlogCounter() {
if (!/^\/blog(---wip)?\/?$/.test(_lgv3P())) return;
var cards = document.querySelectorAll('.post-card, article.post-card, article.feat-glass, .blog-card');
var visibleSet = {}, totalSet = {};
Array.prototype.forEach.call(cards, function (c) {
var h = c.querySelector('h1, h2, h3, h4, h5, .heading-h5, [data-cms-field="title"]');
var key = h ? (h.textContent || '').trim().toLowerCase() : '';
if (!key) return;
totalSet[key] = true;
if (c.style.display !== 'none' && c.offsetParent !== null) visibleSet[key] = true;
});
var visible = Object.keys(visibleSet).length;
var total = Object.keys(totalSet).length;
var hosts = document.querySelectorAll('[data-lgv3-blog-count]');
if (hosts.length === 0) {
var seeded = [];
document.querySelectorAll('*').forEach(function (el) {
if (el.children.length > 0) return;
var t = el.textContent || '';
if (/\[VISIBLE-COUNT\]/i.test(t) || /\[TOTAL-COUNT\]/i.test(t)) {
el.setAttribute('data-lgv3-blog-count', '1');
el.setAttribute('data-lgv3-blog-count-tpl', t);
seeded.push(el);
}
});
hosts = seeded;
}
Array.prototype.forEach.call(hosts, function (el) {
var tpl = el.getAttribute('data-lgv3-blog-count-tpl') || el.textContent || '';
el.textContent = tpl
.replace(/\[VISIBLE-COUNT\]/gi, visible)
.replace(/\[TOTAL-COUNT\]/gi, total);
});
}
function lgv3Restore404Heading() {
if (!/^\/404(---wip)?\/?$/.test(_lgv3P()) && document.documentElement.getAttribute('data-wf-page') !== '684931abb239b84984296eee') return;
if (document.body.dataset.lgv3404HeadingFixed === '1') return;
if (document.querySelector('.lgv3-404-headline')) return;
var heading = document.createElement('div');
heading.className = 'lgv3-404-headline';
heading.style.cssText = 'text-align:center;margin:64px auto 0;padding:0 20px;font-family:Geist,-apple-system,system-ui,Segoe UI,Roboto,sans-serif;max-width:880px;';
heading.innerHTML =
'<h1 style="font:600 clamp(2.5rem,5vw,4rem)/1.05 Geist,sans-serif;color:#0a0a0a;margin:0 0 12px 0;letter-spacing:-0.02em;">' +
'This page <span style="background:linear-gradient(90deg,#FF8308 0%,#FF5043 55%,#392BD5 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:#FF5043;">wandered</span> off.' +
'</h1>' +
'<p style="font:400 17px/1.55 Geist,sans-serif;color:#5e5e5e;margin:0 0 24px 0;">It happens. The page you are looking for does not exist or has been moved.</p>';
var ctas = document.querySelector('.lgv3-404-cta-head');
if (ctas && ctas.parentNode) {
ctas.parentNode.insertBefore(heading, ctas);
} else {
var hero = document.querySelector('main, body');
if (hero) hero.insertBefore(heading, hero.firstChild);
}
document.body.dataset.lgv3404HeadingFixed = '1';
}
function lgv3FixBestArTextNoise() {
if (!/^\/(comparison\/)?best-accounts-receivable-software(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3BestArTextFixed === '1') return;
var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
var nodes = [];
var n;
while ((n = walker.nextNode())) {
if (n.nodeValue && (/—/.test(n.nodeValue) || /\[INFERRED\]/i.test(n.nodeValue))) {
nodes.push(n);
}
}
nodes.forEach(function (n) {
n.nodeValue = n.nodeValue
.replace(/—/g, ',')
.replace(/\s*\[INFERRED\]\s*/gi, ' ');
});
document.body.dataset.lgv3BestArTextFixed = '1';
}
function lgv3FixHomeKpiWeeks() {
if (!/^\/(home(---wip)?)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3HomeKpiFixed === '1') return;
var cells = document.querySelectorAll('.stat-value');
cells.forEach(function (c) {
var t = (c.textContent || '').trim();
if (t === 'Weeks' || t === 'weeks') {
c.textContent = '4 to 8';
}
});
document.body.dataset.lgv3HomeKpiFixed = '1';
}
function lgv3FixCustomerStoriesLazy() {
if (!/^\/customer-stories(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3CsLazyFixed === '1') return;
var imgs = document.querySelectorAll('.customer-card img, [class*="story-card"] img, [class*="customer-card"] img, .featured-card img, [class*="featured"] img');
imgs.forEach(function (img) { img.setAttribute('loading', 'eager'); });
document.body.dataset.lgv3CsLazyFixed = '1';
}
function lgv3Fix404FooterDeadAnchors() {
if (!/^\/404(---wip)?\/?$/.test(_lgv3P()) && document.documentElement.getAttribute('data-wf-page') !== '684931abb239b84984296eee') return;
if (document.body.dataset.lgv3404FooterFixed === '1') return;
var footerAs = document.querySelectorAll('footer a, .footer a, [class*="footer"] a');
footerAs.forEach(function (a) {
var text = (a.textContent || '').trim();
var href = a.getAttribute('href') || '';
if (text === 'Home' && (href === '#' || href === '')) {
a.setAttribute('href', '/');
} else if (href === '#') {
a.style.display = 'none';
}
});
document.body.dataset.lgv3404FooterFixed = '1';
}
function lgv3FixDeadCTAs() {
if (document.body.dataset.lgv3CtasFixed === '1') return;
var fixed = 0;
var anchors = document.querySelectorAll('a');
for (var i = 0; i < anchors.length; i++) {
var a = anchors[i];
var aTxt = (a.textContent || '').trim().toLowerCase();
if (aTxt.indexOf('book a call') === -1) continue;
var href = a.getAttribute('href') || '';
var brokenHref = href === '' || href === '#' || /\.html(\?|#|$)/i.test(href);
if (brokenHref) {
a.setAttribute('href', '/meeting');
fixed++;
}
}
var buttons = document.querySelectorAll('button');
for (var j = 0; j < buttons.length; j++) {
var b = buttons[j];
if (b.dataset.lgv3CtaBound === '1') continue;
var bType = (b.getAttribute('type') || '').toLowerCase();
if (bType === 'submit') continue;
if (b.closest && b.closest('form')) continue;
var bTxt = (b.textContent || '').trim().toLowerCase();
if (bTxt.indexOf('book a call') === -1) continue;
b.dataset.lgv3CtaBound = '1';
b.addEventListener('click', function (e) {
e.preventDefault();
window.location.href = '/meeting';
});
b.style.cursor = 'pointer';
fixed++;
}
if (fixed > 0) document.body.dataset.lgv3CtasFixed = '1';
}
function lgv3InjectDsoExcelForm() {
if (!/^\/tools\/dso-calculator(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3DsoExcelForm === '1') return;
if (!document.getElementById('revenue') || !document.getElementById('industry')) return;
var insertHost = null;
var benchTbody = document.getElementById('bench-tbody');
if (benchTbody) insertHost = benchTbody.closest('section, .container.section, .container');
if (!insertHost) {
var sections = document.querySelectorAll('section, .container.section');
for (var i = 0; i < sections.length; i++) {
var h = sections[i].querySelector('h1, h2, h3');
var ht = h ? (h.textContent || '').toLowerCase() : '';
if (ht.indexOf('questions, answered') !== -1 || ht.indexOf('questions answered') !== -1) {
var wrap0 = lgv3BuildDsoFormWrap();
sections[i].parentNode.insertBefore(wrap0, sections[i]);
lgv3WireDsoFormInputs(wrap0);
document.body.dataset.lgv3DsoExcelForm = '1';
lgv3ReinitWebflowForms();
return;
}
}
}
if (!insertHost) {
insertHost = document.body;
}
var wrap = lgv3BuildDsoFormWrap();
insertHost.appendChild(wrap);
lgv3WireDsoFormInputs(wrap);
document.body.dataset.lgv3DsoExcelForm = '1';
lgv3ReinitWebflowForms();
}
function lgv3BuildDsoFormWrap() {
var wrap = document.createElement('div');
wrap.className = 'w-form lgv3-excel-form-wrap lgv3-excel-rich';
wrap.style.cssText = 'max-width:1080px;margin:64px auto;padding:0 24px;font-family:Geist,-apple-system,system-ui,Segoe UI,Roboto,sans-serif;';
var FAN = [
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69eb8c31e3a4b8fa9eba9a77_dso-excel-preview-1.png',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69eb8c39410c59f612c288be_dso-excel-preview-2.png',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69eb8c3d81582b6e2bd6cb67_dso-excel-preview-3.png',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69eb8c40bc21ba1c62798bea_dso-excel-preview-4.png',
'https://cdn.prod.website-files.com/684931abb239b84984296d93/69eb8c4314049ad78a52b9ba_dso-excel-preview-5.png'
];
var _de = _lgv3isDE();
var ALTS = _de ? ['Vorschau Tab DSO', 'Vorschau Branchen-Benchmarks', 'Vorschau Altersstruktur', 'Vorschau Szenarien', 'Vorschau 90-Tage-Aktionsplan'] : ['Your DSO tab preview', 'Industry benchmarks preview', 'Aging breakdown preview', 'Cash freed scenarios preview', '90-day action playbook preview'];
var fanHtml = '<div class="lgv3-fan" aria-label="DSO Excel preview, 5 tabs">';
for (var i = 0; i < FAN.length; i++) {
fanHtml += '<div class="lgv3-fan-card lgv3-fan-card-' + (i + 1) + '"><img src="' + FAN[i] + '" alt="' + ALTS[i] + '" loading="lazy"></div>';
}
fanHtml += '</div>';
wrap.innerHTML =
'<header style="text-align:center;max-width:780px;margin:0 auto 28px;">' +
'<h2 class="lgv3-fan-heading" style="margin:0 0 12px 0;font:600 clamp(1.75rem, 3vw, 2.25rem)/1.15 Geist,sans-serif;color:#0a0a0a;letter-spacing:-0.01em;">' + (_de ? "Ein DSO-Excel mit 5 Tabs: Benchmarks, Formeln und 90-Tage-Aktionsplan" : "A 5-tab DSO Excel with benchmarks, formulas, and a 90-day playbook") + '</h2>' +
'<p style="margin:0;font:400 16px/1.5 Geist,sans-serif;color:#5e5e5e;">' + (_de ? "Diagramme, Benchmarks, Altersstruktur und ein 90-Tage-Aktionsplan. Bearbeitbar, teilbar, ohne Verkaufsgeschwätz." : "Charts, benchmarks, aging breakdown, and a 90-day playbook — editable, share-ready, no pitch.") + '</p>' +
'</header>' +
fanHtml +
'<div class="lgv3-excel-card" style="margin-top:48px;background:#0a0a0a;color:#fff;border-radius:20px;padding:clamp(28px, 4vw, 44px);display:grid;grid-template-columns:minmax(0, 1.05fr) minmax(0, 1fr);gap:clamp(28px, 4vw, 56px);align-items:start;">' +
'<div>' +
'<h3 style="margin:0 0 10px 0;font:600 26px/1.2 Geist,sans-serif;color:#fff;">' + (_de ? "Ihre vollständige DSO-Auswertung als Excel" : "Get your full DSO breakdown as an Excel") + '</h3>' +
'<p style="margin:0 0 22px 0;font:400 15px/1.55 Geist,sans-serif;color:rgba(255,255,255,0.7);">' + (_de ? "Bearbeitbare Formeln, Branchen-Benchmarks und ein 90-Tage-Aktionsplan, im Branding zum Teilen mit Ihrem CFO." : "Editable formulas, industry benchmarks, and a 90-day action playbook — branded to share with your CFO.") + '</p>' +
'<ul class="lgv3-excel-bullets" style="list-style:none;padding:0;margin:0;display:grid;gap:10px;">' +
(_de ? ('<li>Bearbeitbare Formeln, tragen Sie Ihre Zahlen ein</li>' + '<li>Benchmark-Tabelle über 18 Branchensegmente</li>' + '<li>Altersstruktur-Vorlage mit gewichtetem DSO</li>' + '<li>Freigesetzte-Liquidität-Szenarien mit Diagramm</li>' + '<li>90-Tage-Aktionsplan zur DSO-Senkung</li>') : ('<li>Editable formulas — plug in your numbers</li>' + '<li>Benchmark table across 18 industry segments</li>' + '<li>Aging-bucket template with weighted DSO</li>' + '<li>Cash-freed scenarios with chart</li>' + '<li>90-day DSO reduction action playbook</li>')) +
'</ul>' +
'</div>' +
'<form id="wf-form-DSO-Excel" name="wf-form-DSO-Excel" data-name="DSO Excel WIP" method="get" action="" class="lgv3-excel-form" aria-label="DSO Excel WIP" data-wf-element-id="lgv3-dso-excel-001" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" style="display:flex;flex-direction:column;gap:14px;">' +
'<input type="text" class="w-input lgv3-rich-input" maxlength="256" name="firstname" data-name="firstname" placeholder="Jane Doe" id="lgv3-dso-firstname" required style="padding:16px 18px;border:none;border-radius:12px;font:400 15px/1.4 Geist,sans-serif;background:#fff;color:#0a0a0a;">' +
'<input type="email" class="w-input lgv3-rich-input" maxlength="256" name="email" data-name="email" placeholder="you@company.com" id="lgv3-dso-email" required style="padding:16px 18px;border:none;border-radius:12px;font:400 15px/1.4 Geist,sans-serif;background:#fff;color:#0a0a0a;">' +
'<input type="hidden" name="industry" id="lgv3-dso-industry" value="">' +
'<input type="hidden" name="industry_benchmark_days" id="lgv3-dso-bench" value="">' +
'<input type="hidden" name="revenue" id="lgv3-dso-revenue" value="">' +
'<input type="hidden" name="ar_balance" id="lgv3-dso-ar" value="">' +
'<input type="hidden" name="computed_dso" id="lgv3-dso-computed" value="">' +
'<button type="submit" class="w-button lgv3-grad-btn" style="display:inline-block;padding:16px 24px;background:linear-gradient(90deg, #FF8308 0%, #FF5043 50%, #392BD5 100%);color:#fff;border:none;border-radius:999px;font:600 16px/1.2 Geist,sans-serif;cursor:pointer;letter-spacing:0.01em;width:100%;">' + (_de ? "Kostenlos herunterladen" : "Free Download") + ' &rarr;</button>' +
'<p style="margin:0;font:400 12px/1.4 Geist,sans-serif;color:rgba(255,255,255,0.55);">' + (_de ? "Mit dem Download erklären Sie sich einverstanden, Insights und Produkt-Updates von Transformance zu erhalten." : "By downloading you agree to receive insights and product updates from Transformance.") + '</p>' +
'</form>' +
'</div>' +
'<div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form success" style="display:none;padding:24px;background:#fff;color:#0a0a0a;border-radius:16px;margin-top:20px;text-align:center;">' +
'<div><strong>Thanks. Your Excel is on the way.</strong></div>' +
'</div>' +
'<div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure" style="display:none;padding:24px;background:rgba(255,80,67,0.08);border-radius:16px;margin-top:20px;text-align:center;">' +
'<div>Something went wrong. Email <a href="mailto:support@transformance.ai" style="text-decoration:underline;color:#0a0a0a;">support@transformance.ai</a> for the template.</div>' +
'</div>';
var formEl = wrap.querySelector('form');
var wfPage = document.documentElement.getAttribute('data-wf-page');
if (formEl && wfPage) {
formEl.setAttribute('data-wf-page-id', wfPage);
}
return wrap;
}
function lgv3WireDsoFormInputs(wrap) {
function sync() {
var revEl = document.getElementById('revenue');
var arEl = document.getElementById('ar');
var indEl = document.getElementById('industry');
var benchEl = document.getElementById('m-bench');
var dsoEl = document.getElementById('m-dso');
var hRev = wrap.querySelector('#lgv3-dso-revenue');
var hAr  = wrap.querySelector('#lgv3-dso-ar');
var hInd = wrap.querySelector('#lgv3-dso-industry');
var hBench = wrap.querySelector('#lgv3-dso-bench');
var hComp = wrap.querySelector('#lgv3-dso-computed');
if (hRev && revEl) hRev.value = revEl.value || '';
if (hAr && arEl) hAr.value = arEl.value || '';
if (hInd && indEl) {
var opt = indEl.options[indEl.selectedIndex];
hInd.value = opt ? opt.textContent.trim() : indEl.value;
}
if (hBench && benchEl) hBench.value = (benchEl.textContent || '').trim();
if (hComp && dsoEl) hComp.value = (dsoEl.textContent || '').trim();
}
['revenue','ar','industry','cur','period'].forEach(function (id) {
var el = document.getElementById(id);
if (!el) return;
el.addEventListener('input', sync);
el.addEventListener('change', sync);
});
sync();
var form = wrap.querySelector('#wf-form-DSO-Excel');
if (form) form.addEventListener('submit', sync, true);
}
function lgv3InjectCfExcelForm() {
if (!/^\/tools\/cash-flow-forecasting-tool(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3CfExcelForm === '1') return;
if (!document.getElementById('cash') || !document.getElementById('dso')) return;
var fakeForm = document.querySelector('form.excel-form');
var container = fakeForm ? (fakeForm.parentNode || fakeForm.closest('.excel-download, #download-form')) : null;
if (!container) container = document.getElementById('download-form');
if (!container) {
var sections2 = document.querySelectorAll('section, .container.section');
for (var i = 0; i < sections2.length; i++) {
var h = sections2[i].querySelector('h1, h2, h3');
var ht = h ? (h.textContent || '').toLowerCase() : '';
if (ht.indexOf('questions') !== -1 || ht.indexOf('faq') !== -1) {
container = sections2[i].parentNode;
break;
}
}
}
if (!container) container = document.body;
if (fakeForm) {
fakeForm.style.display = 'none';
fakeForm.setAttribute('aria-hidden', 'true');
fakeForm.setAttribute('data-lgv3-fake-hidden', '1');
}
var wrap = lgv3BuildCfFormWrap();
if (fakeForm && fakeForm.parentNode === container) {
container.insertBefore(wrap, fakeForm.nextSibling);
} else if (fakeForm && fakeForm.parentNode) {
fakeForm.parentNode.insertBefore(wrap, fakeForm.nextSibling);
} else {
container.appendChild(wrap);
}
lgv3WireCfFormInputs(wrap);
document.body.dataset.lgv3CfExcelForm = '1';
lgv3ReinitWebflowForms();
}
function lgv3BuildCfFormWrap() {
var wrap = document.createElement('div');
wrap.className = 'w-form lgv3-excel-form-wrap';
wrap.style.cssText = 'max-width:560px;margin:24px auto;padding:32px 28px;background:rgba(255,255,255,0.6);backdrop-filter:blur(10px);border:1px solid rgba(10,10,10,0.08);border-radius:16px;font-family:Geist,-apple-system,system-ui,Segoe UI,Roboto,sans-serif;';
wrap.innerHTML =
'<h3 style="margin:0 0 8px 0;font:600 22px/1.2 Geist,sans-serif;color:#0a0a0a;">Get the 13-week cash flow Excel</h3>' +
'<p style="margin:0 0 20px 0;font:400 14px/1.5 Geist,sans-serif;color:#5e5e5e;">We will email you the editable model with your current inputs pre-loaded.</p>' +
'<form id="wf-form-CF-Excel" name="wf-form-CF-Excel" data-name="CF Excel WIP" method="get" action="" class="lgv3-excel-form cf-gate-form" aria-label="CF Excel WIP" data-wf-element-id="lgv3-cf-excel-001" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">' +
'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">' +
'<input type="text" class="w-input" maxlength="256" name="firstname" data-name="firstname" placeholder="First name" id="lgv3-cf-firstname" required style="padding:12px 14px;border:1px solid rgba(10,10,10,0.15);border-radius:10px;font:400 14px/1.4 Geist,sans-serif;background:#fff;color:#0a0a0a;">' +
'<input type="email" class="w-input" maxlength="256" name="email" data-name="email" placeholder="Work email" id="lgv3-cf-email" required style="padding:12px 14px;border:1px solid rgba(10,10,10,0.15);border-radius:10px;font:400 14px/1.4 Geist,sans-serif;background:#fff;color:#0a0a0a;">' +
'</div>' +
'<input type="hidden" name="currency" id="lgv3-cf-currency" value="">' +
'<input type="hidden" name="cash" id="lgv3-cf-cash" value="">' +
'<input type="hidden" name="ar" id="lgv3-cf-ar" value="">' +
'<input type="hidden" name="dso" id="lgv3-cf-dso" value="">' +
'<input type="hidden" name="weekly_in" id="lgv3-cf-weeklyin" value="">' +
'<input type="hidden" name="weekly_out" id="lgv3-cf-weeklyout" value="">' +
'<input type="hidden" name="payroll" id="lgv3-cf-payroll" value="">' +
'<input type="hidden" name="payroll_freq" id="lgv3-cf-payrollfreq" value="">' +
'<input type="hidden" name="computed_runway" id="lgv3-cf-runway" value="">' +
'<input type="hidden" name="computed_lowest" id="lgv3-cf-lowest" value="">' +
'<button type="submit" class="w-button" style="display:inline-block;padding:14px 28px;background:#0a0a0a;color:#fff;border:none;border-radius:10px;font:500 14px/1.2 Geist,sans-serif;cursor:pointer;letter-spacing:0.02em;width:100%;">' + (_lgv3isDE() ? "Meine Excel herunterladen" : "Download my Excel") + '</button>' +
'<p style="margin:14px 0 0 0;font:400 12px/1.4 Geist,sans-serif;color:#888;">By downloading you agree to receive insights and product updates from Transformance.</p>' +
'</form>' +
'<div class="w-form-done" tabindex="-1" role="region" aria-label="Email Form success" style="display:none;padding:20px;background:rgba(255,255,255,0.7);border-radius:12px;margin-top:16px;">' +
'<div><strong>Thanks. Your Excel is on the way.</strong></div>' +
'</div>' +
'<div class="w-form-fail" tabindex="-1" role="region" aria-label="Email Form failure" style="display:none;padding:20px;background:rgba(255,80,67,0.08);border-radius:12px;margin-top:16px;">' +
'<div>Something went wrong. Email <a href="mailto:support@transformance.ai" style="text-decoration:underline;color:#0a0a0a;">support@transformance.ai</a> for the template.</div>' +
'</div>';
var formEl = wrap.querySelector('form');
var wfPage = document.documentElement.getAttribute('data-wf-page');
if (formEl && wfPage) {
formEl.setAttribute('data-wf-page-id', wfPage);
}
return wrap;
}
function lgv3WireCfFormInputs(wrap) {
function sync() {
var get = function (id) { var el = document.getElementById(id); return el ? (el.value || '') : ''; };
var setH = function (id, val) { var el = wrap.querySelector('#' + id); if (el) el.value = val; };
setH('lgv3-cf-currency', get('cur'));
setH('lgv3-cf-cash',     get('cash'));
setH('lgv3-cf-ar',       get('ar'));
setH('lgv3-cf-dso',      get('dso'));
setH('lgv3-cf-weeklyin', get('inflow'));
setH('lgv3-cf-weeklyout',get('outflow'));
setH('lgv3-cf-payroll',  get('payroll'));
setH('lgv3-cf-payrollfreq', get('freq'));
var runwayEl = document.getElementById('m-runway');
var tightEl = document.getElementById('m-tight');
if (runwayEl) setH('lgv3-cf-runway', (runwayEl.textContent || '').trim());
if (tightEl)  setH('lgv3-cf-lowest', (tightEl.textContent || '').trim());
}
['cur','cash','ar','dso','inflow','outflow','payroll','freq','floor','faster'].forEach(function (id) {
var el = document.getElementById(id);
if (!el) return;
el.addEventListener('input', sync);
el.addEventListener('change', sync);
});
sync();
var form = wrap.querySelector('#wf-form-CF-Excel');
if (form) form.addEventListener('submit', sync, true);
}
function lgv3InjectCfActionButtons() {
if (!/^\/tools\/cash-flow-forecasting-tool(---wip)?\/?$/.test(_lgv3P())) return;
if (document.body.dataset.lgv3CfActions === '1') return;
var explain = document.querySelector('.tool-output .tool-explain') || document.querySelector('.tool-explain');
if (!explain) return;
if (explain.nextElementSibling && explain.nextElementSibling.classList.contains('lgv3-cf-actions')) return;
var row = document.createElement('div');
row.className = 'lgv3-cf-actions';
row.style.cssText = 'display:flex;gap:12px;margin-top:18px;flex-wrap:wrap;';
row.innerHTML =
'<button type="button" class="lgv3-cf-save-img" style="flex:1 1 0;min-width:160px;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 20px;background:#fff;color:#0a0a0a;border:1px solid rgba(10,10,10,0.15);border-radius:12px;font:500 14px/1.2 Geist,sans-serif;cursor:pointer;">' +
'<span aria-hidden="true">&darr;</span> ' + (_lgv3isDE() ? "Als Bild speichern" : "Save as image") + '' +
'</button>' +
'<button type="button" class="lgv3-cf-get-excel" style="flex:1 1 0;min-width:160px;display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 20px;background:#0a0a0a;color:#fff;border:none;border-radius:12px;font:500 14px/1.2 Geist,sans-serif;cursor:pointer;">' +
'<span aria-hidden="true">&darr;</span> ' + (_lgv3isDE() ? "Vollständige Excel-Datei laden" : "Get the Excel for full detail") + '' +
'</button>';
explain.parentNode.insertBefore(row, explain.nextSibling);
var getBtn = row.querySelector('.lgv3-cf-get-excel');
if (getBtn) {
getBtn.addEventListener('click', function () {
var form = document.querySelector('#wf-form-CF-Excel') || document.querySelector('.lgv3-excel-form-wrap form');
var target = form ? (form.closest('.lgv3-excel-form-wrap, .lgv3-excel-card') || form) : null;
if (target && target.scrollIntoView) {
target.scrollIntoView({behavior: 'smooth', block: 'center'});
setTimeout(function () {
var firstField = target.querySelector('input[type=text], input[type=email]');
if (firstField) firstField.focus({preventScroll: true});
}, 600);
}
});
}
var saveBtn = row.querySelector('.lgv3-cf-save-img');
if (saveBtn) {
saveBtn.addEventListener('click', function () {
var panel = document.querySelector('.tool-output') || document.querySelector('[class*=cf-calc-card]') || document.querySelector('.tool-grid');
if (!panel) return;
var orig = saveBtn.innerHTML;
saveBtn.disabled = true;
saveBtn.innerHTML = '<span aria-hidden="true">&darr;</span> Capturing…';
import('https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/+esm').then(function (mod) {
return mod.toPng(panel, {backgroundColor: '#ffffff', pixelRatio: 2, cacheBust: true});
}).then(function (dataUrl) {
var a = document.createElement('a');
a.href = dataUrl;
a.download = 'transformance-cash-flow-forecast.png';
document.body.appendChild(a);
a.click();
a.remove();
}).catch(function (e) {
console.warn('Save-as-image failed:', e);
saveBtn.innerHTML = '<span aria-hidden="true">&darr;</span> Try again';
}).finally(function () {
setTimeout(function () { saveBtn.disabled = false; saveBtn.innerHTML = orig; }, 1200);
});
});
}
document.body.dataset.lgv3CfActions = '1';
}
function lgv3ReinitWebflowForms() {
try {
if (window.Webflow && typeof window.Webflow.require === 'function') {
var forms = window.Webflow.require('forms');
if (forms && typeof forms.ready === 'function') forms.ready();
} else if (window.Webflow && typeof window.Webflow.ready === 'function') {
window.Webflow.ready();
}
} catch (e) {  }
}
function init() {
lgv3TagBody(); 
lgv3SwapCfForecastCopy(); 
lgv3FixCfSolutionKpis(); 
lgv3FixDeductionsKpis(); 
lgv3DedupeBlogCards(); 
lgv3FixDeadHtmlLinks(); 
lgv3FixDsoLogoSrc(); 
lgv3FixBlogCounter(); 
lgv3Restore404Heading(); 
lgv3FixBestArTextNoise(); 
lgv3FixHomeKpiWeeks(); 
lgv3FixCustomerStoriesLazy(); 
lgv3Fix404FooterDeadAnchors(); 
lgv3SwapBestArHeroLogos(); 
document.querySelectorAll('.glass[data-glow]').forEach(attachCursorGlow);
document.querySelectorAll('[data-chars-target]').forEach(attachReveal);
addDropdownBridges();
injectGlossaryBreadcrumb();
rebuildBlogHero();
activateBlogGrid();
hoistBlogTOC();
injectBlogBreadcrumb();
addBlogReadingTime();
injectBlogArticleSchema();
vendorLogoSwap();
injectVendorLogosBestAR();
wireGlossaryIndex();
wireBlogIndex();
injectFounderPhotos();
swapSolutionsHero();
lgv3InjectSolutionsHeroImg();
syncSolutionsImages();
lgv3FixSolutionMockups();
lgv3FixDeadCTAs();
lgv3HideDuplicateNav();
lgv3FixMojibake();
lgv3WireContactForm();
lgv3FixContactSubmitText();
lgv3FixCfToolExcelAnchor();
lgv3Inject404CTAs();
lgv3InjectBlogFounderPhotos();
lgv3InjectMeetingEmbed();
lgv3InjectDsoExcelForm();
lgv3InjectCfExcelForm();
lgv3InjectCfActionButtons();
}
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', init);
} else {
init();
}
function lgv3InitDsoCalc() {
if (!/^\/tools\/dso-calculator(---wip)?\/?$/.test(_lgv3P())) return;
if (window.__lgv3DsoCalc) return;
if (!document.getElementById('revenue') || !document.getElementById('m-dso')) return;
window.__lgv3DsoCalc = 1;
try {
(function () {
const INDUSTRIES_EN = [
{ key: "all",          label: "All industries",                        median: 46 },
{ key: "saas_smb",     label: "SaaS, SMB card-paid",                   median: 10 },
{ key: "saas_mm",      label: "SaaS, mid-market B2B",                  median: 38 },
{ key: "mfg_ind",      label: "Manufacturing, industrial",             median: 52 },
{ key: "retail_b2c",   label: "Retail, B2C direct",                    median: 2  },
{ key: "retail_b2b",   label: "Retail, B2B wholesale",                 median: 38 },
{ key: "mfg_auto",     label: "Manufacturing, automotive",             median: 75 },
{ key: "mfg_food",     label: "Manufacturing, food and beverage",      median: 35 },
{ key: "ps_staff",     label: "Professional services, staffing",       median: 32 },
{ key: "ps_consult",   label: "Professional services, consulting",     median: 52 },
{ key: "ps_legal",     label: "Professional services, legal",          median: 80 },
{ key: "health_hosp",  label: "Healthcare, hospital",                  median: 47 },
{ key: "chem",         label: "Chemicals",                             median: 46 },
{ key: "construction", label: "Construction",                          median: 90 },
{ key: "wholesale",    label: "Wholesale distribution",                median: 40 },
{ key: "energy",       label: "Energy and utilities",                  median: 82 },
{ key: "media",        label: "Media and telecom, ad-buy",             median: 75 }
];
const INDUSTRIES = (_lgv3isDE() ? [
{ key: "all",          label: "Alle Branchen",                         median: 46 },
{ key: "saas_smb",     label: "SaaS, KMU mit Kartenzahlung",           median: 10 },
{ key: "saas_mm",      label: "SaaS, B2B-Mittelstand",                 median: 38 },
{ key: "mfg_ind",      label: "Fertigung, Industrie",                  median: 52 },
{ key: "retail_b2c",   label: "Einzelhandel, B2C-Direktvertrieb",      median: 2  },
{ key: "retail_b2b",   label: "Handel, B2B-Großhandel",                median: 38 },
{ key: "mfg_auto",     label: "Fertigung, Automotive",                 median: 75 },
{ key: "mfg_food",     label: "Fertigung, Lebensmittel und Getränke",  median: 35 },
{ key: "ps_staff",     label: "Professional Services, Personaldienstleistung", median: 32 },
{ key: "ps_consult",   label: "Professional Services, Beratung",       median: 52 },
{ key: "ps_legal",     label: "Professional Services, Rechtsberatung", median: 80 },
{ key: "health_hosp",  label: "Gesundheitswesen, Krankenhaus",         median: 47 },
{ key: "chem",         label: "Chemie",                                median: 46 },
{ key: "construction", label: "Baugewerbe",                            median: 90 },
{ key: "wholesale",    label: "Großhandel",                            median: 40 },
{ key: "energy",       label: "Energie- und Versorgungswirtschaft",    median: 82 },
{ key: "media",        label: "Medien und Telekommunikation, Werbeeinkauf", median: 75 }
] : INDUSTRIES_EN);
const inputs = {
cur:      document.getElementById('cur'),
revenue:  document.getElementById('revenue'),
ar:       document.getElementById('ar'),
period:   document.getElementById('period'),
industry: document.getElementById('industry')
};
const out = {
dso:        document.getElementById('m-dso'),
bench:      document.getElementById('m-bench'),
segment:    document.getElementById('m-segment'),
dsoSub:     document.getElementById('m-dso-sub'),
verdict:    document.getElementById('m-verdict'),
resultBig:  document.getElementById('result-big'),
trapped:    document.getElementById('m-trapped'),
trappedSub: document.getElementById('m-trapped-sub'),
perday:     document.getElementById('m-perday'),
bbYou:      document.getElementById('bb-you'),
bbYouVal:   document.getElementById('bb-you-val'),
bbMedian:   document.getElementById('bb-median'),
tbody:      document.getElementById('bench-tbody'),
explain:    document.getElementById('tool-explain')
};
const prefixSpans = ['px-rev', 'px-ar'].map(id => document.getElementById(id));
function fmtCompact(n, sym) {
const sign = n < 0 ? '-' : '';
const a = Math.abs(n);
if (a >= 1e9) return sign + sym + (_lgv3isDE() ? (a / 1e9).toFixed(1).replace('.',',')+' Mrd' : (a / 1e9).toFixed(1)+'B');
if (a >= 1e6) return sign + sym + (_lgv3isDE() ? (a / 1e6).toFixed(1).replace('.',',')+' Mio' : (a / 1e6).toFixed(1)+'M');
if (a >= 1e3) return sign + sym + (_lgv3isDE() ? (a / 1e3).toFixed(0)+' Tsd' : (a / 1e3).toFixed(0)+'k');
return sign + sym + a.toFixed(0);
}
function getIndustry(key) {
return INDUSTRIES.find(i => i.key === key) || INDUSTRIES[0];
}
function buildTable(youDso) {
const sorted = INDUSTRIES.slice().sort((a, b) => a.median - b.median);
const activeKey = inputs.industry.value;
const rows = sorted.map(ind => {
const gap = youDso - ind.median;
const gapStr = gap === 0 ? '0d' : (gap > 0 ? '+' + gap.toFixed(0) + 'd' : gap.toFixed(0) + 'd');
const gapCls = ind.key === activeKey ? (gap > 0 ? 'warn' : (gap < 0 ? 'good' : '')) : '';
return '<tr class="' + (ind.key === activeKey ? 'active' : '') + '">' +
'<td>' + ind.label + '</td>' +
'<td class="num">' + ind.median + (_lgv3isDE()?' Tage':' days') + '</td>' +
'<td class="num">' + (ind.key === activeKey ? '<span class="delta ' + gapCls + '">' + gapStr + '</span>' : '<span class="delta">' + gapStr + '</span>') + '</td>' +
'</tr>';
}).join('');
out.tbody.innerHTML = rows;
}
function compute() {
const sym = inputs.cur.value;
prefixSpans.forEach(s => { if (s) s.textContent = sym.trim() || (_lgv3isDE() ? '€' : '$'); });
const MAX_VAL = 1e12;
const rawRevenue = +inputs.revenue.value || 0;
const rawAr      = +inputs.ar.value || 0;
const revenue    = Math.min(MAX_VAL, Math.max(0, rawRevenue));
const ar         = Math.min(MAX_VAL, Math.max(0, rawAr));
const period  = +inputs.period.value || 1;
const ind     = getIndustry(inputs.industry.value);
function lgv3ToggleClampWarn(input, clamped) {
if (!input) return;
var host = input.closest('.field-row, .field, label') || input.parentElement;
if (!host) return;
var warn = host.parentElement && host.parentElement.querySelector('.lgv3-clamp-warn[data-for="' + input.id + '"]');
if (clamped) {
if (!warn) {
warn = document.createElement('div');
warn.className = 'lgv3-clamp-warn';
warn.setAttribute('data-for', input.id);
warn.setAttribute('role', 'alert');
warn.style.cssText = 'margin-top:0.35rem;font:500 12px/1.3 system-ui,sans-serif;color:#b91c1c;';
warn.textContent = _lgv3isDE() ? 'Wert zu groß. Auf 1 Billion begrenzt.' : 'Value too large. Capped at 1 trillion.';
host.parentElement.insertBefore(warn, host.nextSibling);
}
} else if (warn && warn.parentNode) {
warn.parentNode.removeChild(warn);
}
}
lgv3ToggleClampWarn(inputs.revenue, rawRevenue > MAX_VAL);
lgv3ToggleClampWarn(inputs.ar, rawAr > MAX_VAL);
const dso = revenue > 0 ? (ar / revenue) * period : 0;
const dsoRounded = Math.round(dso);
out.dso.textContent = dsoRounded;
out.bench.textContent = ind.median;
out.segment.textContent = ind.label;
const gap = dso - ind.median;
const absGap = Math.abs(gap);
if (gap > 0.5) {
out.verdict.textContent = absGap.toFixed(0) + (_lgv3isDE()?' Tage über Benchmark':' days above benchmark');
out.resultBig.classList.remove('good', 'par');
out.resultBig.classList.add('warn');
} else if (gap < -0.5) {
out.verdict.textContent = absGap.toFixed(0) + (_lgv3isDE()?' Tage unter Benchmark. Stark.':' days below benchmark. Strong.');
out.resultBig.classList.remove('warn', 'par');
out.resultBig.classList.add('good');
} else {
out.verdict.textContent = _lgv3isDE() ? 'Auf Benchmark-Niveau' : 'On benchmark';
out.resultBig.classList.remove('warn', 'good');
out.resultBig.classList.add('par');
}
const perDay = revenue / 365;
const trapped = Math.max(0, gap) * perDay;
out.trapped.textContent = trapped > 0 ? fmtCompact(trapped, sym) : fmtCompact(0, sym);
out.trappedSub.textContent = gap > 0
? (_lgv3isDE()?'Rund ':'About ') + gap.toFixed(0) + (_lgv3isDE()?' Tage x ':' days x ') + fmtCompact(perDay, sym) + (_lgv3isDE()?' pro Tag':' per day')
: (_lgv3isDE()?'Sie liegen auf oder unter dem Segment-Median':'You are at or below the segment median');
out.perday.textContent = fmtCompact(perDay, sym);
const SCALE_MAX = 120;
const clamp = (v) => Math.max(0, Math.min(100, (v / SCALE_MAX) * 100));
out.bbMedian.style.left = clamp(ind.median) + '%';
out.bbYou.style.left = clamp(dso) + '%';
out.bbYouVal.textContent = dsoRounded + 'd';
if (revenue <= 0 || ar <= 0) {
out.explain.innerHTML = _lgv3isDE() ? '<strong>Tragen Sie oben Ihre Zahlen ein</strong>, um Ihren DSO, den Abstand zum Benchmark und die gebundene Liquidität zu sehen.' : '<strong>Add your numbers above</strong> to see your DSO, your benchmark gap, and how much cash is trapped.';
} else if (gap > 0) {
out.explain.innerHTML = _lgv3isDE() ? ('<strong>So lesen Sie das:</strong> Ihr DSO liegt bei ' + dsoRounded + ' Tagen, ' + gap.toFixed(0) + ' Tage über dem Median (' + ind.label + ') von ' + ind.median + ' Tagen. Diese Lücke entspricht ' + fmtCompact(trapped, sym) + ' Working Capital. Senken Sie den DSO um ' + Math.min(10, Math.ceil(gap)) + ' Tage und Sie setzen ' + fmtCompact(Math.min(10, Math.ceil(gap)) * perDay, sym) + ' frei.') : ('<strong>Reading this:</strong> Your DSO is ' + dsoRounded + ' days, ' + gap.toFixed(0) + ' days above the ' + ind.label + ' median of ' + ind.median + ' days. That gap is worth ' + fmtCompact(trapped, sym) + ' in working capital. Cut DSO by ' + Math.min(10, Math.ceil(gap)) + ' days and you free ' + fmtCompact(Math.min(10, Math.ceil(gap)) * perDay, sym) + '.');
} else {
out.explain.innerHTML = _lgv3isDE() ? ('<strong>So lesen Sie das:</strong> Ihr DSO von ' + dsoRounded + ' Tagen liegt auf oder unter dem Median (' + ind.label + ') von ' + ind.median + ' Tagen. Halten Sie das. Anhaltende DSO-Disziplin unterscheidet die besten Debitorenteams vom Durchschnitt.') : ('<strong>Reading this:</strong> Your DSO of ' + dsoRounded + ' days is at or below the ' + ind.label + ' median of ' + ind.median + ' days. Keep it there. Sustained DSO discipline is what separates top-quartile AR teams from the median.');
}
buildTable(dso);
}
Object.values(inputs).forEach(el => {
if (!el) return;
el.addEventListener('input', compute);
el.addEventListener('change', compute);
});
compute();
})();
} catch (e) { console.warn('DSO calc error:', e); }
}
lgv3InitDsoCalc();
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', lgv3InitDsoCalc);
}
function lgv3InitCfCalc() {
if (!/^\/(?:tools\/cash-flow-forecasting-tool|solutions\/cash-flow-forecasting)(---wip)?\/?$/.test(_lgv3P())) return;
if (window.__lgv3CfCalc) return;
if (!document.getElementById('faster') || !document.getElementById('chart')) return;
window.__lgv3CfCalc = 1;
try {
(function () {
const inputs = {
cur:    document.getElementById('cur'),
cash:   document.getElementById('cash'),
ar:     document.getElementById('ar'),
dso:    document.getElementById('dso'),
inflow: document.getElementById('inflow'),
outflow:document.getElementById('outflow'),
payroll:document.getElementById('payroll'),
freq:   document.getElementById('freq'),
floor:  document.getElementById('floor'),
faster: document.getElementById('faster')
};
if (inputs.faster && +inputs.faster.max < 30) {
inputs.faster.max = '30';
}
const out = {
chart:   document.getElementById('chart'),
runway:  document.getElementById('m-runway'),
tight:   document.getElementById('m-tight'),
tightSub:document.getElementById('m-tight-sub'),
tightCell:document.getElementById('cell-tight'),
fasterDays: document.getElementById('faster-days'),
wiResult: document.getElementById('wi-result')
};
const prefixSpans = ['px-cash','px-ar','px-in','px-out','px-pay','px-floor'].map(id => document.getElementById(id));
function fmtCompact(n, sym) {
const sign = n < 0 ? '-' : '';
const a = Math.abs(n);
if (a >= 1e9) return sign + sym + (_lgv3isDE() ? (a/1e9).toFixed(1).replace('.',',')+' Mrd' : (a/1e9).toFixed(1)+'B');
if (a >= 1e6) return sign + sym + (_lgv3isDE() ? (a/1e6).toFixed(1).replace('.',',')+' Mio' : (a/1e6).toFixed(1)+'M');
if (a >= 1e3) return sign + sym + (_lgv3isDE() ? (a/1e3).toFixed(0)+' Tsd' : (a/1e3).toFixed(0)+'k');
return sign + sym + a.toFixed(0);
}
function project(p) {
const weeks = 13;
const cashFlows = []; // ending cash per week (0..13 incl now)
let cash = p.cash + (p.dso > 0 ? (p.ar / p.dso) * p.faster : 0);
cashFlows.push(cash);
const dsoEff = Math.max(1, p.dso);
const arWeeks = Math.max(1, Math.ceil(dsoEff / 7));
const arPerWeek = p.ar / arWeeks;
const freq = p.freq; // weeks per payroll
for (let w = 1; w <= weeks; w++) {
const arIn = w <= arWeeks ? arPerWeek : 0;
const newIn = p.inflow;
const opOut = p.outflow;
const payrollHit = (w % Math.round(freq) === 0) ? p.payroll : 0;
cash = cash + arIn + newIn - opOut - payrollHit;
cashFlows.push(cash);
}
return cashFlows;
}
function drawChart(series, floor, sym) {
const svg = out.chart;
const W = 800, H = 360, padL = 50, padR = 20, padT = 16, padB = 32;
const plotW = W - padL - padR;
const plotH = H - padT - padB;
const n = series.length;
const min = Math.min(...series, floor);
const max = Math.max(...series, floor);
const range = Math.max(1, max - min);
const pad = range * 0.12;
const yMin = min - pad;
const yMax = max + pad;
function xAt(i) { return padL + (i / (n - 1)) * plotW; }
function yAt(v) { return padT + (1 - (v - yMin) / (yMax - yMin)) * plotH; }
const floorY = yAt(floor);
let d = '';
for (let i = 0; i < n; i++) {
d += (i === 0 ? 'M' : 'L') + xAt(i).toFixed(1) + ',' + yAt(series[i]).toFixed(1) + ' ';
}
let areaPath = '';
for (let i = 0; i < n; i++) areaPath += (i === 0 ? 'M' : 'L') + xAt(i).toFixed(1) + ',' + yAt(series[i]).toFixed(1) + ' ';
areaPath += 'L' + xAt(n - 1).toFixed(1) + ',' + (padT + plotH).toFixed(1) + ' ';
areaPath += 'L' + xAt(0).toFixed(1) + ',' + (padT + plotH).toFixed(1) + ' Z';
const ticks = [0, 4, 7, 10, 13];
const tickLabels = _lgv3isDE() ? ['Jetzt', '+4 Wo', '+7 Wo', '+10 Wo', '+13 Wo'] : ['Now', '+4 wk', '+7 wk', '+10 wk', '+13 wk'];
svg.innerHTML = `
<defs>
<linearGradient id="cashGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#FF8308" stop-opacity="0.22"/>
<stop offset="100%" stop-color="#FF8308" stop-opacity="0.02"/>
</linearGradient>
<clipPath id="belowFloor"><rect x="${padL}" y="${floorY}" width="${plotW}" height="${(padT + plotH) - floorY}"/></clipPath>
</defs>
<!-- red danger zone -->
<rect x="${padL}" y="${floorY}" width="${plotW}" height="${(padT + plotH) - floorY}" fill="rgba(185,28,28,0.08)"/>
<!-- floor line -->
<line x1="${padL}" y1="${floorY.toFixed(1)}" x2="${(padL + plotW).toFixed(1)}" y2="${floorY.toFixed(1)}" stroke="rgba(185,28,28,0.55)" stroke-width="1" stroke-dasharray="4 4"/>
<text x="${(padL + plotW - 4).toFixed(1)}" y="${(floorY - 6).toFixed(1)}" text-anchor="end" font-family="Geist Mono, monospace" font-size="10" fill="#b91c1c" letter-spacing="0.04em">${_lgv3isDE()?'MINIMUM':'FLOOR'} ${fmtCompact(floor, sym)}</text>
<!-- area -->
<path d="${areaPath}" fill="url(#cashGrad)"/>
<!-- line -->
<path d="${d}" fill="none" stroke="#FF5043" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
<!-- dots -->
${series.map((v, i) => `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(v).toFixed(1)}" r="${i === 0 ? 3.5 : 2.2}" fill="${v < floor ? '#b91c1c' : '#FF5043'}"/>`).join('')}
<!-- x ticks -->
${ticks.map((t, i) => `<text x="${xAt(t).toFixed(1)}" y="${(padT + plotH + 18).toFixed(1)}" text-anchor="middle" font-family="Geist Mono, monospace" font-size="10" fill="#5e5e5e" letter-spacing="0.04em">${tickLabels[i]}</text>`).join('')}
`;
}
function read() {
return {
cash:    +inputs.cash.value || 0,
ar:      +inputs.ar.value || 0,
dso:     +inputs.dso.value || 1,
inflow:  +inputs.inflow.value || 0,
outflow: +inputs.outflow.value || 0,
payroll: +inputs.payroll.value || 0,
freq:    +inputs.freq.value || 2,
floor:   +inputs.floor.value || 0,
faster:  +inputs.faster.value || 0
};
}
function compute() {
const sym = inputs.cur.value;
prefixSpans.forEach(s => { if (s) s.textContent = sym.trim() || (_lgv3isDE() ? '€' : '$'); });
const p = read();
const baseline = project({ ...p, faster: 0 });
const series = project(p);
drawChart(series, p.floor, sym);
let tightVal = Infinity, tightIdx = 1;
for (let i = 1; i < series.length; i++) {
if (series[i] < tightVal) { tightVal = series[i]; tightIdx = i; }
}
out.tight.textContent = fmtCompact(tightVal, sym);
const belowFloor = p.floor - tightVal;
if (belowFloor > 0) {
out.tightSub.textContent = _lgv3isDE() ? `Woche ${tightIdx}, ${fmtCompact(belowFloor, sym)} unter Ihrer Mindestgrenze` : `Week ${tightIdx}, ${fmtCompact(belowFloor, sym)} below your floor`;
out.tightCell.classList.add('warn');
} else {
out.tightSub.textContent = _lgv3isDE() ? `Woche ${tightIdx}, ${fmtCompact(-belowFloor, sym)} über Ihrer Mindestgrenze` : `Week ${tightIdx}, ${fmtCompact(-belowFloor, sym)} above your floor`;
out.tightCell.classList.remove('warn');
}
let runwayWeeks = 13;
for (let i = 1; i < series.length; i++) {
if (series[i] <= 0) { runwayWeeks = i; break; }
}
out.runway.textContent = _lgv3isDE() ? (runwayWeeks >= 13 ? '13+ Wochen' : runwayWeeks + ' Wochen') : (runwayWeeks >= 13 ? '13+ weeks' : runwayWeeks + ' weeks');
out.fasterDays.textContent = p.faster;
let baseTight = Infinity;
for (let i = 1; i < baseline.length; i++) baseTight = Math.min(baseTight, baseline[i]);
const jumpFrom = fmtCompact(baseTight, sym);
const jumpTo = fmtCompact(tightVal, sym);
const cashEarlier = tightVal - baseTight;
const outflowCover = p.outflow > 0 ? (cashEarlier / p.outflow) : 0;
if (p.faster === 0) {
out.wiResult.innerHTML = _lgv3isDE() ? `Schieben Sie den Regler, um zu sehen, was schnellere Kundenzahlungen bewirken.` : `Slide to see what happens when customers pay sooner.`;
} else {
out.wiResult.innerHTML = _lgv3isDE() ? (
`Ihre knappste Woche steigt von <strong>${jumpFrom}</strong> auf <strong>${jumpTo}</strong>. ` +
`Das deckt rund <strong>${outflowCover.toFixed(1).replace('.', ',')}</strong> Wochen an Auszahlungen. ` +
`<strong>${fmtCompact(cashEarlier, sym)}</strong> fließen früher als Zahlungseingang zu.`) : (
`Your tightest week jumps from <strong>${jumpFrom}</strong> to <strong>${jumpTo}</strong>. ` +
`That covers about <strong>${outflowCover.toFixed(1)}</strong> weeks of outflow. ` +
`<strong>${fmtCompact(cashEarlier, sym)}</strong> of cash flows in earlier.`);
}
}
Object.values(inputs).forEach(el => {
if (!el) return;
el.addEventListener('input', compute);
el.addEventListener('change', compute);
});
compute();
})();
} catch (e) { console.warn('CF tool calc error:', e); }
}
lgv3InitCfCalc();
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', lgv3InitCfCalc);
}
})();
function lgv3MobileHomeStatsMove() {
  if (!/^\/(home(---wip)?)?\/?$/.test(_lgv3P())) return;
  if (!window.matchMedia('(max-width: 991px)').matches) return;
  if (document.body.dataset.lgv3StatsMoved === '1') return;
  var hero = document.querySelector('section.container.hero');
  var stat = document.querySelector('.stat-value');
  if (!hero || !stat) return;
  var parent = hero.parentElement;
  var statSec = stat;
  while (statSec && statSec.parentElement !== parent) statSec = statSec.parentElement;
  var mocks = document.querySelectorAll('.ps-mockup');
  if (!statSec || !mocks.length) return;
  var lastProd = mocks[mocks.length - 1];
  while (lastProd && lastProd.parentElement !== parent) lastProd = lastProd.parentElement;
  if (!lastProd) return;
  parent.insertBefore(statSec, lastProd.nextSibling);
  document.body.dataset.lgv3StatsMoved = '1';
}
(function () {
  var f = function () { try { lgv3MobileHomeStatsMove(); } catch (e) {} };
  if (document.readyState !== 'loading') { f(); } else { document.addEventListener('DOMContentLoaded', f); }
  setTimeout(f, 1500);
})();
