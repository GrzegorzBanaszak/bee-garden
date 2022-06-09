const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected`.cyan.bold);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
