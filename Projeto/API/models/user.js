const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    id:         String,
    username:   String,
    name:       String,
    mail:       String,
    dateOfBirth:Date,
    hashedPass: String,
    fotoPath:   String,
    course:     String,
    type:       String
})
module.exports = mongoose.model('user', userSchema)