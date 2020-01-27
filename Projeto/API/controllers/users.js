var User = require('../models/user')

module.exports.list = () => {
    return User
        .find()
        .exec()
}

module.exports.consult = id => {
    return User
        .findOne({id: id})
        .exec()
}

module.exports.consultByUsername = username => {
    return User
        .findOne({username: username})
        .exec()
}

module.exports.consultByName = name => {
    return User
        .find({name: name})
        .exec()
}

module.exports.consultByDateOfBirth = date => {
    return User
        .find({dateOfBirth: date})
        .exec()
}

module.exports.consultByMail = mail => {
    return User
        .findOne({mail: mail})
        .exec()
}

module.exports.consultByCourse = course => {
    return User
        .find({course: course})
        .exec()
}

module.exports.insert = user =>{
    var novo = new User(user)
    return novo.save()
}


