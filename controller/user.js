const User = require('../model/user.js');
const Comment = require('../model/comments.js');
const response = require('../helper/response.js');

module.exports = {
    read(req,res)  {
        return User.find({})
            .then(users => res.json(response.successRead(users)))
            .catch(err => res.json(response.error(err)));
    },

    create(req,res){
        let user = new User(req.body);
        return user
            .save()
            .then(users => res.json(response.successCreated(users)))
            .catch(err => res.json(response.error(err)));
    },

    delete(req,res){
        return User.findByIdAndRemove({_id : req.params.id})
            .then(user => res.json(response.successDeleted(user)))
            .catch(err => res.json(response.error(err)));
    }     
}



