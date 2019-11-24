var Ficheiro = require('../models/ficheiro.js')

//Devolve lista de ficheiros

module.exports.listar = () => {
    return Ficheiro
        .find()
        .exec()
}