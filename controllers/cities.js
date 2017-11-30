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
