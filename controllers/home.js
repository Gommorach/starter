var _ = require('lodash');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
	console.log('_______________GET home called__________________');
	console.log('lodash test: ' + _.mean([4, 2, 8, 6]));
  res.render('home', {
    title: 'Home'
  });
};
