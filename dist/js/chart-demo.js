"use strict";

// Pie Chart
{
  var ctx = document.getElementById("chart-pie-1");
  var ctx = document.getElementById("chart-pie-1").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Hồ Chí Minh", "Hà Nội", "Các tỉnh khác"],
      datasets: [{
        data: [6, 3, 1],
        backgroundColor: ["#ffb1bd", "#fff3aa", "#a7deff"],
        borderColor: ["#ffb1bd", "#fff3aa", "#a7deff"],
        borderWidth: 2
      }]
    },
    options: {}
  });
}
{
  var pieChart = document.getElementById("chart-pie-2");
  var pieChart = document.getElementById("chart-pie-2").getContext("2d");
  var myChart = new Chart(pieChart, {
    type: "pie",
    data: {
      labels: ["Việt Nam", "Thái Lan", "Các nước khác"],
      datasets: [{
        data: [8, 1, 1],
        backgroundColor: ["#ffb1bd", "#fff3aa", "#a7deff"],
        borderColor: ["#ffb1bd", "#fff3aa", "#a7deff"],
        borderWidth: 2
      }]
    },
    options: {}
  });
} // Bar chart

{
  var barChart = document.getElementById("chart-bar").getContext("2d");
  var myBarChart = new Chart(barChart, {
    type: "bar",
    data: {
      labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      datasets: [{
        label: "Doanh Thu",
        backgroundColor: "#ffb1bd",
        // borderColor:"rgba(85,193,254,1)",
        // borderwidth: 1,
        // hoverBackgroundColor: "rgba(85,193,254,0.8)",
        // hoverBorderColor: "rgba(85,193,254,1)",
        data: [20, 25, 50, 55, 73, 70, 80, 90, 210, 250, 255, 300]
      }, {
        label: "Lợi nhuận",
        backgroundColor: "#a7deff",
        // borderColor:"rgba(85,193,254,1)",
        // borderwidth: 1,
        // hoverBackgroundColor: "rgba(85,193,254,0.8)",
        // hoverBorderColor: "rgba(85,193,254,1)",
        data: [10, 20, 45, 50, 60, 60, 70, 80, 190, 210, 235, 250]
      }]
    },
    options: {
      maintainAspectRatio: false // scales: {
      //   yAxes: [{
      //     stacked: true,
      //     gridLines: {
      //       display: true,
      //       color: "rgba(255,99,132,0.2)"
      //     }
      //   }],
      //   xAxes: [{
      //     gridLines: {
      //       display: false
      //     }
      //   }]
      // },

    }
  });
}
{
  var lineChart = document.getElementById("chart-line").getContext("2d");
  var myChart = new Chart(lineChart, {
    type: "line",
    data: {
      labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      datasets: [{
        label: "Lợi nhuận",
        borderColor: "#ffb1bd",
        pointBorderColor: "#ffb1bd",
        pointBackgroundColor: "#ffb1bd",
        // pointHoverBackgroundColor: "#80b6f4",
        // pointHoverBorderColor: "#80b6f4",
        // pointBorderWidth: 10,
        // pointHoverRadius: 10,
        // pointHoverBorderWidth: 1,
        // pointRadius: 3,
        fill: false,
        borderWidth: 2,
        data: [100, 110, 120, 140, 160, 170, 190, 200, 220, 250, 250, 280]
      }, {
        label: "Doanh thu",
        borderColor: "#fff3aa",
        pointBorderColor: "#fff3aa",
        pointBackgroundColor: "#fff3aa",
        // pointHoverBackgroundColor: "#80b6f4",
        // pointHoverBorderColor: "#80b6f4",
        // pointBorderWidth: 10,
        // pointHoverRadius: 10,
        // pointHoverBorderWidth: 1,
        // pointRadius: 3,
        fill: false,
        borderWidth: 2,
        data: [150, 160, 180, 205, 255, 260, 270, 290, 300, 320, 350, 380]
      }, {
        label: "Thua lỗ",
        borderColor: "#a7deff",
        pointBorderColor: "#a7deff",
        pointBackgroundColor: "#a7deff",
        // pointHoverBackgroundColor: "#80b6f4",
        // pointHoverBorderColor: "#80b6f4",
        // pointBorderWidth: 10,
        // pointHoverRadius: 10,
        // pointHoverBorderWidth: 1,
        // pointRadius: 3,
        fill: false,
        borderWidth: 2,
        data: [200, 190, 180, 170, 160, 150, 140, 130, 120, 100, 80, 60, 20]
      }]
    },
    options: {
      maintainAspectRatio: false
    }
  });
}