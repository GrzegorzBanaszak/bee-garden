const mongoose = require("mongoose");

const apiarySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    apiaryNumber: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Apiary", apiarySchema);
