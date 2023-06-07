'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res, next) => res.status(200).send('Hello World!'));
app.get('/other-secret', (req, res, next) => res.status(200).send(`The password is the opposite of ${req.query.password}`));
app.get('/secret', (req, res, next) => res.status(200).send(`The password is ${req.query.password}`));

app.listen(PORT, () => console.log('Server started on port', PORT));
