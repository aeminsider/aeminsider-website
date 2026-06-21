/* AEM Insider — restrained scroll-reveal + count-up. No libraries. */
(function () {
  var rm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // count-up for stat numbers tagged [data-count]
  function runCount(scope) {
    var t = scope.querySelector('[data-count]');
    if (!t || t._done) return;
    t._done = 1;
    var end = +t.dataset.count, dur = 900, start = performance.now();
    (function frame(now) {
      var p = Math.min((now - start) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      t.textContent = Math.round(end * e);
      if (p < 1) requestAnimationFrame(frame); else t.textContent = end;
    })(performance.now());
  }

  var sel = '.sec-head, .feat, .vid, .stat, .step, .tier, .post-row, .res-card, .cred > div, .news';
  var els = Array.prototype.slice.call(document.querySelectorAll(sel));

  // gentle stagger across grid children
  var gridRe = /feat-grid|vid-grid|steps|stats-grid|tiers|res-grid|post-list/;
  els.forEach(function (el) {
    var p = el.parentElement;
    if (p && gridRe.test(p.className)) {
      var i = Array.prototype.indexOf.call(p.children, el);
      el.style.transitionDelay = Math.min(i, 6) * 0.07 + 's';
    }
  });

  if (rm) { els.forEach(function (el) { runCount(el); }); return; }

  var vh = function () { return window.innerHeight || document.documentElement.clientHeight; };
  var inView = function (el) { var r = el.getBoundingClientRect(); return r.top < vh() * 0.92 && r.bottom > 0; };

  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function (ents) {
    ents.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); runCount(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }) : null;

  els.forEach(function (el) {
    if (!io || inView(el)) { el.classList.add('reveal', 'in'); runCount(el); }
    else { el.classList.add('reveal'); io.observe(el); }
  });
})();
