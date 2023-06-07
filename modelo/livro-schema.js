const banco = require('./conexao'); 

const LivroSchema = banco.Schema({
_id: banco.Schema.Types.ObjectId,
codEditora:Number,  
titulo: String,
resumo:String,
autor: [String],
});

module.exports = banco.model('Livro', LivroSchema); 
