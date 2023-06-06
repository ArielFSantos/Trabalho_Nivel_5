export class Livro {
    codigo: number;
    codEditora: number;
    editora:string;
    titulo: string;
    resumo: string;
    autor:string[];
    ano:number;
   
  
    constructor(codEditora: number, codigo: number,titulo:string,resumo:string,autor:[],ano:number,editora:string) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo
        this.resumo = resumo
        this.autor = autor
        this.ano = ano
        this.editora = editora
        
       
    }
  }