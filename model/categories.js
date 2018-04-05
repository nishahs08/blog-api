const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema ({
     name : {
         type : String,
         required : true
     },
     description : {
         type : String,
         dafault : ""
     },
     
})

module.exports = mongoose.model('Categories',categoriesSchema);