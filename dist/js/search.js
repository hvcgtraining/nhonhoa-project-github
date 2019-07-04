"use strict";
"use strick";

$(".btn-advanced").click(function () {
  $(".search-advanced").toggleClass("show");
}); // var name = [
//     'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
//     'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
//     'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
//     'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
//     'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
//     'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
//     'New Jersey', 'New Mexico', 'New York', 'North Carolina', 
//     'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
//     'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 
//     'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 
//     'West Virginia', 'Wisconsin', 'Wyoming'
//   ];
// var maso = [
//     'MS0001', 'MS0002', 'MS0003', 'MS0004', 'MS0005',
//     'MS0006', 'MS0007', 'MS0008', 'MS0009', 'MS0010', 
//     'MS0011', 'MS0012'
// ];
//   $(function() {
//     $("#name").autocomplete({
//       source:[name]
//     }); 
//     $("#maso").autocomplete({
//         source:[maso]
//       }); 
//   });