import { NextApiRequest, NextApiResponse } from 'next';
import  ControleLivros  from '../../../../classes/controle/ControleLivros';

export const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      const livro = req.body;
      controleLivro.incluirLivro(livro);
      res.status(200).json({ message: 'Sucesso' });
    } else if (req.method === 'DELETE') {
      const codigo = String(req.query.codigo);
      controleLivro.excluir(codigo);
      res.status(200).json({ message: 'Sucesso' });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).end();
  }
};
