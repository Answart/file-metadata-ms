
function showUploadedFile(req, res) {
  res.status(200).json({});
}

function show404(req, res) {
  res.redirect('/');
}

module.exports = {
  showUploadedFile: showUploadedFile,
  show404: show404
};
