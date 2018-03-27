const mongoose = require('mongoose');

const commentsSchema = {
    post : {
         type : mongoose.Schema.Types.ObjectId,
        ref : 'Post'
    },
    body : String,
    title : String,
    user_email : String,
    approved : Boolean,
    status : Boolean
}

module.exports = mongoose.model('Comments',commentsSchema);