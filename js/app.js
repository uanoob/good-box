'use strict';

//open menu
var menuBtn = document.querySelector('.main-header__button-menu');
var navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', function () {
  openMenu();
});

function openMenu() {
  navbar.classList.toggle('navbar__hide');
}

function closeMenu() {
  navbar.classList.add('navbar__hide');
}

window.addEventListener('DOMContentLoaded', function () {
  closeMenu();
});

// popup
var showModalBtns = document.querySelectorAll('.products__button--calc');
var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal-feedback');
var closeModalBtn = document.querySelector('.modal-feedback__close');

showModalBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    showModal(event);
  });
});

closeModalBtn.addEventListener('click', function () {
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
var submitIntroBtn = document.querySelector('.intro__button');
var submitModalBtn = document.querySelector('.modal-feedback__button');

submitIntroBtn.addEventListener('click', function () {
  sendData(event);
});
submitModalBtn.addEventListener('click', function () {
  sendData(event);
});

function sendData(event) {
  event.preventDefault();
}
//# sourceMappingURL=app.js.map
