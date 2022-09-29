import { AutorService } from './services/AutorService.js'

function onSubmit(event) {
  event.preventDefault();
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

async function loadAuthors(){
  const autorService = new AutorService();
  const autores = await autorService.buscarTodos();
  const autoresDiv = document.querySelector(".autores");

  autores.forEach((autor) => {
    autoresDiv.innerHTML += autorToHTML(autor);
  });

  function autorToHTML(autor) {
    return `
    <div data-id="${autor._id}" class="autor">
      <label class="title">${autor.nome}</label>
      <div class="description">
          <label class="nacionality">${autor.nacionalidade}</label>
      </div>
      <div class="actions">
          <button data-id="${autor._id}" class="delete-button">
              <img data-id="${autor._id}" src="./resources/trash.svg" alt="Deletar">
          </button>
      </div>
    </div>
    `;
  }
}

async function onLoad() {
  return loadAuthors();
}

function addEvents() {
  onLoad().then(() => {
    document.querySelector(".form")?.addEventListener("submit", onSubmit);
  
    const buttons = document.getElementsByClassName("delete-button");
    for (const button of buttons) {
      button.addEventListener('click', onDelete)
    }
  });
}

function main() {
  addEvents();
}

main();
