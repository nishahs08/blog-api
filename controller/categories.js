var Promise = require("bluebird");
const Categories = require('../model/categories.js');
const response = require('../helper/response.js');



module.exports = {
    create(req, res) {
        return Promise.coroutine(function *() {
            const category = new Categories(req.body);
            const data = yield category.save();
            return data;
        })()
            .then(data => res.json(response.successCreated(data)))
            .catch(err => res.json(response.error(err)));
    },

    read(req,res){
        return Promise.coroutine(function *() {
            return yield Categories.find({});
        })()
            .then(data => res.json(response.successRead(data)))
            .catch(err => res.json(response.error(err)));
    },

    delete(req,res){
        return Promise.coroutine(function *(){
            return yield Categories.findByIdAndRemove(req.params.id);
        })()
            .then(data => res.json(response.successDeleted(data)))
            .catch(err=>res.json(response.error(err)))
        },
    
    edit(req,res){
        return Promise.coroutine(function *(){
            return yield Categories.findByIdAndUpdate(req.params.id);
        })()
            .then(data => res.json(response.successUpdated(data)))
            .catch(err => res.json(response.error(err)))
    }
    }
