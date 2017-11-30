$(document).ready(function() {
  // call cities api
  console.log(window.url);
  if (window.location.pathname.endsWith('cities')) {
    $('body').on('click', '.city-name', (evt) => {
      let $target = $(evt.target);
      let cityRow = $target.parent().parent();
      $('body .modal-header').text($target.parent().text());
      let modalBody = `
        <h1>Hier komt de kaart</h1>
        <h2>Convoys: </h2>
        <div class="modal-convoys"></div>
      `;
      $('body .modal-body').html(modalBody);
    });

    let $citiesList = $('#cities-list');
    // $citiesList.append('<a href="#" data-id="data-id" data-toggle="modal" data-target="#myModal" class="city-name">dit is test-tekst</a> ');

    setTimeout(() => {
      fetch('http://cunning-convoys.azurewebsites.net/api/Cities').then((response) => {
          return response.json();
        })
        .then((cities) => {
        $citiesList.find('tbody').empty();

        cities.forEach((city, index) => {
          let cityTemplate = `<tr>
                                <th scope="row" class="city-name">                                    
                                    <a href="#" data-id="${city.id}" data-toggle="modal" data-target="#myModal">${city.name}</a>    
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