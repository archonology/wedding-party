const mongoose = require('mongoose');
//needs mongodb location
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/weddingDB');

module.exports = mongoose.connection;