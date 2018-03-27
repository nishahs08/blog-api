const mongoose = require('mongoose');

const UserSchema = mongoose.Schema ({
    email : String ,
    type : ['Admin','Contributor'],
    password : String,
    contact : String,
    name : String ,
    profile_Picture : { 
        data : Buffer , contentType : String
    },
    occupation : String,
    organisation : String

}) ;

module.exports = mongoose.model('User',UserSchema);