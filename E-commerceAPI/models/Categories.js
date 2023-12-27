const mongoose = require('mongoose');
const {Schema}=mongoose;

const CategoriesSchema = new Schema({
    img:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
    }
})

const Categories=mongoose.model("categories",CategoriesSchema);
module.exports =Categories;
