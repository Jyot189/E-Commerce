const mongoose = require('mongoose');
const {Schema}=mongoose;

const PopularProductsSchema = new Schema({
    img:{
        type: String,
        required: true
    }
})

const PopularProducts=mongoose.model("popularproducts",PopularProductsSchema);
module.exports =PopularProducts;
