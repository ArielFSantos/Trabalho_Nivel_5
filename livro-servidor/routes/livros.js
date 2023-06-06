const express = require('express');
const router = express.Router();
const LivroDAO = require('../../modelo/livro-dao');

router.get('/', async (req, res) => {
  try {
    const livros = await LivroDAO.obterLivros();
    res.json(livros);
  } catch (error) {
    console.error('Erro ao obter livros:', error);
    res.status(500).json({ error: 'Erro ao obter livros' });
  }
});

router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    await LivroDAO.incluir(livro);
    res.json({ message: 'Livro incluído com sucesso' });
  } catch (error) {
    console.error('Erro ao incluir livro:', error);
    res.status(500).json({ error: 'Erro ao incluir livro' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    await LivroDAO.excluir(codigo);
    res.json({ message: 'Livro excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    res.status(500).json({ error: 'Erro ao excluir livro' });
  }
});

module.exports = router;
