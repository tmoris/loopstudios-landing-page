const navToggle = document.querySelector('.menutoggle');
const navLinks = document.querySelectorAll('.navlist__item--link');
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('open');
  });
});