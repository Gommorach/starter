var _ = require('lodash');

/**
 * GET /
 * Cities page.
 */
exports.getConvoys = (req, res) => {
  console.log('_______________GET convoys called__________________');
  res.render('convoys', {
    title: 'Convoys'
  });
};
