import {get, post, del} from "../api.js"
import { Editora } from '../entities/Editora.js'

const PATH = "editoras"
  
export class EditoraService {
    async buscarTodos() {
      let editoras = [];
      
      try{
        const res = await get(PATH);
        editoras = await res.json();
      } 
      catch(err) {
        console.log(err);
      }

      return editoras;
    }
  
    async criar(nome, endereco) {
      const novaEditora = new Editora(undefined, nome, endereco);

      try{
        const res = await post(PATH, novaEditora)
        
        if (res.status === 201) return novaEditora
        else throw new Error('Falha ao cadastrar editora.')
      } 
      catch(err){
        console.log(err)
      }
    }
  
    async deletarPorId(id) {
      try{
        const res = await del(`${PATH}/${id}`)

        if (res.status === 200) return;
        else throw new Error('Falha ao deletar editora.')

      } catch(err){
        console.log(err)
      }
    }
}