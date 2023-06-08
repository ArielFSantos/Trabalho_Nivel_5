const banco = require('./conexao'); 

const LivroSchema = banco.Schema({
_id: banco.Schema.Types.ObjectId,
codEditora:String,  
titulo: String,
resumo:String,
autores: [String],
});

module.exports = banco.model('Livro', LivroSchema); 
