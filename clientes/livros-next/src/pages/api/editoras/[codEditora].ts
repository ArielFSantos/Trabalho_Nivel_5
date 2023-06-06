import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../../classes/controle/ControleEditora';


export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const codEditora = Number(req.query.codEditora);
      const controleEditora = new ControleEditora();
      const nomeEditora = controleEditora.getNomeEditora(codEditora);

      res.status(200).json({ nome: nomeEditora });
    } else {
      res.status(405).end(); 
    }
  } catch (error) {
    console.error(error);
    res.status(500).end(); 
  }
};
