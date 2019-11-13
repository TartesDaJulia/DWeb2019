var Compositor = require('../models/compositores')


//Devolve a lista de alunos
module.exports.listar = () => {
    return Compositor
        .find()
        .exec()
}

module.exports.consultarPer = per => {
    return Compositor
        .find({periodo: per})
        .exec()
}

module.exports.consultarAno = ano => {
    return Compositor
        .find({$and: [{dataNasc: {$lte:ano}}, {dataObito: {$gte:ano}}]})
        .exec()
}

module.exports.consultarAnoePer = (ano,per) => {
    return Compositor
        .find({$and: [{dataNasc: {$lte:ano}}, {dataObito: {$gte:ano}},
                    {periodo:per}]})
        .exec()
}

module.exports.consultar = id => {
    return Compositor
        .findOne({_id: id})
        .exec()
}