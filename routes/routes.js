const express = require('express');

const router = express.Router();
const categoryController = require('../controllers/categoryController')
const shopController = require('../controllers/shopController')
const listsController = require('../controllers/listController');

//Getting all
//Getting one
//Creating one
//Updating one
//Deleting one

// **********List routes**********
//Get all
router.get("/lists", listsController.get_all_lists);
// router.get('/', (req, res) => {
//     res.send("Hello World!")
// });


// **********Category routes**********

//Get all
router.get("/Category", categoryController.get_all_categories);

// router.get('/Category', (req, res) => {
//     res.send("We're on category")
// });


//Getting one
router.get("/Category/:id", categoryController.get_single_category);

// router.get('/Category/:id', (req, res) => {
//     res.send(req.params.id)
// });

//Creating one
router.post("/Category", categoryController.create_category);

// router.post('/Category', (req, res) => {
//     res.send("")
// });



// **********Shop routes**********

//Get all
router.get("/Shops", shopController.get_all_shops);

// router.get('/Shop', (req, res) => {
//     res.send("We're on shop")
// });


//Getting one
router.get("/Shop/:id", shopController.get_single_shop);

// router.get('/Shop/:id', (req, res) => {
//     res.send(req.params.id)
// });

//Creating one
router.post("/Shop", shopController.create_shop);

// router.post('/Shop', (req, res) => {
//     res.send("")
// });


module.exports = router;