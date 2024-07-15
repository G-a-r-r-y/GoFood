const express = require("express");
const app = express();
const port = 9000;
const mongoDB = require("./db");
mongoDB();

app.use((req,res)=>{
 res.send("This is index.js");
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://go-food-frontend-black.vercel.app/"); 
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));
app.use("/api", require("./Routes/CreateOrder"));
app.use("/api", require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
