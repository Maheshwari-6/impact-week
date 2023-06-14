const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: true
    }
}, {timestamps:true})
module.exports = mongoose.model("comment", commentSchema)