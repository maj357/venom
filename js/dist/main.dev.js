"use strict";

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.nav-menu');
var menuCloseButton = document.querySelector('.menu-close');
menuButton.addEventListener('click', function () {
  menu.classList.add('is-active');
  menuCloseButton.classList.add('is-active');
});
menuCloseButton.addEventListener('click', function () {
  menu.classList.remove('is-active');
  menuCloseButton.classList.remove('is-active');
});