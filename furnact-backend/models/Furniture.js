const mongoose = require('mongoose');
const FurnitureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  },
  images: [String],
  category: String,
});
module.exports = mongoose.model('Furniture', FurnitureSchema);
