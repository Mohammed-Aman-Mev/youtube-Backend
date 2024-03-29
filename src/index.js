// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDb();

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("ERROR", (error) => {
//       console.log(error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`app is listen on port :${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error(`Error found ib index file:${error}`);
//   }
// })();
