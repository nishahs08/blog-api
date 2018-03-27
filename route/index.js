const userCtrl = require('./../controller/user.js');
const categoriesCtrl = require('./../controller/categories.js');
const postCtrl = require('./../controller/post.js');
const commentCtrl = require('./../controller/comment.js');

module.exports = (app) => {
    app.post('/users',userCtrl.create );
    app.get('/users',userCtrl.read);
    app.delete('/user/:id',userCtrl.delete);

    app.post('/categories',categoriesCtrl.create);
    app.get('/categories',categoriesCtrl.read);

    app.post('/posts',postCtrl.create);
    app.get('/posts',postCtrl.read);

    app.get('/post/:id/comments',commentCtrl.read);
    app.post('/post/:id/comments',commentCtrl.create);
    app.put('/post/:postid/comment/:commentid',commentCtrl.edit('approve'));
};

