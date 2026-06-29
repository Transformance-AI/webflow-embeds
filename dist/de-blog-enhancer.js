/* Transformance — German blog enhancer (locale-only).
 * Adds the breadcrumb, single author·date·category·reading-time meta row, German date,
 * and floating "In diesem Artikel" TOC to /<locale>/blog-posts/ pages. The main
 * liquid-glass-v3 script path-gates these to /blog-posts/ and skips localized URLs, so this
 * runs ONLY on localized blog pages (English is untouched — handled by the main script).
 * Styling reuses the already-global liquid-glass CSS classes, so no CSS is needed here. */
(function () {
  function lgv3BlogLocale(){var m=location.pathname.match(/^\/([a-z]{2})\/blog-posts\//);return m?m[1]:'';}
  if (!lgv3BlogLocale()) return; // primary-locale blog pages are handled by the main script
  function lgv3IsBlogPost(){return /^\/(?:[a-z]{2}\/)?blog-posts\//.test(location.pathname);}
  var DE_MONTHS = ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'];
  function lgv3DeDate(s){var d=new Date(s);if(isNaN(d.getTime()))return null;return d.getDate()+'. '+DE_MONTHS[d.getMonth()]+' '+d.getFullYear();}

  function rebuildBlogHero() {
    var meta = document.querySelector('.blog-intro-section .post-meta');
    var author = document.querySelector('.blog-intro-section .post-author');
    if (!meta || !author) return;
    if (author.querySelector('.lgv3-blog-date')) return;
    var lines = meta.innerText.trim().split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
    if (lines.length < 2) return;
    var cat = lines[0];
    var date = lines[1];
    if (lgv3BlogLocale() === 'de') date = lgv3DeDate(date) || date;
    var catLink = Array.prototype.slice.call(meta.querySelectorAll('a')).find(function (a) { return a.innerText.trim() === cat; });
    meta.classList.add('lgv3-hide');
    var mkSep = function () { var s = document.createElement('span'); s.className = 'lgv3-blog-date-sep'; s.textContent = ' · '; return s; };
    var dt = document.createElement('span');
    dt.className = 'lgv3-blog-date';
    dt.textContent = date;
    author.appendChild(mkSep());
    author.appendChild(dt);
    var catEl;
    if (catLink) { catEl = catLink.cloneNode(true); catEl.classList.add('lgv3-blog-category'); }
    else { catEl = document.createElement('span'); catEl.className = 'lgv3-blog-category'; catEl.textContent = cat; }
    author.appendChild(mkSep());
    author.appendChild(catEl);
  }

  function injectBlogBreadcrumb() {
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
    var loc = lgv3BlogLocale();
    var base = loc ? '/' + loc : '';
    crumb.innerHTML =
      '<a href="' + base + '/">Home</a>' +
      '<span class="tf-breadcrumb-sep" aria-hidden="true">→</span>' +
      '<a href="' + base + '/blog">Blog</a>' +
      '<span class="tf-breadcrumb-sep" aria-hidden="true">→</span>' +
      '<span class="tf-breadcrumb-current">' + esc(name) + '</span>';
    heroContainer.insertBefore(crumb, heroContainer.firstChild);
    var ld = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":location.origin + base + "/"},
      {"@type":"ListItem","position":2,"name":"Blog","item":location.origin + base + "/blog"},
      {"@type":"ListItem","position":3,"name":name,"item":location.href.split('#')[0].split('?')[0]}
    ]};
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }

  function addBlogReadingTime() {
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
    rt.textContent = mins + (lgv3BlogLocale() === 'de' ? ' Min. Lesezeit' : ' min read');
    author.appendChild(sep);
    author.appendChild(rt);
  }

  function activateBlogGrid() {
    document.querySelectorAll('section.section > .container > .content---m').forEach(function (cm) {
      if (cm.querySelector('.article-wrapper')) cm.classList.add('lgv3-blog-grid');
    });
  }

  function hoistBlogTOC() {
    if (document.querySelector('.lgv3-blog-toc-side')) return;
    var tocH = document.querySelector('.article.w-richtext h2#table-of-contents');
    var tocList = tocH ? tocH.nextElementSibling : null;
    if (!tocH || !tocList || tocList.tagName !== 'UL') return;
    var contentM = document.querySelector('.content---m.lgv3-blog-grid') || document.querySelector('section.section .content---m');
    if (!contentM) return;
    var side = document.createElement('aside');
    side.className = 'lgv3-blog-toc-side';
    var label = lgv3BlogLocale() === 'de' ? 'In diesem Artikel' : 'In this article';
    side.setAttribute('aria-label', label);
    var h = document.createElement('h2');
    h.textContent = label;
    if (lgv3BlogLocale() === 'de') h.style.setProperty('text-transform', 'none', 'important'); // German nouns stay capitalized ("Artikel")
    side.appendChild(h);
    side.appendChild(tocList.cloneNode(true));
    contentM.appendChild(side);
  }

  function injectBlogArticleSchema() {
    if (document.querySelector('script[type="application/ld+json"][data-lgv3-article]')) return;
    var h1 = document.querySelector('.blog-intro-section h1');
    if (!h1) return;
    var dateEl = document.querySelector('.blog-intro-section .post-author .lgv3-blog-date');
    var dateText = dateEl ? dateEl.textContent.trim() : null;
    var datePub = null;
    if (dateText) { var p = new Date(dateText); if (!isNaN(p.getTime())) datePub = p.toISOString(); }
    var authorEl = document.querySelector('.blog-intro-section .post-author .small-text, .blog-intro-section .post-author .heading-h5');
    var heroImg = document.querySelector('.blog-hero img, .blog-intro-section .content---xl img');
    var descMeta = document.querySelector('meta[name="description"]');
    var ld = { "@context": "https://schema.org", "@type": "Article", "headline": h1.textContent.trim(),
      "url": location.href.split('#')[0].split('?')[0], "mainEntityOfPage": location.href.split('#')[0].split('?')[0],
      "description": descMeta ? descMeta.content : '',
      "publisher": { "@type": "Organization", "name": "Transformance", "url": "https://www.transformance.ai/" } };
    if (datePub) ld.datePublished = datePub;
    if (authorEl) ld.author = { "@type": "Person", "name": authorEl.textContent.trim() };
    if (heroImg) ld.image = heroImg.src;
    var s = document.createElement('script');
    s.type = 'application/ld+json';
    s.setAttribute('data-lgv3-article', '1');
    s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }

  function runAll() {
    if (!lgv3IsBlogPost()) return;
    try { rebuildBlogHero(); } catch (e) {}
    try { activateBlogGrid(); } catch (e) {}
    try { injectBlogBreadcrumb(); } catch (e) {}
    try { addBlogReadingTime(); } catch (e) {}
    try { hoistBlogTOC(); } catch (e) {}
    try { injectBlogArticleSchema(); } catch (e) {}
  }
  if (document.readyState !== 'loading') runAll();
  else document.addEventListener('DOMContentLoaded', runAll);
  setTimeout(runAll, 800); setTimeout(runAll, 2000); setTimeout(runAll, 4000);
})();
