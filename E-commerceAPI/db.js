const mongoose=require('mongoose');
const dotenv = require('dotenv').config();

const mongoURI=`${process.env.mongodbURI}`

const connectToMongo=async ()=>{
    try {
        mongoose.connect(mongoURI)
    } catch (error) {
        console.log(error)
        process.exit()
    }
}

module.exports = connectToMongo;