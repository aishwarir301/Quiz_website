var mongoose = require('mongoose');

var add_schema = new mongoose.Schema({
    name: {
        type:String
    },
    image : {
        type : String
    },
    cat : {
        type :mongoose.Schema.Types.ObjectId,
        ref:'user_model'
    }
})

module.exports = mongoose.model('add',add_schema);