const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter product name."],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter product description."]
    },
    price: {
        type: Number,
        required: [true, "Please enter product price."],
        maxlength: [8, "Price cannot exceed eight characters."]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category:{
        type:String,
        required:[true, "Please Enter Product Category."]
    },
    stock:{
        type:Number,
        required:[true, "Please Enter Product Stock."],
        max:[9999, "Stock cannot exceed 4 characters."],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type: String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:()=>{
            return Date.now();
        },
        immutable:true
    },
    updatedAt:{
        type:Date,
        default: ()=>{
            return Date.now();
        }
    }
})


module.exports = mongoose.model("Product", productSchema);