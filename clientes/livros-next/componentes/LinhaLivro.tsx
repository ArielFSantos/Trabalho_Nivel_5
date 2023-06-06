import { ControleEditora } from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';
import { ReactElement } from 'react';
import React, { useState, useEffect, useMemo } from 'react';
import ControleLivros from '../classes/controle/ControleLivros';

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigoLivro: number) => void
  
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props): ReactElement => {
  const controleEditora = new ControleEditora();

  
  const { livro, excluir } = props;

  return (
    <tr>
      <td>{livro.titulo} 
      <div className='.bg-danger'>
           <button type="button" className="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
     </div>

      </td>
      <td>{livro.resumo}</td>
      <td>{livro.autor}</td>
      <td>{livro.editora}</td>
    </tr>
  );
}
export default function LivroLista() {
  const [carregado, setCarregado] = useState(false);

  const controleLivro = useMemo(() => new ControleLivros(), []);

  useEffect(() => {
    if (!carregado) {
      const [livros, setLivros] = useState<Livro[]>([]);
      setCarregado(true);
    }
  }, [carregado, controleLivro]);


  const excluir = (codigoLivro:number) => {
    controleLivro.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <main>
    <h1>Catálogo de Livros</h1>
    <table className="table table-striped ">
      <thead className="thead-dark">
        <tr>
          <th >Título</th>
          <th className="w-50 p-2">Resumo</th>
          <th>Autor</th>
          <th>Editora</th>
          
        </tr>
      </thead>
      <tbody>
        {Livro.map((livro) => (
          <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
        ))}
      </tbody>
    </table>
  </main>
  );
};


