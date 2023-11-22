const mongoose = require("mongoose")
const studentModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },

    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes",
        required: true
    }
})
module.exports = mongoose.model("studentModel", studentModel);