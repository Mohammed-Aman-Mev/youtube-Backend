import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `Mongodb is connected on port ${process.env.PORT} ## ${connection.connection.host}`
    );
  } catch (error) {
    console.error(`Error in db index file :${error}`);
  }
};

export default connectDb;
