import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "../src/routes/index.js";

db.on("error", console.log.bind(console, 'Erro de Conexão'))
db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso.')
})


const app = express();
app.use(express.json())
routes(app);


export default app
