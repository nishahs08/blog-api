const Post = require('../model/post.js');
const response = require('../helper/response.js');

module.exports = {
    create(req,res){
        const post = new Post(req.body);
        post
            .save()
            .then(function(post){
                res.json(response.successCreated(post))
            })
            .catch(function(err){
                res.json(response.error(err))                                                                                                
            })
    },
    async read(req,res){
        try{
        const posts = await Post.find({});
         res.json(response.successRead(posts));
        }catch(err){
         res.json(response.error(err));
        }
      
    },
    edit(action){
        return async (req,res) => {
        if(action === 'publish'){
            try{
                const posts = await Post.update({_id : req.params.id},{$set : {publish_status : true}});
                res.json(response.successUpdated(posts));
            }catch(err){
                res.json(response.error(err));
            }

                
        }
        else if(action === 'unpublish'){
            
             try{
                const posts = await Post.update({_id : req.params.id},{$set : {publish_status : false}});
                res.json(response.successUpdated(posts));
            }catch(err){
                res.json(response.error(err));
            }

        }


        else if(action === 'edit'){
           try{
                const posts = await Post.update({_id : req.params.id},{$set: {title : req.body.title , body : req.body.body }})
                res.json(response.successUpdated(posts));
            }catch(err){
                res.json(response.error(err));
            }
        }
        else{
            res.json(response.error(err));
        }
    }},

    async delete(req,res){
        try{
        const post = await Post.findByIdAndRemove(req.params.id);
            return res.json(response.successDeleted(posts));
        }catch(err){
            return res.json(response.error(err));
        }

    }
};
