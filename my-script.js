'use strict';

const openButton = document.querySelector('.hero-button');
const backdropElement = document.querySelector('.backdrop');

openButton.addEventListener('click', () => {
  backdropElement.classList.add('is-open');
});

const closeButton = document.querySelector('.close-btn');

closeButton.addEventListener('click', () => {
  backdropElement.classList.remove('is-open');
});

const mobileBurger = document.getElementById('mobileBurger');
const mobileMenu = document.getElementById('mobileMenu');

mobileBurger.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
});

const mobileMenuClose = document.getElementById('mobileMenuClose');

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
});
