const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      require: true,
      index: true,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("User", userSchema);
