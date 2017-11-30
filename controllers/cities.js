var _ = require('lodash');

/**
 * GET /
 * Cities page.
 */
exports.getCities = (req, res) => {
    console.log('_______________GET home called__________________');
    console.log('lodash test: ' + _.mean([4, 2, 8, 6]));
    res.render('cities', {
        title: 'Cities'
    });
};

exports.getCoordinates = (req, res) => {
    let cityId = req.city.id;

    let city = {
        coords: '',
        title: req.name,
        country: req.country,
        area: req.area,
        population: req.population,
        cityId: cityId
    };

    switch (cityId) {
        case '0e4c36f9-5227-4308-ae08-e5e3cfc820a2':
            city.coords = {lat: 35.4437078, lng: 139.6380256};
            city.title = 'Tokyo/Yokohama';
            break;
        case '5a3dadb9-e07f-475d-be71-24270ee72aaa':
            city.coords = {lat: 40.7127753, lng: -74.0059728};
            break;
        case '3acf04ac-843f-45a9-a477-3ebfb8fc50c7':
            city.coords = {lat: -23.5505199, lng: -46.6333094};
            break;
        case 'd6acf961-db20-4910-950f-c21c657354c2':
            city.coords = {lat: 37.4601908, lng: 126.4406957};
            break;
        case 'f795f8d2-0c4a-40bf-a37e-94914970e7ed':
            city.coords = {lat: 19.4326077, lng: -99.133208};
            break;
        case 'feda2c91-062d-4660-bdd9-f3cc83b62b87':
            city.coords = {lat: 34.81402881, lng: 135.33508301};
            break;
        case 'c4e82e30-ae88-4707-aa02-1b76d230ebcb':
            city.coords = {lat: 14.5995124, lng: 120.9842195};
            break;
        case 'f6e1c37a-d1bf-412a-9b94-4788d2c1bddc':
            city.coords = {lat: 19.0759837, lng: 72.8776559};
            break;
        case 'a51d5e35-c3dc-4490-87f9-b231a7cb4dfb':
            city.coords = {lat: 28.7040592, lng: 77.1024902};
            break;
        case '16cdd352-7ce8-4643-a378-7aa927ecdc3c':
            city.coords = {lat: -6.17511, lng: 106.8650395};
            break;
        case 'e762d9a0-f548-4a86-9c02-d9ae5482a4b5':
            city.coords = {lat: 6.5243793, lng: 3.3792057};
            break;
        case 'f15e0599-283b-4eb2-8f65-1b85e4990b4c':
            city.coords = {lat: 22.572646, lng: 88.363895};
            break;
        case '70b58568-b51c-40c4-82c2-65446db9765a':
            city.coords = {lat: 30.0444196, lng: 31.2357116};
            break;
        case '7b33a55f-43b5-4155-8bf8-93261f2b596b':
            city.coords = {lat: 34.0522342, lng: -118.2436849};
            break;
        case '3488c883-7a42-45d4-83bc-d1ed5a71715a':
            city.coords = {lat: -34.6036844, lng: -58.3815591};
            break;
        case '7f7a523c-6dd4-4215-a6b6-2b94872c8da6':
            city.coords = {lat: -22.9068467, lng: -43.1728965};
            break;
        case '5b443f20-e33d-4559-87e1-a32d3c9c9f44':
            city.coords = {lat: 55.755826, lng: 37.6172999};
            break;
        case 'b7ceeb65-8b8c-4110-a2f3-5b5885adfb58':
            city.coords = {lat: 31.2303904, lng: 121.4737021};
            break;
        case '5d7c7d1e-6819-441e-bafe-0f6d33b41cf2':
            city.coords = {lat: 24.8614622, lng: 67.0099388};
            break;
        case '8c231434-8a14-48f7-81fe-f9cd06578531':
            city.coords = {lat: 48.856614, lng: 2.3522219};
            break;
        case '7215410a-c1fd-448f-8bb5-16bae92be782':
            city.coords = {lat: 41.0082376 , lng: 28.9783589};
            break;
        case 'd055b4b3-918c-4ed2-904a-942744ddaf85':
            city.coords = {lat: 35.1814464, lng: 136.906398};
            break;
        case 'e592c691-f259-4609-beeb-74ef1b1c6505':
            city.coords = {lat: 39.9041999, lng: 116.4073963};
            break;
        case '235db057-5ea6-4441-886d-4e5ae92849d8':
            city.coords = {lat: 41.8781136, lng: -87.6297982};
            break;
        case '42282ce0-078c-4194-8253-fa789b7dfff3':
            city.coords = {lat: 51.5073509 , lng: -0.1277583};
            break;

        default:
            city.coords = {lat: '0', lng: '0'};
    }
  res.setHeader('Content-Type', 'application/json');
  res.send(city);

};
