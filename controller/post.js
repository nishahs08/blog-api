const Post = require('../model/post.js');

module.exports = {
    create(req,res){
        const post = new Post(req.body);
        post
            .save()
            .then(function(post){
                res.json(post)
            })
            .catch(function(err){
                res.json(err)                                                                                                
            })
    },
    read(req,res){
        Post
            .find({})
            .then(function(posts){
                res.json(posts)
            })
            .catch(function(err){
                res.json(err) 
            })
    }
};