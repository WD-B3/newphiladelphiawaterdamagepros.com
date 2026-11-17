(function () {
  var BP = 900;
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-menu');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? '✕' : '☰';
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }
  var items = document.querySelectorAll('.navitem > button');
  items.forEach(function (b) {
    b.addEventListener('click', function () {
      if (window.innerWidth <= BP) { b.parentNode.classList.toggle('open'); }
    });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > BP && links) {
      links.classList.remove('open');
      document.querySelectorAll('.navitem.open').forEach(function (n) { n.classList.remove('open'); });
    }
  });
})();
