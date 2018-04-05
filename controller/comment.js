const Comment = require('../model/comments.js');

module.exports = {
    create(req,res){
        const comment = new Comment(req.body);
        comment.save().then(function(comment){
            res.json(comment);
        }).catch(function(err){
            console.log(err)
            res.json(err)
        })
    },
     read(req,res){
         Comment.find({status : 1}).then(function(comments){
             res.json();
         }).catch(function(err){
             res.json(err);
         })
     },
     edit(actionType){
        return (req, res) => {
            console.log(req.params.post_id)
            if(actionType === 'approve') {
                Comment.find({post : req.params.post_id}).then(function(comments){
                comments.forEach(function(comment) {
                        if(comment.approved === false){
                            comment.status = 0;
                        }
                        console.log(comment)
                    }, this);
                res.json(comments)
                }).catch(function(err){
                    console.log(err)
                });
            }
        }
    }
}
