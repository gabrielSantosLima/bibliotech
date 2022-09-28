class Editora {
    id;
    nome;
    endereco;
  
    constructor(id, nome, endereco) {
      this.id = id;
      this.nome = nome;
      this.endereco = endereco;
    }
  }
  
class EditoraService {
    buscarTodos() {
      let editoras = [];
      // GET para API
      return editoras;
    }
  
    criar(nome, endereco) {
      const novaEditora = new Editora(undefined, nome, endereco);
      // POST para API
    }
  
    deletarPorId(id) {
      // DELETE para API
    }
  }
  
function onSubmit() {
    const nome = document.querySelector("#name").value;
    const endereco = document.querySelector("#address").value;
    const editoraService = new EditoraService();
    editoraService.criar(nome, endereco);
  }
  
function onDelete(event) {
    const { id } = event.target.dataset;
    const editoraService = new EditoraService();
    editoraService.deletarPorId(id);
  }
  
function onLoad() {
    const editoraService = new EditoraService();
    const editoras = editoraService.buscarTodos();
    const editorasDiv = document.querySelector(".editoras");
  
    editoras.forEach((editora) => {
      editorasDiv.innerHTML += editoraToHTML(editora);
    });
  
    function editoraToHTML(editora) {
      return `
        <div data-id="${autor.id}" class="editora">
            <label class="title">${editora.nome}</label>
            <div class="description">
                <label class="address">${editora.endereco}</label>
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