import dishSchema from "../models/dishModel.js";

export const addNewDish = async (req, res) => {
  try {
    const { code } = req.body;

    const exist = await dishSchema.findOne({ code });
    if (exist) {
      return res.status(400).json({ message: "Dish already exists" });
    }

    const newDish = new dishSchema(req.body);
    await newDish.save();

    res.status(201).json({
      message: "Dish added successfully",
      dish: newDish,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding dish", error: error.message });
  }
};

export const deleteDish = async (req, res) => {
  try {
    const { code } = req.body;
    const deletedDish = await dishSchema.findOneAndDelete({ code });
    if (!deletedDish) {
      return res.status(404).json({ message: "Dish does not exist" });
    }
    res.status(200).json({ message: "Dish deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting dish", error: error.message });
  }
};

export const getAllDishes = async (req, res) => {
  try {
    const dishes = await dishSchema.find();
    if (dishes.length === 0) {
      return res.status(404).json({ message: "No dishes found" });
    }
    res.status(200).json({ message: "Dishes retrieved successfully", dishes });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving dishes", error: error.message });
  }
};

export const getDishByCode = async (req, res) => {
  try {
    const { code } = req.body;
    const dish = await dishSchema.findOne({ code });
    if (!dish) {
      return res.status(404).json({ message: "Dish not found" });
    }
    res.status(200).json({ message: "Dish retrieved successfully", dish });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving dish", error: error.message });
  }
};

export const updateDish = async (req, res) => {
  try {
    const { code } = req.body;
    const updatedDish = await dishSchema.findOneAndUpdate({ code }, req.body, {
      new: true,
    });
    if (!updatedDish) {
      return res.status(404).json({ message: "Dish not found" });
    }
    res
      .status(200)
      .json({ message: "Dish updated successfully", dish: updatedDish });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating dish", error: error.message });
  }
};
