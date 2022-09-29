import {get, post, del} from "../api.js"
import { Autor } from '../entities/Autor.js'

const PATH = "autores"

export class AutorService {
    async buscarTodos() {
      let autores = [];
      
      try{
        const res = await get(PATH);
        autores = await res.json();
      } catch(err) {
        console.log(err);
      }

      return autores;
    }
  
    async criar(nome, nacionalidade) {
      const novoAutor = new Autor(undefined, nome, nacionalidade);

      try{
        const res = await post(PATH, novoAutor);
        
        if (res.status === 201) return novoAutor;
        else throw new Error('Falha ao cadastrar autor.')

      } catch(err) {
        console.log(err);
      }
    }
  
    async deletarPorId(id) {
      try{
        const res = await del(`${PATH}/${id}`);

        if (res.status === 200) return;
        else throw new Error('Falha ao deletar autor.')
      } 
      catch(err){
        console.log(err);
      }
    }
}
  