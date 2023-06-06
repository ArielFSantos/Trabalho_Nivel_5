import { useState, useEffect } from 'react';
import Head from 'next/head';
import Menu from '../../componentes/Menu';
import { NextPage } from 'next';
import React from 'react';

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
  const resposta = await fetch(baseURL);
  return resposta.json();
};

const excluirLivro = async (codigo: number) => {
  const resposta = await fetch(baseURL, {
    method: 'DELETE',    
  });
  return resposta.ok;
};

const LivroLista:NextPage = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      obter().then((dados) => {
        setLivros(dados);
        setCarregado(true);
      });
    }
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const excluidoComSucesso = await excluirLivro(codigo);
    if (excluidoComSucesso) {
      const livrosAtualizados = livros.filter((livro: any) => livro.codigo !== codigo);
      setLivros(livrosAtualizados);
    }
  };
  
  return (
    <div>
      <Head>
        <title>Livro Lista</title>
      </Head>
      <Menu />
      <main className="container">
        <h1>Catálogo de Livros</h1>
        <table className="table table-striped">
          <thead className=".bg-dark">
            <tr>
              <th className="p-3 mb-2 bg-dark text-white">Título</th>
              <th className="w-50  mb-2 bg-dark text-white p-3">Resumo</th>
              <th className="p-3 mb-2 bg-dark text-white">Autor</th>
              <th className="p-3 mb-2 bg-dark text-white">Editora</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro: any) => (
              <tr key={livro.codigo}>
                <td>{livro.titulo} <br/>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => excluir(livro.codigo)}>Excluir</button>

                  </td>
                <td>{livro.resumo}</td>
                <td>{livro.autor}</td>
                <td>{livro.editora}</td>
                <td>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
