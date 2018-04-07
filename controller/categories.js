var Promise = require("bluebird");
const Categories = require('../model/categories.js');

module.exports = {
    create(req, res) {
        return Promise.coroutine(function *() {
            const category = new Categories(req.body);
            const response = yield category.save();
            return response;
        })()
            .then(response => res.json(response))
            .catch(err => res.json(err));
    },

    read(req,res){
        return Promise.coroutine(function *() {
            return yield Categories.find({});
        })()
            .then(response => res.json(response))
            .catch(err => res.json(err));
    },

    delete(req,res){
        return Promise.coroutine(function *(){
            return yield Categories.findByIdAndRemove(req.params.id);
        })()
            .then(response => res.json(response))
            .catch(err=>res.json(err))
        },
    
    edit(req,res){
        return Promise.coroutine(function *(){
            return yield Categories.findByIdAndUpdate(req.params.id);
        })()
            .then(response => res.json(response))
            .catch(err => res.json(err))
    }
    }
