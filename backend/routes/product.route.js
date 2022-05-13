// require product controller 
const {getAllProducts, createProduct, updateProduct,deleteProduct, getProductDetails} = require('../controllers/product.controller');
// require express to make express router
const express = require('express');
// create router
const router = express.Router();


// route to get all products
router.route("/products").get(getAllProducts);
// route to create a product
router.route("/product/new").post(createProduct);
// route to update/delete a product
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

 


module.exports = router;
