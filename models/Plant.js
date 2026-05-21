const { default: mongoose } = require("mongoose");

const plant = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Plant", plant);
//zod
