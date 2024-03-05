const mongoose = require('mongoose')

const uri = "mongodb+srv://10xmantra:ZIfdaT3axSU5Q7Im@cluster0.ed44jef.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = () => {
  console.log("i am in connectDb");
  console.log('connect databas');
  return mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology:true
  })
}

module.exports = connectDB;