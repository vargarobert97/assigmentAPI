//require('dotenv/config');
const express = require('express');

const app = express();
const mongoose = require('mongoose');


app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

//Import routes
const postsRoute = require('./routes/routes');
app.use('/routes', postsRoute);


//Connection to DataBase
// mongoose.connect(
//     process.env.DB_CONNECTION,
//     { useNewUrlParser: true, 
//       useUnifiedTopology: true },  
//     () => console.log('Conneted to DB')
// );

mongoose.connect(
    "mongodb+srv://vargarobert97:Rukometasi023@cluster0.ytlpa.mongodb.net/shopAPI?retryWrites=true&w=majority",
    { useNewUrlParser: true,
      useUnifiedTopology: true},
    ()=> console.log("Conneted to DB"))
 

app.listen(3000);