const mongoose = require('mongoose')

var genreSchema = new mongoose.Schema ({
    genre: String
})
var castSchema = new mongoose.Schema ({
    name: String
})
var alunoSchema = new mongoose.Schema({
    title: String, 
    year: String,
    cast: [castSchema],
    genre: [genreSchema]
});

module.exports = mongoose.model('filme', filmeSchema)