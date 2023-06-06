const mongoose = require('./conexao');


const LivroSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: String,
  codEditora:Number,
  resumo:String,
  autores: [String],
});

const LivroModel = mongoose.model('Livro', LivroSchema, 'livros');

module.exports = LivroModel;
