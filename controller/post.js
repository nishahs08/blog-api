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
    },
    edit(action){
        return (req,res) => {
        if(action === 'publish'){
            Post
                .update({_id : req.params.id},{$set : {publish_status : true}})
                .then(function(post){
                    res.json(post)
                })
                .catch(function(err){
                    res.json(err);
                })
        }
        else if(action === 'unpublish'){
             Post
                .update({_id : req.params.id},{$set: {publish_status : false}})
                .then(function(post){
                    res.json(post)
                })
                .catch(function(err){
                    res.json(err);
                })
        }
        else if(action === 'edit'){
            Post
                .update({_id : req.params.id},{$set: {title : req.body.title , body : req.body.body }})
                .then(function(post){
                    res.json(post)
                })
                .catch(function(err){
                    res.json(err);
                })
        }
        else{
            console.log("error");
        }
    }},

    delete(req,res){
        Post
            .findByIdAndRemove({_id : req.params.id})
            .then(function(post){
                res.json(post)
            })
            .catch(function(err){
                res.json(err)
            })
    }
};
