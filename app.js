

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route = express.Router();
const User = require('./model/user.js');
const Category =require('./model/categories.js');
const Post = require('./model/post.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

require('./route')(app);
 
mongoose.connect('mongodb://localhost/blogDb', (err)=>  {
    if(err)
        throw err;
    else {
        console.log("mongodb connection established");
        app.listen(3000,() => {
            console.log("listening at port 3000");
        });
    }
});