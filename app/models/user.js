var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

  username: String,
  name: String,
  email: String,

  github_avatar: String,
  github_id: Number,
  github_hireable: Boolean,
  github_location: String,

  registration_date: {
    type: Date,
    required: true,
    default: Date.now
  },

});

module.exports = mongoose.model('User', userSchema);