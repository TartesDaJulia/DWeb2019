const mongoose = require('mongoose')

var obrasSchema = new mongoose.Schema ({
    id: String,
    nome : String,
    desc: String,
    anoCricao: Number,
    periodo: String,
    compositor: String,
    duracao: String
})

module.exports = mongoose.model('obras', obrasSchema)