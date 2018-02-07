const Image = require('../models/Image');


module.exports = {
  create: function(file, uniqFilename, cb) {
    var iamge = new Image({
      name: file.originalname,
      size: file.size,
      file: uniqFilename
    })
    iamge.save((err, iamgeDoc) => {
      if (err) { return cb(err) };
      cb(null, iamgeDoc);
    })
  }

};
