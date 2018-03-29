const express = require('express');
const app = express();

require('./config/express')(app);

require('./config/db')()
    .then(() => {
        app.listen(3000, () => console.log('Listening on port 3000'));
    })
    .catch(console.log);
