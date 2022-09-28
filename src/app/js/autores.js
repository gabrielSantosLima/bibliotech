import { AutorService } from './services/AutorService.js'

function onSubmit() {
  const nome = document.querySelector("#name").value;
  const nacionalidade = document.querySelector("#nacionality").value;
  const autorService = new AutorService();
  autorService.criar(nome, nacionalidade);
}

function onDelete(event) {
  const { id } = event.target.dataset;
  const autorService = new AutorService();
  autorService.deletarPorId(id);
}

function loadAuthors(){
  const autorService = new AutorService();
  const autores = autorService.buscarTodos();
  const autoresDiv = document.querySelector(".autores");

  autores.forEach((autor) => {
    autoresDiv.innerHTML += autorToHTML(autor);
  });

  function autorToHTML(autor) {
    return `
    <div data-id="${autor.id}" class="autor">
      <label class="title">${autor.nome}</label>
      <div class="description">
          <label class="nacionality">${autor.nacionalidade}</label>
      </div>
      <div class="actions">
          <button data-id="${autor.id}" class="delete-button">
              <img data-id="${autor.id}" src="./resources/trash.svg" alt="Deletar">
          </button>
      </div>
    </div>
    `;
  }
}

function onLoad() {
  loadAuthors()
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
