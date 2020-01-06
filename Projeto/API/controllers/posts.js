var Post = require('../models/post')

module.exports.list = () => {
    return Post
        .find()
        .exec()
}

module.exports.consult = id => {
    return Post
        .findOne({id: id})
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

module.exports.consultByDate = date => {
    return Post
        .find({datePosted: date})
        .exec()
}






