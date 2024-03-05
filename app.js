const express= require('express');
const app = express();
const connectDB = require('./db/connect')
require("dotenv").config();

const PORT = process.env.PORT || 5600
app.get('/', () => {
  console.log("Hi, I am live");
})

const products_routes = require("./routes/products")
app.use("/api/products",products_routes)
 
const start = async () => {
 try{
  await connectDB(process.env.MONGODB_URL);
  app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected`);
  });
 } catch(error) {
      console.log(error);
 }
};

start();