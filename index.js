const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./src/routes/start');

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.set('views', path.join(__dirname, '/src/view'));
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port);
