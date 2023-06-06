import { Livro } from '../livro';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ControleLivros } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = {
    codigo: '',
    titulo: '',
    autor: [''],
    editora: '',
    resumo:''
  };

  constructor(
    private controleLivros: ControleLivros,
    private router: Router
  ) {}

  ngOnInit() {}

  incluir() {
    this.controleLivros.incluirLivro(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  }
}

