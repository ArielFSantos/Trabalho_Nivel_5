import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  public selectedEditora: number=0;
  editoras: Editora[] = [
    { codEditora: 1, nome: 'Editora Aleph' },
    { codEditora: 2, nome: 'Intrinseca' },
    { codEditora: 3, nome: 'Arqueiro' }
  ];
    editoraSelecionada: Editora | null = null;

  getEditoras(): Editora[] {
    return this.editoras;
  }
  
  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora == codEditora);
    return editora ? editora.nome : '';
  }
}


