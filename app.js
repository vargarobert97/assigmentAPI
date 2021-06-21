const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


//Import routes
const postsRoute = require('./routes/routes');
app.use('/posts', postsRoute);


//Connection to DataBase
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, 
      useUnifiedTopology: true },  
    () => console.log('Conneted to DB')
);

app.listen(3000);