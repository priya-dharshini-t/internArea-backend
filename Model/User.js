const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define your schema here
});

module.exports = mongoose.model('User', userSchema);
