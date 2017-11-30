$(document).ready(function() {
  // call cities api
  console.log(window.url);
  if (window.location.pathname.endsWith('cities')) {
    console.log('first cities call api');
    setTimeout(() => {
      console.log(`call cities api`);
    }, 10000);
  }

  if (window.location.pathname.endsWith('convoys')) {

  }

  // if (window.location.pathname.endsWith('')) {
  //
  // }

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