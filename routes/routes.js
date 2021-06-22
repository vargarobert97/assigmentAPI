const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController')
const shopController = require('../controllers/shopController')

//Getting all
//Getting one
//Creating one
//Updating one
//Deleting one

// **********List routes**********
router.get('/', (req, res) => {
    res.send("Hello World")
});


// **********Category routes**********

//Get all
router.get('/Category', (req, res) => {
    res.send("We're on category")
});

//Getting one
router.get('/Category/:id', (req, res) => {
    res.send(req.params.id)
});

//Creating one
router.post('/Category', (req, res) => {
    res.send("")
});


// **********Shop routes**********

//Get all
// router.get('/Shop', (req, res) => {
//     res.send("We're on shop")
// });
router.get("/Shops", shopController.get_all_shops);

//Getting one
router.get('/Shop/:id', (req, res) => {
    res.send(req.params.id)
});

//Creating one
// router.post('/Shop', (req, res) => {
//     res.send("")
// });
router.post("/Shop", shopController.create_shop);

module.exports = router;