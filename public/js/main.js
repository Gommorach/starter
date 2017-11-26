$(document).ready(function() {
  $.ajax({
    url: '/data',
    success: (data) => {
      console.log(JSON.parse(data));
      var ctx = document.getElementById("myChart").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: JSON.parse(data),
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero:true
              }
            }]
          }
        }
      });
    }
  });
});