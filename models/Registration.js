const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  username:{
    type: String,
    tirm: true,
  },
  password:{
    type: String,
    tirm: true,
  }
});

module.exports = mongoose.model('Registration', registrationSchema);