const mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
    title:      String,
    description:String,
    postedBy:   String,
    datePosted: Date,
    classifiers: [String],
    file:      String,
    audience:   String,
},
{
    versionKey: false
})

module.exports = mongoose.model('post', postSchema)