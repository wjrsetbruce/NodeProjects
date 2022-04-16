const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {createItem} = require("../utils/storage");
//TODO https://localhost:3000/api/storage

router.post("/",uploadMiddleware.single("myfile"),(req, res), createItem);

module.exports = router;