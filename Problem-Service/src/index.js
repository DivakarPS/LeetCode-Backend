const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB  = require('./config/db.config');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.raw());

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log("Server is up and running at port " + PORT);
    await connectToDB();
});