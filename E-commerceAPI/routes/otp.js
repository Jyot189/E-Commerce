const express = require('express');
const router = express.Router();

var nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();//needed when you get information from .env file

const APP_PASSWORD = `${process.env.APP_PASSWORD}`

// Generate a new OTP code and send it via email
this.otpCode = Math.floor(100000 + Math.random() * 900000)

router.post("/login",async (req,res)=>{
    const {otp}=req.body;
    // console.log("otp:"+otp+"this.otp"+this.otpCode)

    if (otp == this.otpCode && otp!=0) {
        res.status(200).send({ message: 'Login successful' });
      } else {
        res.status(401).send({ message: 'Invalid OTP' });
      }
})

router.post("/", async (req, res) => {

    

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jyotkhant1809@gmail.com',
            pass: APP_PASSWORD
        }
    });

    var mailOptions = {
        from: 'jyotkhant1809@gmail.com',
        to: req.body.email,
        // to: 'jyotkhant2002@gmail.com',
        subject: 'LogIn OTP',
        text: `Your OTP code is ${this.otpCode}`,

    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.status(500).json("error:" + error);
        } else {
            res.status(200).json('Email sent: ' + info.response);
        }
    });
})
module.exports = router;