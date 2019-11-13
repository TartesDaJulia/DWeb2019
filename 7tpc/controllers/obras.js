var obra = require('../models/obras')


//Devolve a lista de alunos
module.exports.listar = () => {
    return obra
        .find({},{_id:0,id:0})
        .exec()
}

module.exports.consultarPer = per => {
    return obra
        .find({periodo: per},{_id:0,id:0})
        .exec()
}

module.exports.consultarAno = ano => {
    var anoInt = parseInt(ano)
    return obra
        .find({anoCriacao: anoInt},{_id:0,id:0})
        .exec()
}

module.exports.compositor = comp => {
    return obra
        .find({compositor:comp},{_id:0,id:0})
        .exec()
}

module.exports.listarCompositores = () => {
    return obra
        .find({},{_id:0, compositor:1})
        .exec()
}

module.exports.listaObrasCompositor = comp => {
    return obra
            .aggregate([{ $unwind: "$compositor" },{ $match: { compositor : comp } },{ $group: { _id: "$compositor",Obras: {$push: {Nome: "$nome"} }} }] )
            .exec()
}

/*
db.obras.aggregate( [
    { $unwind: "$compositor" },
    { $match: { 'compositor' : "Viadana, Lodovico Grossi da" } },
    { $group: { _id: "$compositor",Obras: {$push: {Nome: "$nome"} }} }
] )
*/