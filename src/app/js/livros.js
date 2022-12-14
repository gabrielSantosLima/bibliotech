import { EditoraService } from "./services/EditoraService.js"
import { AutorService } from "./services/AutorService.js"
import { LivroService } from './services/LivroService.js'

function onSubmit(event) {
  event.preventDefault();
  const titulo = document.querySelector("#title").value;
  const autor = document.querySelector("#author").value;
  const editora = document.querySelector("#publisher").value;
  const numPag = document.querySelector("#pages").value;
  const livroService = new LivroService();
  livroService.criar(titulo, autor, editora, numPag).then(() => location.reload());
}

function onDelete(event) {
  const { id } = event.target.dataset;
  const livroService = new LivroService();
  livroService.deletarPorId(id).then(() => location.reload());
}

async function loadBooks() {
  const livroService = new LivroService();
  const livros = await livroService.buscarTodos();
  const livrosDiv = document.querySelector(".livros");

  livros.forEach((livro) => {
    livrosDiv.innerHTML += livroToHTML(livro);
  });

  function livroToHTML(livro) {
    return `
        <div data-id="${livro._id}" class="livro">
            <label class="title">${livro.titulo}</label>
            <div class="description">
                <label class="pages">${livro.nPaginas} página(s)</label>
                <label class="author">Escrito por: ${livro.autor.nome}</label>
                <label class="publisher">Publicado por: ${livro.editora.nome}</label>
            </div>
            <div class="actions">
                <button data-id="${livro._id}" class="delete-button">
                    <img data-id="${livro._id}" src="./resources/trash.svg" alt="Deletar">
                </button>
            </div>
        </div>
        `;
  }
}

async function loadAuthorsNames() {
  const autorSelect = document.querySelector('#author')
  const autorService = new AutorService()
  const autores = await autorService.buscarTodos()

  autores.forEach(autor => {
    autorSelect.innerHTML += autorToOptionHTML(autor)
  })

  function autorToOptionHTML(autor) {
    return `
        <option value="${autor._id}">${autor.nome}</option>
        `
  }
}

async function loadPublishersNames() {
  const editoraSelect = document.querySelector('#publisher')
  const editoraService = new EditoraService()
  const editoras = await editoraService.buscarTodos()

  editoras.forEach(editora => {
    editoraSelect.innerHTML += editoraToOptionHTML(editora)
  })

  function editoraToOptionHTML(editora) {
    return `
        <option value="${editora._id}">${editora.nome}</option>
        `
  }
}

async function onLoad() {
  return Promise.allSettled([loadBooks(), loadAuthorsNames(), loadPublishersNames()]);
}

function addEvents() {
  onLoad().then(() => {
    document.querySelector(".form")?.addEventListener("submit", onSubmit);
    const buttons = document.getElementsByClassName("delete-button")
    for (const button of buttons) {
      button.addEventListener('click', onDelete)
    }
  });
}

function main() {
  addEvents();
}

main();
