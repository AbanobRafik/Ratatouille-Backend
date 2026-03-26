import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected ${connection.connection.host}`);
    console.log(`Database name: ${connection.connection.name}`);
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
