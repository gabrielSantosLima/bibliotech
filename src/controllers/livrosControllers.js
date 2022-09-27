import livros from "../models/Livro.js"

class LivroController {
    static listarLivros = (req, res) => {
        livros.find()
        .populate('autor')
        .populate('editora')
        .exec((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>
        {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static listarLivrosPorId = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor', 'nome')
        .populate('editora', 'nome')
        .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `${err.message} - iD do livro não encontrado`})
            } else {
                res.status(200).send(livros)
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro removido com sucesso!'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarLivrosPorEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros)
        })
    }
}



export default LivroController;