/* Author: */
var hamburger = document.querySelector('#hamburger');
var nav = document.querySelector('#navigation');

hamburger.addEventListener('click', () => nav.classList.toggle('active'));