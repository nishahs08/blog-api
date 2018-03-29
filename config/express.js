const bodyParser = require('body-parser');
const router = require('./../route');

module.exports = (app) => {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/api', router);

    app.use((req, res) => {
        res.status(404);
        res.json({
            gabar: 'Route not found'
        });
    });
    app.use((err, req, res, next) => {
        res.json({
            'message': err.message || err,
            'stack': err.stack
        });
    });
}