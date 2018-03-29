const router = require('express').Router();
const userCtrl = require('./../controller/user.js');
const categoriesCtrl = require('./../controller/categories.js');
const postCtrl = require('./../controller/post.js');
const commentCtrl = require('./../controller/comment.js');

router.post('/users',userCtrl.create );
router.get('/users',userCtrl.read);
router.delete('/user/:id',userCtrl.delete);

router.post('/categories',categoriesCtrl.create);
router.get('/categories',categoriesCtrl.read);

router.post('/posts',postCtrl.create);
router.get('/posts',postCtrl.read);

router.get('/post/:id/comments',commentCtrl.read);
router.post('/post/:id/comments',commentCtrl.create);
router.put('/post/:postid/comment/:commentid',commentCtrl.edit('approve'));

module.exports = router;