"use strict";

var clicka = document.getElementById("toggle-menu");
clicka.addEventListener("click", function () {
  var menu01 = document.getElementById("toggleclick");
  menu01.classList.toggle("setwidth");
  var menu01 = document.getElementById("toggleclicka");
  menu01.classList.toggle("setwidtha");
  var menu01 = document.getElementById("toggleclickb");
  menu01.classList.toggle("setwidthb");
}); // $(".nav-box").each(function(index,value){
//     var nav = $(value);
//     var nav01 = nav.find(".dropdownmenu");
//     nav01.click(function(){
//         var navsub = nav.find(".sibar-menu-sub");
//         navsub.slideToggle('swing')
//     })
// })
// $(".nav-box1").each(function(index,value){
//     var nav = $(value);
//     var nav01 = nav.find(".dropdownmenu1");
//     nav01.click(function(){
//         var navsub = nav.find(".notifi__box");
//         navsub.slideToggle('swing')
//     })
// })

$(".nav-fist").click(function (e) {});
$(".nav-box1").click(function (e) {
  e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
  // Ẩn het toan bo nhung thang khac

  var navsub = $(this).find(".notifi__box");

  if ($(this).hasClass('active') == false) {
    $(".nav-box1.active").removeClass('active').find('.notifi__box').fadeOut('swing');
    $(this).addClass('active');
    navsub.fadeIn('swing');
  } else {
    $(".nav-box1.active").removeClass('active').find('.notifi__box').fadeOut('swing');
  }
});
$('body').click(function (e) {
  $(".nav-box1.active").removeClass('active').find('.notifi__box').fadeOut('swing');
}); // Set height cho Dashboard-Sidebar

var heightwindow = $(window).height();
var topmenu = $(".dashboard-nav").height();
var administrator = $(".administrator").height();
$(".dashboard-sidebar").height(heightwindow - (topmenu + administrator)); // Set height cho content

$(".content").height(heightwindow - topmenu); // Dropdown Menu Dashboard-sidebar

$(".nav-box").click(function (e) {
  e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
  // Ẩn het toan bo nhung thang khac

  var navsub = $(this).find(".sibar-menu-sub-1");

  if ($(this).hasClass('selected') == false) {
    $(".nav-box.selected").removeClass('selected').find('.sibar-menu-sub-1').slideUp('fast');
    $(this).addClass('selected');
    navsub.fadeIn('swing');
  } else {
    $(".nav-box.selected").removeClass('selected').find('.sibar-menu-sub-1').slideUp('fast');
  }
});
$(".nav-box-1").click(function (e) {
  e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
  // Ẩn het toan bo nhung thang khac

  var navsub2 = $(this).find(".sibar-menu-sub-2");

  if ($(this).hasClass('selected-1') == false) {
    $(".nav-box-1.selected-1").removeClass('selected-1').find('.sibar-menu-sub-2').slideUp('fast');
    $(this).addClass('selected-1');
    navsub2.slideDown('swing');
  } else {
    $(".nav-box-1.selected-1").removeClass('selected-1').find('.sibar-menu-sub-2').slideUp('fast');
  }
});
$(".nav-box-2").click(function (e) {
  e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
  // Ẩn het toan bo nhung thang khac

  var navsub3 = $(this).find(".sibar-menu-sub-3");

  if ($(this).hasClass('selected-2') == false) {
    $(".nav-box-2.selected-2").removeClass('selected-2').find('.sibar-menu-sub-3').slideUp('fast');
    $(this).addClass('selected-2');
    navsub3.slideDown('swing');
  } else {
    $(".nav-box-2.selected-2").removeClass('selected-2').find('.sibar-menu-sub-3').slideUp('fast');
  }
}); // nav-sub- lv3
// $(".nav-box-1").click(function(e) {
//     e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
//     // Ẩn het toan bo nhung thang khac
//     var navsub2 = $(this).siblings(".sibar-menu-sub-2");
//     if($(this).hasClass('selected-lv3') == false) {
//         $(".nav-box-1.selected").removeClass('selected-lv3').find('.sibar-menu-sub-2').slideUp('fast');
//         $(this).addClass('selected-lv3');
//         navsub2.slideDown('swing');
//     } else {
//         $(".nav-box-1.selected-lv3").removeClass('selected-lv3').find('.sibar-menu-sub-2').slideUp('fast');
//     }
// })  
// $(".sidebar-item").click(function(e) {
//     // e.stopPropagation(); // Ngan chan su kien click lan toa ra thang cha
//     // Ẩn het toan bo nhung thang khac
//     // var navsub = $(this).find(".sibar-menu-sub");
//     if($(this).hasClass('selected') == false) {
//         $(".sidebar-item.selected").removeClass('selected');
//         $(this).addClass('selected');
//     }
//      else {
//     $(".sidebar-item.selected").removeClass('selected');
//     }
// })  

$(function () {
  $("#tabs-horizontal").tabs();
  $("#tabs-vertical").tabs();
});