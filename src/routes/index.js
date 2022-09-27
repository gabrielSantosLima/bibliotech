import express from "express";
import livros from "../routes/livrosRoutes.js"
import autores from "../routes/autoresRoutes.js"
import editoras from "../routes/editorasRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livros,
        autores,
        editoras
    )
}

export default routes;