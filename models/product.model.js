const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productDetail: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    playstoreUri: {
      type: String,
    },
    appstoreUri: {
      type: String,
    },
    demoUri: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Product = mongoose.model("Product", productSchema);
