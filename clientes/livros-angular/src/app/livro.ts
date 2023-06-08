export class Livro {
  codigo: string;
  titulo: string;
  autores: string[];
  codEditora: string;
  resumo: string;
 

  constructor( codigo: string,titulo:string,resumo:string,autores:[],codEditora:string) {
      this.codigo = codigo;
      this.titulo = titulo
      this.resumo = resumo
      this.autores = autores
      this.codEditora = codEditora
      
     
  }
}