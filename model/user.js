const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    email : {
        type : String,
        required : [true , 'email required']
    } ,
    type : {
         type : String,
        enum : ['Admin', 'Contributer'],
    },

    password : {
        type : String,
        required : [true , 'password is required']
    },
    contact : {
        type : String,
        required : [true , 'contact is required']
    },
    name : {
        type : String,
        required : [true , 'name is requird']
    } ,
    profile_Picture : { 
        data : Buffer , 
        contentType : String
    },
    occupation : {
        type : String,
        default : ""
    },
    organisation : {
        type : String,
        default : ""
    }

}) ;

module.exports = mongoose.model('User',UserSchema);