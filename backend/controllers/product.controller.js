const Product = require('../models/product.model');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');


// create product   --  ADMIN
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
        success: true,
        product 
    })
})

// get all the products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    })
});

// get product details by id
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product)
        return next(new ErrorHandler("Product not found", 404));


    res.status(200).json({
        success: true,
        product
    })
});

// update a product -- ADMIN
exports.updateProduct = catchAsyncErrors(async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product)
        return next(new ErrorHandler("Product not found", 404));

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        product
    })
});

// delete product  --- ADMIN
exports.deleteProduct = catchAsyncErrors(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product)
        return next(new ErrorHandler("Product not found", 404));

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product deleted successfully."
    })

});