const moment = require('moment/moment');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    question :{
        type: String, 
        required : false
    },

    desc :{
        type: String, 
        required : false
    },

    create_at:{
        type: Date,
        default:Date.now,
        get: function(createAt){
            return moment(createAt).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
}, {timestamps:true})


module.exports = mongoose.model('User', userSchema)