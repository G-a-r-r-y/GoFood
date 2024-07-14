const express = require("express");
const router = express.Router();
const Orders = require("../models/Orders");

router.post("/createOrder", (req, res) => {
  try {
    Orders.create({
      Email: req.body.email,
      Orders: req.body.data,
      Date: req.body.date,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});
module.exports = router;
