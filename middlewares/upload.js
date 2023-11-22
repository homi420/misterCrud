const multer = require('multer')
const fs = require("fs")
const destinationFolder = './uploads';

// Check if the destination folder exists, and create it if not
if (!fs.existsSync(destinationFolder)) {
    fs.mkdirSync(destinationFolder);
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, destinationFolder)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname.replace(/\s/g, ''))
    }
})
const upload = multer({ storage: storage })
module.exports = upload;