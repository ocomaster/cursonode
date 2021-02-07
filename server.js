const express = require('express')
const initDB = require('./config/db')
const bodyParser = require('body-parser')

const app =  express()

const userRouters = require('./app/routes/user')
const itemsRouters = require('./app/routes/items')

app.use(
    bodyParser.json({
        limit:'20mb'
    })
)
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)
 
const  port = 3001

app.use(userRouters, itemsRouters)


app.listen(port, () =>{
    console.log('La aplicacion esta en linea 22!'); 
})

initDB()