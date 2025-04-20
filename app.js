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

jQuery(document).ready(function(){
    jQuery(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1 // Show 1 item on small screens
            },
            600: {
                items: 2 // Show 2 items on medium screens
            },
            1000: {
                items: 4 // Show 4 items on large screens
            }
        }
    });
});