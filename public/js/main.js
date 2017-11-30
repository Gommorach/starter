$(document).ready(function() {
  // call cities api
  console.log(window.url);
  if (window.location.pathname.endsWith('cities')) {

    console.log('first cities call api');
    setTimeout(() => {
      fetch('http://cunning-convoys.azurewebsites.net/api/Cities').then((response) => {
          return response.json();
        })
        .then((cities) => {
        $citiesList = $('#cities-list');
        $citiesList.find('tbody').empty();

        cities.forEach((city, index) => {
          let cityTemplate = `<tr>
                                <th scope="row">                                    
                                    <a href="#" data-id="${city.id}">${city.name}</a>    
                                </th>
                                <td>${city.population}</td>
                                <td>${city.area}</td>
                                <td>${city.country}</td> 
                            </tr>`;
          $citiesList.find('tbody').append(cityTemplate);
        });


      })
        .catch(function(error) { console.log(error); });
    }, 2000);
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