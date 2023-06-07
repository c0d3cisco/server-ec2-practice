'use strict';

// Import the Express server module
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

// routes
app.get('/', (req, res, next) => res.status(200).send('Hello World!'));
app.get('/secret', (req, res, next) => res.status(200).send(`The password is ${req.query.password}`));

// Import the body-parser module
app.listen(PORT, () => console.log('Server started on port', PORT));