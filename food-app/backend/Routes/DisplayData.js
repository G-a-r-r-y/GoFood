const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send({
      food_items: global.food_items,
      food_category: global.food_category,
    });
  } catch (error) {
    console.log(error.message);
    res.send("Server Error");
  }
});
module.exports = router;
