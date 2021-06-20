const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//Connection to DataBase
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useUnifiedTopology: true }, 
    () => console.log('Conneted to DB')
);

app.listen(3000);