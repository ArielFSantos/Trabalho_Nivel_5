
import { Livro } from '../livro';
import { Component, OnInit } from '@angular/core';

import { ControleLivros} from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private ControleLivros: ControleLivros) { }

  ngOnInit() {
    this.ControleLivros.obterLivros().then((livros) => {
      this.livros = livros;
    });
  }

  excluir(codigo: string) {
    this.ControleLivros.excluir(codigo).then(() => {
      return this.ControleLivros.obterLivros();
    }).then((livros) => {
      this.livros = livros;
    });
  }
}
