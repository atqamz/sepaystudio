const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Partner = mongoose.model("Partner", partnerSchema);
