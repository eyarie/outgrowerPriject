// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var FarmSchema = new Schema({
  farmSize: String,
  farmLocation: String,
});

module.exports = mongoose.model('Farm', FarmSchema);
