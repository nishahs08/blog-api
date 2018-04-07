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
    async read(req,res){
        try{
        const posts = await Post.find({});
         res.json(posts);
        }catch(err){
         res.json(err);
        }
      
    },
    edit(action){
        return async (req,res) => {
        if(action === 'publish'){
            try{
                const posts = await Post.update({_id : req.params.id},{$set : {publish_status : true}});
                res.json(posts);
            }catch(err){
                res.json(err);
            }

                
        }
        else if(action === 'unpublish'){
            
             try{
                const posts = await Post.update({_id : req.params.id},{$set : {publish_status : false}});
                res.json(posts);
            }catch(err){
                res.json(err);
            }

        }


        else if(action === 'edit'){
           try{
                const posts = await Post.update({_id : req.params.id},{$set: {title : req.body.title , body : req.body.body }})
                res.json(posts);
            }catch(err){
                res.json(err);
            }
        }
        else{
            console.log("error");
        }
    }},

    async delete(req,res){
        try{
        const post = await Post.findByIdAndRemove(req.params.id);
            return res.json(post);
        }catch(err){
            return res.json(err)
        }

    }
};
