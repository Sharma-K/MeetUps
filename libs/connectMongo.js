// import mongoose from "mongoose";
const mongoose = require('mongoose'); 
const URL = process.env.MONGODB_URI;
// main().catch(err => console.log(err));
// // 'mongodb://127.0.0.1:27017/test'
// async function main() {
//   await mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true });
//   console.log('connect');
// }

export const connectMongo = async()=>{
  
  return await mongoose.connect(URL);
}
