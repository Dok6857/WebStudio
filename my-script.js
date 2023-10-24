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
