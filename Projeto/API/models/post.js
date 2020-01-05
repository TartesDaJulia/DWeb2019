const mongoose = require('mongoose')

var fileSchema = new mongoose.Schema({
    id: String
})

var postSchema = new mongoose.Schema({
    id:         String,
    postedBy:   String,
    datePosted: Date,
    postText:   String,
    files:      [fileSchema],
    audience: String
})




module.exports = mongoose.model('post', postSchema)