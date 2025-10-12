import express from "express"
import cors from "cors"
import {persons} from "./persons.js"
const port = 3333
const app = express()

app.use(cors())
app.get("/", (request, response) => {
    response.json(persons)
})

app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}!`)
})