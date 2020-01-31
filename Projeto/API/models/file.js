const mongoose = require('mongoose')

var fileSchema = new mongoose.Schema({
    idDate:         String,
    name:           String,
    description:    String,
    path:           String,
    mimeType:       String,     //https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
    size:           Number,
    dateUploaded:   Date,
    uploadedBy:     String,
},
{
    versionKey: false
})

module.exports = mongoose.model('file', fileSchema)