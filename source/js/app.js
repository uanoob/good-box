const menuBtn = document.querySelector('.main-header__button-menu');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function() {
  openMenu();
});

function openMenu() {
  navbar.classList.toggle('navbar__hide');
}

function closeMenu() {
  navbar.classList.add('navbar__hide');
}

window.addEventListener('DOMContentLoaded', function() {
  closeMenu();
});
