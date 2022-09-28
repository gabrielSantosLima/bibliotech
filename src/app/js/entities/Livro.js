export class Livro {
    id;
    titulo;
    autor;
    editora;
    numPag;

    constructor(id, titulo, autor, editora, numPag) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.numPag = numPag;
    }
}