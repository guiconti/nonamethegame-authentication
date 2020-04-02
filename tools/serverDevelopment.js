'use strict';
/* eslint-disable no-console */
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const router = require('../server/core/router.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();

app.use(
  cors({
    origin: ['http://localhost:3002'],
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(cookieParser());
app.use('/', router);
app.use(morgan('tiny'));

module.exports = app;
