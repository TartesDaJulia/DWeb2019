var File = require('../models/file')

module.exports.list = () => {
    return File
        .find()
        .exec()
}

module.exports.consult = id => {
    return File
        .findOne({_id: id})
        .exec()
}

module.exports.consultByName = name => {
    return File
        .find({name: name})
        .exec()
}

module.exports.consultByDate = date => {
    return File
        .find({dateUploaded: date})
        .exec()
}

module.exports.consultByUploader = uploader => {
    return File
        .find({uploadedBy: uploader})
        .exec()
}

module.exports.insert = file => {
    var novo = new File(file)
    return novo.save()
}

//Lista de mimeTypes
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
//para escrever "/" no tipo utilizar: %2F
//ex: text/plain ->> http://localhost:3001/files/type/text%2Fplain
module.exports.consultByType = type => {
    return File
        .find({mimeType: type})
        .exec()
}









