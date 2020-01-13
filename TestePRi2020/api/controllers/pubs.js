var Pub = require('../models/pub')

module.exports.list = () => {
    return Pub
        .find({}, {"_id":0,"id": 1, "title": 1,"year":1,"type":1})
        .exec()
}

module.exports.consult = id => {
    return Pub
        .findOne({id: id})
        .exec()
}

module.exports.listTypes = () => {
    return Pub
        .distinct("type")
        .exec()
}

module.exports.consultByType = type => {
    return Pub
        .find({type: type})
        .exec()
}

module.exports.consultByTypeAndYear = (type,year) => {
    return Pub
        .find({$and: [{type: type}, {year: {$gte:year}}]})
        .exec()
}

module.exports.listAuthors = () => {
    return Pub
        .distinct("authors").sort()
        .exec()
}

module.exports.consultAuthorsPubs = author => {
    return Pub
        .aggregate(([{ $unwind: "$authors" }, {$match: {authors:"José Carlos Ramalho"}}]))
        .exec()
}



