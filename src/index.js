import express, { response } from "express"
import cors from "cors"
import {persons} from "./persons.js"
const port = 3333
const app = express()

app.use(cors())
app.use(express.json())
app.get("/", (request, response) => {
    response.json(persons)
})

app.post("/cadastrar", (request, responde) =>{
    const { user } = request.body

    console.log( user )

    response.status(201).json({message: "Usuario cadastrado com sucesso!"})
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}!`)
})