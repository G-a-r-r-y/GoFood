const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/OrderData", async (req, res) => {
  try {
    const info = await Order.find({ Email: req.body.email });
    const sendingInfo = [];
    for (let item of info) {
      sendingInfo.push({ date: item.Date, order: item.Orders });
    }
    sendingInfo.reverse();
    res.json({ sendingInfo: sendingInfo, success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
