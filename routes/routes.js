const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send("We're on posts")
});

module.exports = router;