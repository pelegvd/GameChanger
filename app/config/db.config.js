const mongoose = require('mongoose');

var mongoDB = 'mongodb+srv://gamechangerdb:Jolthit2023^@cluster0.www3fos.mongodb.net/';
mongoose.connect(mongoDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;