const mongoose = require('mongoose');

module.exports = () => new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost/blogDb');

    mongoose.connection.on('connected',function(){
            console.log('connected');
            resolve('connected');
    });

    mongoose.connection.on('error',function(err){
        console.log('not connected',err)
        reject(err);       
    });

    mongoose.connection.on('disconnected',function(){
        console.log('disconnected');
    });

    process.on('SIGNIT',function(){
        mongoose.connection.close(function(){
            console.log('closed connection');
            process.exit(0);
        })
    })
});