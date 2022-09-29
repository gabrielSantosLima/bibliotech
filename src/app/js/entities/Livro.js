export class Livro {
    id;
    titulo;
    autor;
    editora;
    nPaginas;

    constructor(id, titulo, autor, editora, nPaginas) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.nPaginas = nPaginas;
    }
}