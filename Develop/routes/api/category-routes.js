const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then((response) => {
    res.json(response)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    // finds data based on id parameter
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((response) => {
    res.json(response)
  })
});
// this creates a new category
router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory) => {
    res.json(newCategory)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
