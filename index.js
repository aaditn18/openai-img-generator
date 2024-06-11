const path = require('path');

const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5002;

const app = express();

//to input text from user (body data)
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//setting static public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, () => console.log('Server started on port ${port}'));