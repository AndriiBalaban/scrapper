const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./app_server/routes/index');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(cookieParser());


app.use('/', routes);
app.get('/', (req, res) => res.send('Hello World! ' + req.baseUrl));

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
