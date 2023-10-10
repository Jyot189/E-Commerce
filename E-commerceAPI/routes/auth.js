const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET =`${process.env.JWT_SECRET}`


router.post('/createuser',[
    body('firstname', 'Enter a valid firstname').isLength({ min: 3 }),
    body('lastname', 'Enter a valid lastname').isLength({ min: 3 }),
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password must me atleast 5 characters').isLength({ min: 5 }),

] ,async (req,res)=>{
    const errors=validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
        var success=false;
        return res.status(400).json({ success,errors: errors.array() });
    }

    try {
        let user=await User.findOne({ email: req.body.email });
        if(user) {
            success=false;
            return res.status(400).json({ success,error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        user=await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: secPass,
            email: req.body.email
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log("authToken:", authToken);
        success=true;
        res.json({ success,authToken })

    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occurred")
    }
})

router.post('/login',[
    body('email', 'enter a valid email').isEmail(),
    body('password', 'password can not be blank').exists(),

],async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    
    try {
        let user = await User.findOne({ email })//if both email:email then you write {email}
        var success=false;
        if (!user) {
            return res.status(400).json({ success,error: "please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success=false;
            return res.status(400).json({ success,error: "please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
         success=true;
        res.json({ success,authToken })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal some error occurred")
    }
})

module.exports=router;

