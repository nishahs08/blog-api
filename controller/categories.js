const Categories = require('../model/categories.js');

module.exports = {
    create(req,res){
        const category = new Categories(req.body);
        category.save()
        .then(function(category){
            res.json(category);
        })
        .catch(function(err){ res.json(err)})   
     },

     read(req,res){
         Categories.find({}).then(function(categories){
             res.json(categories)
         }).catch(function(err){
             res.json(err)
         })
     }
}

