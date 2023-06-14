const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    userId: {
        //TODO: add user id when integrating with login
        type: String,
        required: false
        
    },
    question :{
        type: String, 
        required : true
    },

    desc :{
        type: String, 
        required : true
    },
    comments: [{ type: schema.Types.ObjectId, ref: 'comment' }]
}, {timestamps:true})


module.exports = mongoose.model('User', userSchema)