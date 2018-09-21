//open menu
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

// popup
const showModalBtns = document.querySelectorAll('.products__button--calc');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal-feedback');
const closeModalBtn = document.querySelector('.modal-feedback__close');

showModalBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    showModal(event);
  });
});

closeModalBtn.addEventListener('click', function() {
  closeModal(event);
});

function showModal(event) {
  event.preventDefault();
  overlay.classList.add('overlay-show');
  modal.classList.add('modal-feedback__show');
}

function closeModal(event) {
  event.preventDefault();
  overlay.classList.remove('overlay-show');
  modal.classList.remove('modal-feedback__show');
}

//send data
const submitIntroBtn = document.querySelector('.intro__button');
const submitModalBtn = document.querySelector('.modal-feedback__button');

submitIntroBtn.addEventListener('click', function() {
  sendData(event);
});
submitModalBtn.addEventListener('click', function() {
  sendData(event);
});

function sendData(event) {
  event.preventDefault();
}