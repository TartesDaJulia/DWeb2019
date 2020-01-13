const mongoose = require('mongoose')

var pubSchema = new mongoose.Schema({
    type:         String,
    id:   String,
    authors:       [String],
    title:       String,
    booktitle:Date,
    address: String,
    howpublished: String,
    year:   String,
    month:     String,
    doi:  String
})

module.exports = mongoose.model('pub', pubSchema)