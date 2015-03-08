var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  registration_date: {
    type: Date,
    required: true,
    default: Date.now
  }

  github_token: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('User', userSchema);