export class Livro {
  codigo: string;
  titulo: string;
  autor: string[];
  editora: string;
  resumo: string;
 

  constructor( codigo: string,titulo:string,resumo:string,autor:[],editora:string) {
      this.codigo = codigo;
      this.titulo = titulo
      this.resumo = resumo
      this.autor = autor
      this.editora = editora
      
     
  }
}