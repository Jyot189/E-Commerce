const mongoose = require('mongoose');
const {Schema}=mongoose;

const SlideritemsSchema = new Schema({
    img:{
        type: String,
        required: true
    }
})

const Slideritems=mongoose.model("slideritems",SlideritemsSchema);
module.exports =Slideritems;
