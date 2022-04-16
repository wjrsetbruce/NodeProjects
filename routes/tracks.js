const express = require('express');
const router = express.Router();// Manejador de rutas
const { getItems, getItem, createItem } = require ("../controllers/tracks")
//TODO http://localhost/tracks GET, POST, DELETE, PUT, UPDATE (EL CRUD)

router.get("/", getItems)//TODO http://localhost/tracks
router.post("/", createItem)

module.exports = router;