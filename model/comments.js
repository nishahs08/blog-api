const mongoose = require('mongoose');

const commentsSchema = {
    post : {
         type : mongoose.Schema.Types.ObjectId,
         ref : 'Post',
         required : [true , 'post is required']
    },
    body : {
        type : String,
        required : [true ,'content is required']

    },
    title : {
        type : String,
        required : [true , 'title is required']
    },
    user_email : {
        type : String,
        required : [true , 'user__email']
    },
    approved :{
        type : Boolean,
        default : false
    },
    status : {
        type : Number,
        default : 1
    }
}

module.exports = mongoose.model('Comments',commentsSchema);