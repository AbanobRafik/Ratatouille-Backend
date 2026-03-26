import mongoose, { model } from "mongoose";

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "DishName must be at least 3 characters."],
    maxLength: [50, "DishName must be less than 100 characters."],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description must be at least 10 characters."],
    maxLength: [500, "Description must be less than 800 characters."],
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be a positive number."],
  },
  imageUrl: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ["appetizer", "main", "dessert"],
    default: "main",
  },
});

model.exports = mongoose.model("Dish", dishSchema);
