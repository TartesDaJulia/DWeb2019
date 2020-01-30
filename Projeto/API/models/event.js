const mongoose = require('mongoose')

var fileSchema = new mongoose.Schema({
    id: String
})

var eventSchema = new mongoose.Schema({
    title:          String,
    date:           Date,
    location:       String,
    description:    String,
    type:           String, // exam, gathering etc
    audience:       String,
    datePosted:     String,
    postedBy:       String,
    files:          [fileSchema]
})

module.exports = mongoose.model('event', eventSchema)