class Livro {
    id;
    titulo;
    autor;
    editora;
    numPag;

    constructor(id, titulo, autor, editora, numPag,) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.numPag = numPag;
    }
}

class LivroService {
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

function onSubmit() {
    const titulo = document.querySelector("#titulo").value;
    const autor = document.querySelector("#autor").value;
    const editora = document.querySelector("#numPag").value;
    const numPag = document.querySelector("#numPag").value;
    const livroService = new LivroService();
    livroService.criar(titulo, numPag);
}

function onDelete(event) {
    const { id } = event.target.dataset;
    const livroService = new LivroService();
    livroService.deletarPorId(id);
}

function onLoad() {
    const livroService = new LivroService();
    const livros = livroService.buscarTodos();
    const livrosDiv = document.querySelector(".livros");

    livros.forEach((livro) => {
        livrosDiv.innerHTML += livroToHTML(livro);
    });

    function livroToHTML(livro) {
        return `
    <div data-id="${livro.id}" class="livro">
        <label class="title">${livro.titulo}</label>
        <div class="description">
            <label class="pages">${livro.numPag}</label>
            <label class="author">Escrito por: Meu Autor</label>
            <label class="publisher">Publicado por: Minha Editora</label>
        </div>
        <div class="actions">
            <button data-id="${livro.id}" class="delete-button">
                <img data-id="${livro.id}" src="./resources/trash.svg" alt="Deletar">
            </button>
        </div>
    </div>
    `;
    }
}

function addEvents() {
    onLoad();
    document.querySelector(".form")?.addEventListener("submit", onSubmit);
    document.querySelector(".delete-button")?.addEventListener("click", onDelete);
}

function main() {
    addEvents();
}

main();
