class Autor {
  id;
  nome;
  nacionalidade;

  constructor(id, nome, nacionalidade) {
    this.id = id;
    this.nome = nome;
    this.nacionalidade = nacionalidade;
  }
}

class AutorService {
  buscarTodos() {
    let autores = [];
    // GET para API
    return autores;
  }

  criar(nome, nacionalidade) {
    const novoAutor = new Autor(undefined, nome, nacionalidade);
    // POST para API
  }

  deletarPorId(id) {
    // DELETE para API
  }
}

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

function onLoad() {
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

function addEvents() {
  onLoad();
  document.querySelector(".form")?.addEventListener("submit", onSubmit);
  document.querySelector(".delete-button")?.addEventListener("click", onDelete);
}

function main() {
  addEvents();
}

main();
