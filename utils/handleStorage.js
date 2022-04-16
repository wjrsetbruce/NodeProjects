const multer = require("multer");

const storage = multer.diskStorage({
    destination:function(req, file, cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename:function(req, file, cb){//Asignar nombre al archivo
        //TODO: my-cv.pdf mi-foto.png mi-video.mp4
        const ext = file.originalname.split(".").pop();//TODO: ["name", "png"] agarra el ultimo valor
        const filename = `file-${Date.now()}.${ext}`;//TODO nos devuelve el formato UNIX file-16667267862.mp4
        cb(null, filename)
    },
});

const uploadMiddleware = multer ({storage});

module.exports = uploadMiddleware;