var Post = require('../models/post')

module.exports.list = () => {
    return Post
        .find()
        .exec()
}

module.exports.consult = id => {
    return Post
        .findOne({_id: id})
        .exec()
}

module.exports.consultWithClassifier = classifier => {
    return Post
        .findOne({classifier: classifier})
        .exec()
}

module.exports.consultByPoster = poster => {
    return Post
        .find({postedBy: poster})
        .exec()
}

module.exports.consultByDate = date => {
    return Post
        .find({datePosted: date})
        .exec()
}

module.exports.listPublic = () => {
    return Post
        .find({audience: "public"})
}

module.exports.insert = post => {
    var novo = new Post(post)
    return novo.save()
}

module.exports.consultPostFiles = id => {
    return Post
    .aggregate([{ $unwind: "$files"}, {$match: {"_id":id}}])
    .exec()
}

//DEPRECATED
//find posts by event type
//db.posts.aggregate([{$unwind: "$event"},{$match:{"event.type":"gathering"}}]).pretty()
//caso nao funcione: transformar event em "event"
//module.exports.consultByEvent = event => {
//    return Post
//        .aggregate([{ $unwind: "$event"}, {$match: {"event.type":event}}])
//        .exec()
//}




