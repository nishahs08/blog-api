const Comment = require('../model/comments.js');
const response = require('../helper/response.js');

module.exports = {
    create(req,res){
        const comment = new Comment(req.body);
        comment.save().then(function(comment){
            res.json(response.successCreated(comment));
        }).catch(function(err){
            console.log(err)
            res.json(response.error(err))
        })
    },
     read(req,res){
         Comment.find({approved : true,status : 1}).then(function(comments){
             
             res.json(response.successRead(comments));
         }).catch(function(err){
             res.json(response.error(err));
         })
     },
     edit(actionType){
        return (req, res) => {
            console.log(req.params.post_id)
            if(actionType === 'approve') {
                Comment.update(
                    {
                        post : req.params.postid , 
                        _id : req.params.commentid
                    },
                    { $set : { approved : true}}
                )
                    .then(function(comments){
                
                        res.json(response.successUpdated(comments))
                    }).catch(function(err){
                        res.json(response.error(err));
                    });
            }
        }
    }
}
