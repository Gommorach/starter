
/**
 * GET /contact
 * Contact form page.
 */
exports.getCharts = (req, res) => {
  res.render('charts', {
    title: 'Charts'
  });
};