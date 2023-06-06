import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ControladorLivro from './controle/ControleLivros';
import { getEditoras } from './controle/ControleEditora';


function LivroDados() {
  const controleLivro = new ControladorLivro();
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [editora, setEditora] = useState('');
  const [opcoes, setOpcoes] = useState([]);
  
  const navigate = useNavigate();

  function incluir(event) {
    event.preventDefault();
    const livro = {
      codLivro: 0,
      titulo,
      resumo,
      autor: autores,
      editora,
    };
    controleLivro.incluir(livro);
    navigate('/');
  }

  useEffect(() => {
    const editora = getEditoras();
    const opcoes = editora.map(editora => ({
      value: editora.codEditora,
      text: editora.nome
    }));
    setOpcoes(opcoes);
  }, []);

  return (
    <main>
      <h1>Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input className="form-control" id="titulo" type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="resumo">Resumo:</label>
          <textarea className="form-control" id="resumo" rows="3" value={resumo} onChange={e => setResumo(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="editora">Editora:</label>
          <select className="form-control" id="editora" value={editora} onChange={e => setEditora(e.target.value)}>
          <option value="" disabled selected>Selecione a Editora</option>
            {opcoes.map(opcao => (
              <option key={opcao.value} value={opcao.text}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="autores">Autores:</label>
          <textarea className="form-control" id="autores" rows="3" value={autores} onChange={e => setAutores(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Salvar Dados</button>
      </form>
    </main>
  );
}

export default LivroDados;