const multer          = require('multer'),
  upload              = multer({
  	storage: multer.memoryStorage()
  }).single('imgFile');


function showUploadedFile(req, res) {
  function returnWithErrors(err) {
    console.log(err);
    res.render('pages/home', {
      errors: []
    });
  }

  upload(req, res, function(err) {
    if (err) {
      returnWithErrors(err);
    } else if (!req.file) {
      returnWithErrors('Unable to find uploaded file.');
    } else {
      res.status(200).json({});
    }
  })
}

function show404(req, res) {
  res.redirect('/');
}

module.exports = {
  showUploadedFile: showUploadedFile,
  show404: show404
};
