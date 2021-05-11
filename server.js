'use strict';
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
  res.status(200).send('Welcome! This is my cloud server');
});

app.listen(PORT, () => console.log('Up on', PORT));