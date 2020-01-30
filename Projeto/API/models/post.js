const mongoose = require('mongoose')

var fileSchema = new mongoose.Schema({
    id: String
})

var postSchema = new mongoose.Schema({
    title:      String,
    description:String,
    postedBy:   String,
    datePosted: Date,
    classifiers: [String],
    files:      [fileSchema],
    audience:   String,
},
{
    versionKey: false
})

module.exports = mongoose.model('post', postSchema)