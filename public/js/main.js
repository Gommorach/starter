$(document).ready(function () {
  let getConvoys = (callback) => {
    fetch('http://cunning-convoys.azurewebsites.net/api/convoys').then((response) => {
      return response.json();
    })
      .then((convoys) => {
        let currentConvoys = localStorage.getItem('convoys');
        if (currentConvoys === null) {
          currentConvoys = [];
        } else {
          currentConvoys = JSON.parse(localStorage.getItem('convoys'));
        }


        convoys.forEach((convoy) => {
          if(_.some(currentConvoys, (city) => { return city.destinationCity === convoy.destinationCity })) {
            if (!_.find(currentConvoys, {destinationCity: convoy.destinationCity})) { // is convoy already attached to city
              _.find(currentConvoys, {destinationCity: convoy.destinationCity}).convoys.push(convoy);
            }
          } else { // city doesn't exist yet)
            currentConvoys.push({
              destinationCity: convoy.destinationCity,
              convoys: [convoy]
            })
          }
        });
        localStorage.setItem('convoys', JSON.stringify(currentConvoys));
        callback(currentConvoys);
      })
      .catch(function(error) { console.log(error); });

  };

  let displayConvoyChart = (convoys) => {
    console.log(window.currentCity);
    let convoysToDisplay = []
    convoys.forEach((convoy) => {
      if (convoy.destinationCity == window.currentCity) {
        convoysToDisplay.push(convoy.convoys);
      }
    });
    let template = '<table class="table table-striped"><thead><tr><th>Distance to city</th><th>Speed</th><th>Number of vehicles</th><th>Origin</th></tr></thead><tbody>';
    convoysToDisplay.forEach((convoy) => {
      template += `<tr>
                      <td>${Math.round(convoy[0].distanceFromCityBorder)} km</td>
                      <td>${convoy[0].speedInKmPerHour} km/hour</td>
                      <td>${convoy[0].vehicles.length}</td> 
                      <td>${convoy[0].origin}</td> 
                </tr>`;
    });
    $('.city-modal-convoys').append(template);
  }

  let displayCityHistory = (city) => {
    let $populationHistory = $('.city-modal-population-history');
    let cityHistory = JSON.parse(localStorage.getItem('cityHistory'));
    if (!cityHistory) {
      $populationHistory.append('<h3>No history data yet</h3>')
    } else {
      console.log(_.find({name: city}));
    }
  };

  // call cities api
  console.log(window.url);
  if (window.location.pathname.endsWith('cities')) {
    $('body').on('click', '.city-name', (evt) => {
      let $target = $(evt.target);
      let cityRow = $target.parent().parent();
      let cityName = $target.parent().text().trim();
      let cityId = $target.attr('data-id');

      window.currentCity = cityName;
      window.cityId = cityId;

      // fetch convoys for cities
      getConvoys(displayConvoyChart);
      $('body .modal-header').text(cityName);
      let modalBody = `
            <h2>Current convoys: </h2>
            <div class="city-modal-convoys"></div>
            <h2> Population history: </h2>
            <div class="city-modal-population-history"></div>
            <h2>Kaart</h2>
      `;
      $('body .modal-body').html(modalBody);
      displayCityHistory(cityName);
      $.get('/getcoordinates', (data) => {
        console.log(data);
      });
      1
      $.post( "getcoordinates", { city: city }, (data) => {
        console.log(data);
      } );
    });


    let $citiesList = $('#cities-list');
    $citiesList.append('<a href="#" data-id="data-id" data-toggle="modal" data-target="#myModal" class="city-name">Dit is cities test</a> ');

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
                                <td><a href="#" data-id="${city.id}"">pin</a> </td> 
                            </tr>`;
            $citiesList.find('tbody').append(cityTemplate);
            let citiesInHistory;
            if (!localStorage.getItem('cities')) {
              citiesInHistory = [];
            } else {
              citiesInHistory = JSON.parse(localStorage.getItem('cities'));
            }
            cities.forEach((city) => {
              let foo = _.find(citiesInHistory, {name: city.name});
              if (foo && foo.population[foo.population.length - 1].population < city.population) {
                _.find(citiesInHistory, {name: city.name}).history.push(city.population);
              } else {
                citiesInHistory.push({
                  name: city.name,
                  history: [city.population]
                });
              }
              if (city.population / city.area > 8500) {
                // console.log(city.name + ' has a density of more than 8500 inhabitants per square kilometer');
              }
            });
          });


        })
        .catch(function (error) {
          console.log(error);
        });
    }, 2000);
  }

  if (window.location.pathname.endsWith('convoys')) {
    let $convoysList = $('#convoys-list');
    $convoysList.append('<a href="#" data-id="data-id" data-toggle="modal" data-target="#myModal" class="city-name">Dit is convoys test</a> ');

    setTimeout(() => {
      fetch('http://cunning-convoys.azurewebsites.net/api/Convoys').then((response) => {
        return response.json();
      })
        .then((convoys) => {
          $convoysList.find('tbody').empty();

          convoys.forEach((convoy, index) => {
            let convoyTemplate = `<tr>
                                <th scope="row" class="city-name">                                    
                                    <a href="#" data-id="${convoy.id}" data-toggle="modal" data-target="#myModal">${convoy.destinationCity}</a>    
                                </th>
                                <td>${Math.round(convoy.distanceFromCityBorder)} km</td>
                                <td>${convoy.speedInKmPerHour} km/hour</td>
                                <td>${convoy.vehicles.length}</td> 
                                <td>${convoy.origin}</td> 
                                <td><a href="#" data-id="${convoy.id}"">pin</a> </td>
                            </tr>`;
            $convoysList.find('tbody').append(convoyTemplate);
          });


        })
        .catch(function (error) {
          console.log(error);
        });
    }, 2000);

  }

  if (window.location.pathname.endsWith('dmv')) {

  }
});