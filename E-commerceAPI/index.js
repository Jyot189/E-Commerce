const connectToMongo = require('./db')
const express=require('express');
const cors = require('cors')
const app= express();

const port=5000;
connectToMongo();

app.use(cors())//because this need if we use call api in react app then 'cors' is needed
app.use(express.json())//Result { formatter: [Function: formatter], errors: [] } that why use

app.use('/api/auth',require('./routes/auth'))
app.use('/api/product',require('./routes/items'))
app.use('/api/orders',require('./routes/order'))
app.use('/api/product',require('./routes/product'))
app.use('/api/cart',require('./routes/cart'))
app.use('/api/sendBill',require('./routes/sendMail'))
app.use('/api/sendOTP',require('./routes/otp'))

app.listen(port,()=>{
    console.log(`app listeing at http://localhost:${port}`);
})
