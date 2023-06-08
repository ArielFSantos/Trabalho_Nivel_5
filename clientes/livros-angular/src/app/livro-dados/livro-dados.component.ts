import { Livro } from '../livro';
import { Editora } from '../editora';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleLivros } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';


@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = {
    codigo: '',
    titulo: '',
    autores: [''],
    codEditora: '',
    resumo:''
  };
    public editoras: Editora[] = [];



  constructor(
    public controleEditoraService: ControleEditoraService,
    private controleLivros: ControleLivros,
    private router: Router
  ) {}

  ngOnInit() {
    this.editoras = this.controleEditoraService.getEditoras();

  }

  incluir() {
    this.controleLivros.incluirLivro(this.livro).then(() => {
      this.router.navigateByUrl('/lista');
    });
  }
}

