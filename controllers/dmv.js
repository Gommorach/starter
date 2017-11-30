var _ = require('lodash');

/**
 * GET /
 * Cities page.
 */
exports.getDmv = (req, res) => {
  console.log('_______________GET other called__________________');
  res.render('dmv', {
    title: 'DMV'
  });
};
