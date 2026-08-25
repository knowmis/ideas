// Progressive-enhancement scroll reveal: content is fully visible with JS off
// or IntersectionObserver unsupported; .reveal only hides until scrolled into view
// once .js is present, and is a no-op feel under prefers-reduced-motion (see CSS).
(function () {
  document.documentElement.classList.add('js');
  var targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(function (el) { io.observe(el); });
})();
