import { Editora } from '../modelo/Editora';

let editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Martins Fontes' },
  { codEditora: 2, nome: 'Editora Aleph' },
  { codEditora: 3, nome: 'Suma' },
];

export class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora?.nome;
  }
}

export default ControleEditora;
