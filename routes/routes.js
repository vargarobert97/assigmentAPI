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
router.get("/lists/:id/", listsController.get_single_list);

//Getting all
router.get("/lists", listsController.get_all_lists);

//Updating one
router.put("/lists/:id/", listsController.update_list);

//Deleting the list
router.delete("/lists/:id/", listsController.delete_list);

//Creating list item
router.post("/lists/:id/items", listsController.create_specific_list_item);

//Getting list items
router.get("/lists/:id/items", listsController.get_items_from_specific_list);

//Getting list item
router.get("/lists/listId/items/:itemId", listsController.get_specific_item_from_list);

//Updating list item
router.put("/lists/:listId/items/:itemId", listsController.update_list_item);

//Deleting list item
router.delete("/lists/:listId/items/:itemId", listsController.delete_list_item);



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