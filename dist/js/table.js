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
    passin.classList.add('show-in');
  });
});
$(function () {
  $('#mytbl tr').click(function (e) {
    var taikhoan = $(this).closest('.tr').find('td:nth-child(2)').text();
    var matkhau = $(this).closest('.tr').find('td:nth-child(3)').text();
    var hoten = $(this).closest('.tr').find('td:nth-child(4)').text();
    var chucdanh = $(this).closest('.tr').find('td:nth-child(5)').text();
    var quyen = $(this).closest('.tr').find('td:nth-child(6)').text();
    $('.tr').click(function (e) {
      /*e.preventDefault();*/
      $('#user').val(taikhoan);
      $('#password').val(matkhau);
      $('#hovaten').val(hoten);
      $('#chucdanh').val(chucdanh);
      $('#quyen').val(quyen);
    });
  });
});