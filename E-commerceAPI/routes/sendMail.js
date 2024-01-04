const express = require('express');
const router = express.Router();

var nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();//needed when you get information from .env file

const APP_PASSWORD = `${process.env.APP_PASSWORD}`

router.post("/", async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jyotkhant1809@gmail.com',
      pass: APP_PASSWORD
    }
  });

  // var mailOptions = {
  //   from: 'jyotkhant1809@gmail.com',
  //   to: 'jyotkhant2002@gmail.com',
  //   subject: 'E-commerce',
  //   text: 'Bill'
  // };

  var mailOptions = {
    from: 'jyotkhant1809@gmail.com',
    to: req.body.clientMail,
    subject: 'E-commerce',
    text: 'Bill',
    attachments: [
      {
          filename: 'Analysis of Algorithms!.pdf',
          path: __dirname + '/Analysis of Algorithms!.pdf'
      }
  ]
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(500).json("error:"+error);
    } else {
      res.status(200).json('Email sent: ' + info.response);
    }
  });
})

module.exports=router;
