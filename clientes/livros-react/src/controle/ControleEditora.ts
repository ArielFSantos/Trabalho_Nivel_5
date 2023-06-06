import { Editora } from '../modelo/Editora';

let editoras: Array<Editora> = [
  { codEditora: 1, nome: 'Martins Fontes' },
  { codEditora: 2, nome: 'Editora Aleph' },
  { codEditora: 3, nome: 'Suma' },
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }
}
export function getEditoras(): Array<Editora> {
  return editoras;
}

export default ControleEditora;
