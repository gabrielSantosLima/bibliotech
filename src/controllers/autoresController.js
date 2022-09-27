import autores from "../models/Autor.js"

class AutorController {
    static listarAutores = (req, res) =>{
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id não encontrado`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Autor removido'})
            }else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static cadastrarAutor = (req, res) =>{
        let autor = new autores(req.body)

        autor.save((err) => {
            if(err) {
                res.status(500).send({message: err.message})
            }
            else {
                res.status(201).send(autor.toJSON())
            }
        })

    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id 

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor atualizado!'})
            }
            else 
            {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutorController;
