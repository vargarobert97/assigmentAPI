const express = require('express');

const app = express();




app.get('/', (req, res) => {
    res.send("We're on home");
});

app.get('/posts', (req, res) => {
    res.send("We're on posts");
});

app.listen(3000);