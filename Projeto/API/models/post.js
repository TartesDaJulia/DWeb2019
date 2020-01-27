const mongoose = require('mongoose')

var fileSchema = new mongoose.Schema({
    id: String
})

var eventSchema = new mongoose.Schema({
    title:          String,
    date:           Date,
    location:       String,
    description:    String,
    type:           String //photo, exam, garthering etc
})

var postSchema = new mongoose.Schema({
    id:         String,
    postedBy:   String,
    datePosted: Date,
    classifier: String,
    files:      [fileSchema],
    audience:   String,
    event:      eventSchema
},
{
    versionKey: false
})

module.exports = mongoose.model('post', postSchema)