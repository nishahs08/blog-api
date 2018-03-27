const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema ({
     name : String,
     description : String
})

module.exports = mongoose.model('Categories',categoriesSchema);