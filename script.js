/* Portofolio — Syifa Aprilia Ayu Wandika
   JavaScript murni, tanpa dependensi. Konten tetap terbaca tanpa JS. */

(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- 1. Mode terang/gelap manual, disimpan di localStorage --- */

  function isDark() {
    if (root.getAttribute('data-theme') === 'dark') return true;
    if (root.getAttribute('data-theme') === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function initThemeToggle() {
    var btn = document.querySelector('.theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        /* penyimpanan diblokir: pilihan tetap berlaku untuk sesi ini */
      }
    });
  }

  /* --- 2. Kartu pengalaman buka-tutup (button + aria-expanded + aria-controls) --- */

  function initExperienceToggles() {
    document.querySelectorAll('.exp-toggle').forEach(function (btn) {
      var body = document.getElementById(btn.getAttribute('aria-controls'));
      if (!body) return;

      btn.setAttribute('aria-expanded', String(!body.hidden));

      btn.addEventListener('click', function () {
        var isOpen = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!isOpen));
        body.hidden = isOpen;
      });
    });
  }

  /* --- 3. Fade-in halus saat scroll --- */

  function initReveal() {
    var items = document.querySelectorAll('.reveal');

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  initThemeToggle();
  initExperienceToggles();
  initReveal();
})();
