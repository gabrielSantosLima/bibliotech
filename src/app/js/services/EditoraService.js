import { Editora } from '../entities/Editora.js'
  
export class EditoraService {
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