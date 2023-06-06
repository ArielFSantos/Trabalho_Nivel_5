export class Livro {
    static map(arg0: (livro: any) => import("react").JSX.Element): import("react").ReactNode {
      throw new Error('Method not implemented.');
    }
    codigo: number;
    codEditora: number;
    editora:string;
    titulo: string;
    resumo: string;
    autor:string[];

   
  
    constructor(codEditora: number, codigo: number,titulo:string,resumo:string,autor:[],editora:string) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo
        this.resumo = resumo
        this.autor = autor
        this.editora = editora
        
       
    }
  }