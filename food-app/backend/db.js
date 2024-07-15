const mongoose = require("mongoose");

const mongoDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Practice:wW70nx2e7yzS8NaM@cluster0.5qhfs9p.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(async () => {
      console.log("DB Connected");
      const foodCategory = await mongoose.connection.db.collection(
        "foodCategory"
      );
      global.food_category = await foodCategory.find({}).toArray();
      console.log(global.food_category);
    })
    .then(async () => {
      const fetchData = await mongoose.connection.db.collection("food_items");
      global.food_items = await fetchData.find({}).toArray();
      console.log(global.food_items);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoDB;
