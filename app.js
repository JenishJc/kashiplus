const masonryItems = document.querySelectorAll(".masonry__item");

masonryItems.forEach((item, index) => {
  item.style.setProperty("--height", Math.ceil(item.clientHeight / 4 + 4));
});
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
window.addEventListener('scroll', function () {
    const header = document.querySelector('.main-header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });