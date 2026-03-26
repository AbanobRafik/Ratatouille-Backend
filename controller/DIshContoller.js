import dishSchema from "../models/dishModel.js";

export const addNewDish = async (req, res) => {
  try {
    const { id } = req.params;
    const exist = await dishSchema.findById(id);
    if (exist) {
      return res.status(400).json({ message: "Dish already exists" });
    }
    const newDish = new dishSchema(req.body);
    await newDish.save();
    res.status(200).json({ message: "Dish added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding dish", error: error.message });
  }
};

export const deleteDish = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDish = await dishSchema.findByIdAndDelete(id);
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
