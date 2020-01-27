const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    id:         String,
    username:   String,
    name:       String,
    mail:       String,
    dateOfBirth:Date,
    password:   String,
    fotoPath:   String,
    course:     String,
    studentId:  String,
    type:       String
},
{
    versionKey: false
})

module.exports = mongoose.model('user', userSchema)