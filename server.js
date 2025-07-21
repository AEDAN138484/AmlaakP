require('dotenv').config();
const app = require('./src/app');    
const path = require('path');
const express = require('express');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));