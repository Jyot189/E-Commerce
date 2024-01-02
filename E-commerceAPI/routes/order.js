const Order=require("../models/Order")
const express = require('express');
const router = express.Router();

//CREATE

router.post("/",[],async(req,res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder=await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (error) {
        res.status(500).json(error);
    }
})

//UPDATE
router.put("/:id", async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELETE
router.delete("/:id",async (req,res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("order has been deleted");
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER ORDERS
router.get("/find/:userId",async (req,res) => {
    try {
        const orders=await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json(error);
    }
})

// //GET ALL

router.get("/", async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router;