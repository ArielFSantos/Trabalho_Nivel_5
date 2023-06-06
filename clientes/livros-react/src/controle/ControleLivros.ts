import { Livro } from '../modelo/Livro';

const baseURL = 'http://localhost:3030/livros';

interface LivroMongo {
  codigo: string;
  titulo: string;
  autor: string[];
  editora: string;
  resumo: string;
}

export class ControleLivrosService {
  obterLivros = async (): Promise<Livro[]> => {
    const resposta = await fetch(baseURL);
    const dados: LivroMongo[] = await resposta.json();
    return dados.map((livroMongo) => this.converterParaLivro(livroMongo));
  };

  incluirLivro = async (livro: Livro): Promise<boolean> => {
    const livroMongo: LivroMongo = this.converterParaLivroMongo(livro);
    const resposta = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livroMongo),
    });
    return resposta.ok;
  };

  excluirLivro = async (codigo: string): Promise<boolean> => {
    const resposta = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    return resposta.ok;
  };

  private converterParaLivro = (livroMongo: LivroMongo): Livro => {
    return {
      codigo: String(livroMongo.codigo),
      titulo: livroMongo.titulo,
      autor: livroMongo.autor,
      editora: livroMongo.editora,
      resumo: livroMongo.resumo,
    };
  };

  private converterParaLivroMongo = (livro: Livro): LivroMongo => {
    return {
      codigo: livro.codigo.toString(),
      titulo: livro.titulo,
      autor: livro.autor,
      editora: livro.editora,
      resumo: livro.resumo,
    };
  };
}
