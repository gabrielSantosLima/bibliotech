import { Autor } from '../entities/Autor.js'

export class AutorService {
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
  