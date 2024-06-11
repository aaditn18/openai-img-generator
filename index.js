const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5002;

const app = express();

//to input text from user (body data)
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use('/openai', require('./routes/openaiRoutes'));
app.listen(port, () => console.log('Server started on port ${port}'));