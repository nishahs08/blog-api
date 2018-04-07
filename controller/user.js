const User = require('../model/user.js');
const Comment = require('../model/comments.js');
module.exports = {
    read(req,res)  {
        return User.find({})
            .then(users => res.json(users))
            .catch(err => res.json(err));
    },

    create(req,res){
        let user = new User(req.body);
        return user
            .save()
            .then(users => res.json(users))
            .catch(err => res.json(err));
    },

    delete(req,res){
        return User.findByIdAndRemove({_id : req.params.id})
            .then(user => res.json(user))
            .catch(err => res.json(err));
    }     
}



