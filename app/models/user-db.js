// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  password: String,
  account_type: String
});

module.exports = mongoose.model('User', UserSchema);
