require('dotenv').config();
const express = require('express');//Nos ayuda a levantar un servidor web
const cors = require('cors');
const dbConnect = require('./config/mongo')//Declaramos la función
const app = express();
app.use(cors());//has uso de este plugin para evitar error de origen cruzado entre navegadores
app.use(express.json())
const port = process.env.PORT || 3000//Envolver las variables de entorno

/*
    Aqui invocamos a las rutas
*/
//TODO localhost/api/________
app.use("/api", require ("./routes"))

app.listen ( port, () => {//comienza a escuchar por el puerto 3000
    console.log(`tu app está lista por http://localhost:${port}`)//Si todo está correcto devuelvenos este mensaje
})

dbConnect()