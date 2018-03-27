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
    tags : [],
    title : String,
    body : String
}) ;

module.exports = mongoose.model('Post',postSchema);