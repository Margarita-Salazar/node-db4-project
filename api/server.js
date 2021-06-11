const express = require('express')

const server = express()

const recipeRouter = require('./recipe/recipe-router')

server.use(express.json())

server.use('/api/recipes', recipeRouter)

server.use('*', (req, res)=>{
    res.send('<h1>Its working!!</h1>')
})

module.exports = server