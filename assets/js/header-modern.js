(function(){
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.header-toggle');
  if (toggle) {
    toggle.addEventListener('click', function(){
      header.classList.toggle('open');
    });
  }
  let lastY = 0;
  window.addEventListener('scroll', function(){
    const y = window.scrollY || window.pageYOffset;
    if (y > 10) {
      header.classList.add('is-sticky');
    } else {
      header.classList.remove('is-sticky');
    }
    lastY = y;
  });
})();



