const mongoose = require('mongoose');

const timeCapsuleSchema = new mongoose.Schema({
  message: String,
  unlockDate: Date,
});

module.exports = mongoose.model('TimeCapsule', timeCapsuleSchema);
