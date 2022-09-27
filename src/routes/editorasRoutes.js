import express from "express"
import EditoraController from "../controllers/editoraController.js"

const router = express.Router()

router.get("/editoras", EditoraController.listarEditoras)

export default router;