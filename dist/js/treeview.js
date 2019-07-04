"use strict";

//----------------------------------------------------------Input Product Code--------------------------------------------------------//
var inputPoductCode = document.getElementsByClassName("productCode");
inputPoductCode[0].addEventListener('change', function () {
  var getProduct = inputPoductCode[0].value;
  var findPorduct = document.getElementsByClassName("product-wrap");

  for (var j = 0; j < findPorduct.length; j++) {
    var idProduct = findPorduct[j].id;

    if (getProduct === "") {
      findPorduct[j].classList.remove("active-treeview");
      var pdNumber = document.getElementsByClassName("productNumber");

      for (var i = 0; i < pdNumber.length; i++) {
        pdNumber[i].value = '';
      }

      continue;
    }

    if (getProduct.toUpperCase() !== idProduct) {
      var pdNumber = document.getElementsByClassName("productNumber");

      for (var i = 0; i < pdNumber.length; i++) {
        pdNumber[i].value = '';
      }

      findPorduct[j].classList.remove("active-treeview");
      continue;
    }

    if (getProduct.toUpperCase() === idProduct) {
      var pdNumber = document.getElementsByClassName("productNumber");

      for (var i = 0; i < pdNumber.length; i++) {
        pdNumber[i].value = '';
      }

      findPorduct[j].classList.add("active-treeview");
    }
  }
}); //----------------------------------------------------------Input Number Product--------------------------------------------------------//

var mChildItem = document.querySelectorAll('li');

for (var k = 0; k < mChildItem.length; k++) {
  if (mChildItem[k].className === "child-item") {
    mChildItem[k].classList.add("margin-child");
  }
}

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
} //---------------------------------------------------------- SH --------------------------------------------------------//


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
}); //----------------------------------------------------------Honda--------------------------------------------------------//

var banhxeHonda = 2;
var yenxeHonda = 1;
var daHonda = 1;
var demmutHonda = 1;
var dongcoxeHonda = 1;
var inputpdHonda = document.getElementById('pdHonda');
inputpdHonda.addEventListener('change', function () {
  var numpdHonda = inputpdHonda.value;
  var para = document.createElement("P");
  para.innerHTML = numpdHonda * banhxeHonda;
  var e = document.getElementById('banhxeHonda');
  var child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para);
  var para1 = document.createElement("P");
  para1.innerHTML = numpdHonda * yenxeHonda;
  e = document.getElementById('yenxeHonda');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para1);
  var para2 = document.createElement("P");
  para2.innerHTML = numpdHonda * daHonda;
  e = document.getElementById('daHonda');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para2);
  var para3 = document.createElement("P");
  para3.innerHTML = numpdHonda * demmutHonda;
  e = document.getElementById('demmutHonda');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para3);
  var para4 = document.createElement("P");
  para4.innerHTML = numpdHonda * dongcoxeHonda;
  e = document.getElementById('dongcoxeHonda');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para4);
}); //----------------------------------------------------------Yamaha--------------------------------------------------------//

var banhxeYamaha = 2;
var yenxeYamaha = 1;
var daYamaha = 1;
var demmutYamaha = 1;
var dongcoxeYamaha = 1;
var inputpdYamaha = document.getElementById('pdYamaha');
inputpdYamaha.addEventListener('change', function () {
  var numpdYamaha = inputpdYamaha.value;
  var para = document.createElement("P");
  para.innerHTML = numpdYamaha * banhxeYamaha;
  var e = document.getElementById('banhxeYamaha');
  var child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para);
  var para1 = document.createElement("P");
  para1.innerHTML = numpdYamaha * yenxeYamaha;
  e = document.getElementById('yenxeYamaha');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para1);
  var para2 = document.createElement("P");
  para2.innerHTML = numpdYamaha * daYamaha;
  e = document.getElementById('daYamaha');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para2);
  var para3 = document.createElement("P");
  para3.innerHTML = numpdYamaha * demmutYamaha;
  e = document.getElementById('demmutYamaha');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para3);
  var para4 = document.createElement("P");
  para4.innerHTML = numpdYamaha * dongcoxeYamaha;
  e = document.getElementById('dongcoxeYamaha');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para4);
}); //----------------------------------------------------cân 1kg -------------------------------------------------//

var vocan1kg = 1;
var matcan1kg = 1;
var matso1kg = 1;
var kim1kg = 1;
var bancan1kg = 1;
var thep1kg = 1;
var inputpdCan1kg = document.getElementById('pdCan1Kg');
inputpdHonda.addEventListener('change', function () {
  var numpdCan1kg = inputpdCan1kg.value;
  var para = document.createElement("P");
  para.innerHTML = numpdCan1kg * vocan1kg;
  var e = document.getElementById('voCan1Kg');
  var child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para);
  var para1 = document.createElement("P");
  para1.innerHTML = numpdCan1kg * matcan1kg;
  e = document.getElementById('matCan1Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para1);
  var para2 = document.createElement("P");
  para2.innerHTML = numpdCan1kg * matso1kg;
  e = document.getElementById('matsoCan1Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para2);
  var para3 = document.createElement("P");
  para3.innerHTML = numpdCan1kg * kim1kg;
  e = document.getElementById('kimCan1Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para3);
  var para4 = document.createElement("P");
  para4.innerHTML = numpdCan1kg * bancan1kg;
  e = document.getElementById('bancanCan1kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para4);
  var para5 = document.createElement("P");
  para5.innerHTML = numpdCan1kg * thep1kg;
  e = document.getElementById('thepCan1Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para5);
}); //----------------------------------------------------------cân 2kg -------------------------------------------//

var vocan2kg = 1;
var matcan2kg = 1;
var matso2kg = 1;
var kim2kg = 1;
var bancan2kg = 1;
var thep2kg = 1;
var inputpdCan2kg = document.getElementById('pdCan2Kg');
inputpdHonda.addEventListener('change', function () {
  var numpdCan2kg = inputpdCan2kg.value;
  var para = document.createElement("P");
  para.innerHTML = numpdCan2kg * vocan2kg;
  var e = document.getElementById('voCan2Kg');
  var child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para);
  var para1 = document.createElement("P");
  para1.innerHTML = numpdCan2kg * matcan2kg;
  e = document.getElementById('matCan2Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para1);
  var para2 = document.createElement("P");
  para2.innerHTML = numpdCan2kg * matso2kg;
  e = document.getElementById('matsoCan2Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para2);
  var para3 = document.createElement("P");
  para3.innerHTML = numpdCan2kg * kim2kg;
  e = document.getElementById('kimCan2Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para3);
  var para4 = document.createElement("P");
  para4.innerHTML = numpdCan2kg * bancan2kg;
  e = document.getElementById('bancanCan2kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para4);
  var para5 = document.createElement("P");
  para5.innerHTML = numpdCan2kg * thep2kg;
  e = document.getElementById('thepCan2Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para5);
}); //------------------------------------------------------------cân 5kg---------------------------------------------------//

var vocan5kg = 1;
var matcan5kg = 1;
var matso5kg = 1;
var kim5kg = 1;
var bancan5kg = 1;
var thep5kg = 1;
var inputpdCan5kg = document.getElementById('pdCan5Kg');
inputpdCan5kg.addEventListener('change', function () {
  var numpdCan5kg = inputpdCan5kg.value;
  var para = document.createElement("P");
  para.innerHTML = numpdCan5kg * vocan5kg;
  var e = document.getElementById('voCan5Kg');
  var child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para);
  var para1 = document.createElement("P");
  para1.innerHTML = numpdCan5kg * matcan5kg;
  e = document.getElementById('matCan5Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para1);
  var para2 = document.createElement("P");
  para2.innerHTML = numpdCan5kg * matso5kg;
  e = document.getElementById('matsoCan5Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para2);
  var para3 = document.createElement("P");
  para3.innerHTML = numpdCan5kg * kim5kg;
  e = document.getElementById('kimCan5Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para3);
  var para4 = document.createElement("P");
  para4.innerHTML = numpdCan5kg * bancan5kg;
  e = document.getElementById('bancanCan5kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para4);
  var para5 = document.createElement("P");
  para5.innerHTML = numpdCan5kg * thep5kg;
  e = document.getElementById('thepCan5Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para5);
}); //---------------------------------------------------------cân 10k-------------------------------------------------//

var vocan10kg = 1;
var matcan10kg = 1;
var matso10kg = 1;
var kim10kg = 1;
var bancan10kg = 1;
var thep10kg = 1;
var inputpdCan10kg = document.getElementById('pdCan10Kg');
inputpdCan10kg.addEventListener('change', function () {
  var numpdCan10kg = inputpdCan10kg.value;
  var para = document.createElement("P");
  para.innerHTML = numpdCan10kg * vocan10kg;
  var e = document.getElementById('voCan10Kg');
  var child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para);
  var para1 = document.createElement("P");
  para1.innerHTML = numpdCan10kg * matcan10kg;
  e = document.getElementById('matCan10Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para1);
  var para2 = document.createElement("P");
  para2.innerHTML = numpdCan10kg * matso10kg;
  e = document.getElementById('matsoCan10Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para2);
  var para3 = document.createElement("P");
  para3.innerHTML = numpdCan10kg * kim10kg;
  e = document.getElementById('kimCan10Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para3);
  var para4 = document.createElement("P");
  para4.innerHTML = numpdCan10kg * bancan10kg;
  e = document.getElementById('bancanCan10kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para4);
  var para5 = document.createElement("P");
  para5.innerHTML = numpdCan10kg * thep10kg;
  e = document.getElementById('thepCan10Kg');
  child = e.lastElementChild;

  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  e.appendChild(para5);
}); // $(function () {
//   var jsondata = [
//                  { "id": "ajson1", "parent": "#", "text": "Root node 1" },
//                  { "id": "ajson2", "parent": "ajson1", "text": "Child-h 1" },
//                  { "id": "ajson3", "parent": "ajson1", "text": "Child-h 2" },
//                  { "id": "ajson4", "parent": "#", "text": "Root node 2" },
//                  { "id": "ajson5", "parent": "ajson4", "text": "Child-h 3"},
//                  { "id": "ajson7", "parent": "ajson5", "text": "Child-h 5"},
//                  { "id": "ajson6", "parent": "ajson4", "text": "Child-h 4" },
//   ];
//   createJSTree(jsondata);
// });
// function createJSTree(jsondata) {
//   $('#SimpleJSTree').jstree({
//     'core': {
//       'data': jsondata
//     }
//   });
//   console.log("hello  ")     
// }
// var inputPoductCode = document.getElementById("inputProductCode");
// inputPoductCode.addEventListener('change',function(){
//   var getProduct = inputPoductCode.value;
//   var findPorduct = document.getElementsByClassName("jstree-node");
//   for(var j = 0 ; j < findPorduct.length ; j++){
//     var idProduct = findPorduct[j].id;
//     console.log(idProduct);
//     if(getProduct === ""){
//       findPorduct[j].classList.remove("active-treeview");
//       continue;
//     }
//     if(getProduct !== idProduct){
//       findPorduct[j].classList.remove("active-treeview");
//       continue;
//     }
//     if(getProduct === idProduct){
//       findPorduct[j].classList.add("active-treeview");
//     }
//   }
// });