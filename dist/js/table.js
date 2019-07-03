"use strict";

var control = document.querySelectorAll('.btn-show');
var show = document.querySelectorAll('.btn-group-func'); // popup

var lock = document.querySelector('.btn-lock');
var popup = document.querySelector('.popup-lock');
var block = document.querySelector('.btn-lock-open');
var passin = document.querySelector('.pass-in');
var error = document.querySelector('.text-vali');
document.addEventListener('DOMContentLoaded', function () {
  for (var i = 0; i < control.length; i++) {
    control[i].addEventListener('click', function () {
      this.classList.toggle('content-down');
      var index = this.nextSibling;

      if (index.style.display === "block") {
        index.style.display = "none";
      } else {
        index.style.display = "block";
      }
    });
  }

  lock.addEventListener('click', function () {
    popup.classList.add('toggleMenu');
  });
  passin.addEventListener('keyup', function () {
    if (this.value === '123') {
      popup.classList.remove('toggleMenu');
      this.value = "";
      block.classList.remove('hide-in');
      passin.classList.remove('show-in');
      error.classList.remove('toggleMenu');
      return;
    } else {
      error.classList.add('toggleMenu');
    }
  });
  block.addEventListener('click', function () {
    this.classList.add('hide-in');
    passin.classList.add('show-in'); // if(passin.className === "pass-in show-in"){
    //     var delay = setTimeout(function (){
    //         block.classList.remove('hide-in');
    //         passin.classList.remove('show-in');
    //         passin.value = "";
    //         error.classList.remove('toggleMenu');
    //     }, 10000);
    // }
    // else if(popup.className === 'popup-lock'){
    //     clearTimeout(delay());
    //     delay();
    // }
  });
});