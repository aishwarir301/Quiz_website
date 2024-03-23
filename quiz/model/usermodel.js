var mongoose = require("mongoose")

var user_schema = new mongoose.Schema({
    name: {
        type: String
    },
    email : {
        type: String
    },
    password : {
        type: String
    },
    level : {
        type: String,
        default:1
    }
})
module.exports = mongoose.model('user_model',user_schema);