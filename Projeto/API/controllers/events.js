var Event = require('../models/Event')

module.exports.list = () => {
    return Event
        .find()
        .exec()
}

module.exports.consult = id => {
    return Event
        .findOne({id: id})
        .exec()
}

module.exports.consult = title => {
    return Event
        .find({title: title})
        .exec()
}

module.exports.consultWithClassifier = classifier => {
    return Event
        .findOne({classifier: classifier})
        .exec()
}

module.exports.consultByPoster = Poster => {
    return Event
        .find({postedBy: Poster})
        .exec()
}

module.exports.consultByLocation = loc => {
    return Event
        .find({location: loc})
        .exec()
}

module.exports.consultByDate = date => {
    return Event
        .find({date: date})
        .exec()
}

module.exports.listPublic = () => {
    return Event
        .find({audience: "public"})
}

module.exports.listByType = type => {
    return Event
        .find({type:type})
}

module.exports.listByAudience = audience => {
    return Event
        .find({audience:audience})
}

module.exports.insert = event => {
    var novo = new Event(event)
    return novo.save()
}

module.exports.consultEventFiles = id => {
    return Event
    .aggregate([{ $unwind: "$files"}, {$match: {"_id":id}}])
    .exec()
}

//DEPRECATED
//find Events by event type
//db.Events.aggregate([{$unwind: "$event"},{$match:{"event.type":"gathering"}}]).pretty()
//caso nao funcione: transformar event em "event"
//module.exports.consultByEvent = event => {
//    return Event
//        .aggregate([{ $unwind: "$event"}, {$match: {"event.type":event}}])
//        .exec()
//}
//



