const express = require('express');
const fs = require("fs")
const router = express.Router();

const PATH_ROUTES = __dirname;//TODO

const removeExtension = (fileName) => {
    //TODO tracks.js [tracks, js]
    return fileName.split('.').shift()//TODO agarra el primer valor
}

fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file)//TODO index, tracks
    if (name!=='index'){
        console.log(`Cargando rutas ${name}`)
        //router.use(`/${name}`, require(`./${file}`))
    }

})
module.exports = router;