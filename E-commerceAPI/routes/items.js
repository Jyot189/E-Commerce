const express = require('express');
const router = express.Router();
const Categories = require("../models/Categories");
const PopularProducts = require("../models/PopularProducts");
const Slideritems = require("../models/Slideritems");

const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET =`${process.env.JWT_SECRET}`

router.get('/fetchallCategories', async (req, res) => {
    try {
        const categories = await Categories.find();
        res.json(categories);
        // console.log(categories);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occurred")
    }
})

router.get('/fetchallPopularProducts', async (req, res) => {
    try {
        const popularProducts = await PopularProducts.find();
        res.json(popularProducts);
        // console.log(popularProducts);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occurred")
    }
})

router.get('/fetchallSlideritems', async (req, res) => {
    try {
        const slideritems = await Slideritems.find();
        res.json(slideritems);
        // console.log(slideritems);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occurred")
    }
})

module.exports = router;
