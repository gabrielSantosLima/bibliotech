import express from "express";
import LivroController from "../controllers/livrosControllers.js";

const router = express.Router();

router.get("/livros", LivroController.listarLivros)
      .get("/livros/busca", LivroController.listarLivrosPorEditora)
      .get("/livros/:id", LivroController.listarLivrosPorId)
      .post("/livros", LivroController.cadastrarLivros)
      .put("/livros/:id", LivroController.atualizarLivro)
      .delete("/livros/:id", LivroController.excluirLivro)

export default router;

//632dfe3a7d1790a59b494f7b ed