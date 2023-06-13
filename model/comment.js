const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    userId: {
    },
    text: {
        type: String,
        required: true
    },
    questionId: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("comment", commentSchema)