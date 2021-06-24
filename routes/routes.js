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

//Creating list
router.post("/lists", listsController.create_list);

//Getting one
router.get("/lists", listsController.get_single_list);

//Getting all
router.get("/lists", listsController.get_all_lists);

//Updating one
router.put("/lists", listsController.update_list);

//Deleting the list
router.delete("/lists", listsController.delete_list);



// **********Category routes**********

//Get all
router.get("/category", categoryController.get_all_categories);

//Getting one
router.get("/category/:id", categoryController.get_single_category);

//Creating one
router.post("/category", categoryController.create_category);



// **********Shop routes**********

//Get all
router.get("/shops", shopController.get_all_shops);

//Getting one
router.get("/shop/:id", shopController.get_single_shop);

//Creating one
router.post("/shop", shopController.create_shop);



module.exports = router;