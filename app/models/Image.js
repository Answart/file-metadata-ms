const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const imageSchema = new Schema({
  name: String,
  size: Number,
  date: String,
  file: String
}, {
  toJSON: {
    transform: function (doc, ret, options) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

const imageModel = mongoose.model('Image', imageSchema);

// middleware -----
imageSchema.pre('save', function(next) {
  this.date = new Date().toISOString();
  next();
});


module.exports = imageModel;
