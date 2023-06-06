import { useState } from 'react';
import { useRouter } from 'next/router';
import ControleEditora from '../../classes/controle/ControleEditora';
import {Livro} from '../../classes/modelo/Livro'
import Head from 'next/head';
import Menu from '../../componentes/Menu';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';


const LivroDados: React.FC = () => {
  const controleEditora = new ControleEditora();
  const baseURL = 'http://localhost:3000/api/livros';

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState<string | number>(0);

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const navigate = useRouter().push;

  const incluirLivro = async (livro: Livro): Promise<boolean> => {
    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livro),
    });

    return response.ok;
  };

  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(event.target.value);
  };

  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const livro: Livro = {
      codigo: 0,
      codEditora: Number(codEditora),
      editora: '', 
      titulo,
      resumo,
      autor: autores.split('\n'),


    };

    incluirLivro(livro).then((ok) => {
      if (ok) {
        navigate('/livrolista');
      }
    });
  };

  return (
    <div >
      <Head>
        <title>Livro Dados</title>
      </Head>
      <Menu />
      <main className="container" >
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div className="form-group">
            <label  htmlFor="titulo">Título:</label>
            <input className="form-control"
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div>
            <label  htmlFor="resumo">Resumo:</label>
            <textarea className="form-control"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="autores">Autores:</label>
            <textarea className="form-control"
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="editora">Editora:</label>
            <select  className="form-control"id="editora" value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <br />
          <button className="btn btn-primary" type="submit">Incluir</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;