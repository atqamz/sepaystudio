const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    viewers: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = Article = mongoose.model("Article", articleSchema);
