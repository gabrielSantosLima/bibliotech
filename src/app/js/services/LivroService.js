import { Livro } from "../entities/Livro.js"

export class LivroService {
    buscarTodos() {
        let livros = [];
        // GET para API
        return livros;
    }

    criar(titulo, autor, editora, numPag) {
        const novoLivro = new Livro(undefined, titulo, autor, editora, numPag);
        // POST para API
    }

    deletarPorId(id) {
        // DELETE para API
    }
}