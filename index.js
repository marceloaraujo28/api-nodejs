const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config()


// middlewares 

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())


// Rotas da API
const personRoutes = require('./routes/personRoutes')




app.get('/', (req, res) =>{
    res.json({message: 'oi express'})  
})

//conectar ao banco de dados


mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apicluster.gtnym.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))