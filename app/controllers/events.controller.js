const image           = require('../helpers/image.helper'),
  multer              = require('multer'),
  path                = require('path'),
  fs                  = require('fs'),
  upload              = multer({
  	storage: multer.memoryStorage()
  }).single('imgFile'),
  IMG_HEX_TYPES = {
  	jpg: 'ffd8ffe0',
  	jpg1: 'ffd8ffe1',
  	png: '89504e47',
  	gif: '47494638'
  };


function isImageFile(hex) {
	if (hex == IMG_HEX_TYPES.jpg || hex == IMG_HEX_TYPES.jpg1 || hex == IMG_HEX_TYPES.png || hex == IMG_HEX_TYPES.gif) {
    return true;
  }
}

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
      var imageFile = req.file;
      var buffer = imageFile.buffer;
      var fileTypeHex = buffer.toString('hex', 0, 4);

      if (isImageFile(fileTypeHex)) {
        var uniqFilename = imageFile.fieldname + '-' + Date.now() + path.extname(imageFile.originalname);

        fs.writeFile('public/' + uniqFilename, buffer, 'binary', function(err) {
          if (err) {
            returnWithErrors(err);
          } else {
            image.create(imageFile, uniqFilename, function(err, imageDoc) {
              if (err) {
                returnWithErrors(err);
              } else if (!imageDoc) {
                returnWithErrors('Unable to find image created.');
              } else {
                // delete image file fom app
                // delete image file from mongodb
                console.log('delete me here');
              }
              res.status(200).json(imageDoc || {});
            })
          }
        });
      } else {
        returnWithErrors('Uploaded file is not a valid image file type.');
      }
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
