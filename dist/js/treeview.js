"use strict";

var toggler = document.getElementsByClassName("parent-tv");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    var b = this.nextSibling;

    if (b.className === 'wrap-ul-tv' || b.className === 'wrap-ul-tv active-treeview') {
      b.classList.toggle("active-treeview");
      this.classList.toggle('icon-change');
    } else {
      var a = this.parentElement.nextSibling;
      a.classList.toggle('active-treeview');
      this.classList.toggle('icon-change');
    }
  });
}

var banhxeSH = 2;
var yenxeSH = 1;
var daSH = 1;
var demmutSH = 1;
var dongcoxeSH = 1;
var inputpdSH = document.getElementById('pdSH');
inputpdSH.addEventListener('change', function () {
  var numpdSH = inputpdSH.value;
  var para = document.createElement("P");
  para.innerHTML = numpdSH * banhxeSH;
  var e = document.getElementById('banhxeSH');
  var child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para);
  var para1 = document.createElement("P");
  para1.innerHTML = numpdSH * yenxeSH;
  e = document.getElementById('yenxeSH');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para1);
  var para2 = document.createElement("P");
  para2.innerHTML = numpdSH * daSH;
  e = document.getElementById('daSH');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para2);
  var para3 = document.createElement("P");
  para3.innerHTML = numpdSH * demmutSH;
  e = document.getElementById('demmutSH');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para3);
  var para4 = document.createElement("P");
  para4.innerHTML = numpdSH * dongcoxeSH;
  e = document.getElementById('dongcoxeSH');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para4);
});