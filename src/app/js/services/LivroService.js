import { get, post, del } from "../api.js";
import { Livro } from "../entities/Livro.js"

const PATH = 'livros'

export class LivroService {
    async buscarTodos() {
      let livros = [];
      
      try{
        const res = await get(PATH);
        livros = await res.json();
      } catch(err) {
        console.log(err);
      }

      return livros;
    }

    async criar(titulo, autor, editora, numPag) {
      const novoLivro = new Livro(undefined, titulo, autor, editora, numPag);

      try{
        const res = await post(PATH, novoLivro);
        
        if (res.status === 201) return novoLivro;
        else throw new Error('Falha ao cadastrar livro')

      } catch(err){
        console.log(err);
      }
      
    }

    async deletarPorId(id) {
      try{
        const res = await del(`${PATH}/${id}`);

        if (res.status === 200) return;
        else throw new Error('Falha ao deletar livro')

      } catch(err){
        console.log(err);
      }
    }
}