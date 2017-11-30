var _ = require('lodash');

/**
 * GET /
 * Cities page.
 */
exports.getDashboard = (req, res) => {
  console.log('_______________GET other called__________________');
  res.render('dashboard', {
    title: 'Dashboard'
  });
};
