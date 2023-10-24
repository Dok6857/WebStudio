'use strict';

function sum(first, second) {
  return first + second;
}

function getNumber(x, y) {
  //   const x = 5;
  //   const y = 10;

  const result = x * y;

  return result;
}

const openButton = document.getElementById('openButton');
const serviceElement = document.getElementById('service');

openButton.addEventListener('click', function () {
  serviceElement.classList.add('is-open');
});

const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', function () {
  serviceElement.classList.remove('is-open');
});

const mobileBurger = document.getElementById('mobileBurger');
const mobileMenu = document.getElementById('mobileMenu');

mobileBurger.addEventListener('click', function () {
  mobileMenu.classList.add('is-open');
});

const mobileMenuClose = document.getElementById('mobileMenuClose');

mobileMenuClose.addEventListener('click', function () {
  mobileMenu.classList.remove('is-open');
});
