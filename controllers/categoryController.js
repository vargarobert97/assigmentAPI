const Category = require("../models/Category");

const create_category = (req, res) => {
  const category = new Category({
    name: req.body.categoryName,
    description: req.body.categoryDescription
  })
  /* 
  try {
      const newCategory = await category.save()
      res.status(201).json(newCategory)
  } catch (err){
      res.status(400).json({ message: err.message})
  }
})
  */

  category
    .save()
    .then((result) => {
      res.json("Category created");
    })
    .catch((err) => console.log(err));
};

const get_all_categories = (req, res) => {
  Category.find()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
};

/* 
const get_all_categories = (req, res) => {
    try {
        const allCategories = await categoryController.find()
        res.json(allCategories)
    } catch (err) {
        res.status(500).json({ message: err.message})
    }
})
*/

const get_single_category = (req, res) => {
  const id = req.params.id;

  Category.findById(id)
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
};

/* 
async function get_single_category(req, res, next){
    let category;
    try{
        category = await Category.findById(req.params.id)
        if(category == null) {
            return res.status(404).json({ message: "Cannot find category"})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }
    res.category = category
    next()
}
*/

module.exports = {
  create_category,
  get_all_categories,
  get_single_category,
};