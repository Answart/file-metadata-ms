
function show404(req, res) {
  res.render('pages/home', { errors: [] });
}

module.exports = {
  show404: show404
};
