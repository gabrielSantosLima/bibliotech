import express from "express";
import cors from "cors";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão feita com sucesso com o DB')
});

const app = express();
app.use(cors({
    origin: 'http://localhost:5500'
}))
app.use(express.json());
routes(app);

export default app;