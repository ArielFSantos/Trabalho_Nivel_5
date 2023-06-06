import React, { useState, useEffect, useMemo } from 'react';
import ControleLivro from './controle/ControleLivros'


function LinhaLivro(props) {
  const { livro, excluir } = props;

  return (
    <tr>
      <td>{livro.titulo} 
        <div className='.bg-danger'>
          <button type="button" class="btn btn-danger" onClick={() => excluir(livro.codigo)}>Excluir</button>
        </div>
      </td>
      <td>{livro.resumo}</td>
      <td>{livro.autor}</td>
      <td>{livro.editora}</td>
    </tr>
  );
}
export default function LivroLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const controleLivro = useMemo(() => new ControleLivro(), []);

  useEffect(() => {
    if (!carregado) {
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }
  }, [carregado, controleLivro]);

  const excluir = (codigoLivro) => {
    controleLivro.excluir(codigoLivro);
    setCarregado(false);
  };

  return (
    <main>
      <h1>Catálogo de Livros</h1>
      <table class="table table-striped ">
        <thead class="thead-dark">
          <tr>
            <th >Título</th>
            <th class="w-50 p-2">Resumo</th>
            <th>Autor</th>
            <th>Editora</th>
            
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
}