const mongoose = require('mongoose')
const ClassesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("classes", ClassesSchema)