const express= require('express');
const app = express();
const connectDB = require('./db/connect')


const start = async () => {
 try{
  await connectDB();
  app.listen(PORT, () => {
      console.log(`${PORT} Yes I am Connected`);
  });
 } catch(error) {
      console.log(error);
 }
};

start();