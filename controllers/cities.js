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
  let cityId = req.id;
  let coords = {};
  switch (cityId) {
    case '':
      coords = {lat: '', lng: '' };
      break;
    default:
      coords = {lat: '', lng: ''};
  }
};
