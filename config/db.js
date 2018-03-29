const mongoose = require('mongoose');

module.exports = function () {
    return new Promise(function (resolve, reject) {
        mongoose.connect('mongodb://localhost/blogDb', (err)=>  {
            if(err)
                reject(err);
            else {
                console.log("mongodb connection established");
                resolve();
            }
        });
    });
};