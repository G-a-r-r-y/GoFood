const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  Email: {
    type: String,
    required: true,
  },
  Orders: {
    type: Array,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Orders", OrderSchema);
