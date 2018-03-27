const User = require('../model/user.js');
const Comment = require('../model/comments.js');
module.exports = {
    read(req,res)  {
         User.find({}).then(function(users){
                
                res.json(users);
            }).catch(function(err){
                res.json(err);
            })
    },

    create(req,res){
        console.log(req.body);
        const id = User.find({email : req.body.email});
        let user = new User(req.body);
        user
            .save()
            .then(function(user){
                res.json(user);
            })
            .catch(function(err){
                res.json(err);
            })
    },


    delete(req,res){
        User.findByIdAndRemove({_id : req.params.id}).then(function(user){
            res.json(user);
        }).catch(function(err){
            res.json(user)
        })
    },

    
        
}     



