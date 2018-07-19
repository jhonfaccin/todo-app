const express = require('express')

module.exports = function(server){

    //API router
    const router = express.Router()
    server.use('/api',router)

    //TODO router
    const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')
}