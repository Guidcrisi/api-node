const express = require('express')
const routes = express.Router()

//Json que deve receber os dados do banco
let db = [
    {'1': {nome: 'Guilherme', idade: '20'}},
    {'2': {nome: 'Igor', idade: '22'}},
]

//Buscar dados
routes.get('/', (req, res) => {
    return res.json({db})
})

//Inserir dados
routes.post('/adduser', (req, res) => {
    const body = req.body
    if(!body)
        return res.status(400).end()
    db.push(body)
    return res.json(body)
}) 

//Apaga dados
routes.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    //Apaga do banco no id recebido
})

//Atualiza dados
routes.put('/update/:id/:nome/:idade', (req, res) => {
    const id = req.params.id
    const nome = req.params.nome
    const idade = req.params.idade
    console.log(id, nome, idade)
    //Atualizar o banco com os dados recebidos
})

module.exports = routes