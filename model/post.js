const mongoose = require('mongoose');

const postSchema = mongoose.Schema ({
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    } ,
    categories :{
         type : mongoose.Schema.Types.ObjectId,
         ref : 'Categories'
    },
    tags : {
        type : Array,
        default : []
    },
    publish_status : {
        type : Number,
        default : false
        
    },
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
}) ;

module.exports = mongoose.model('Post',postSchema);