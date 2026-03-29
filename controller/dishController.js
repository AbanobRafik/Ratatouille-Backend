import dishSchema from "../models/dishModel.js";

export const addNewDish = async (req, res) => {
  try {
    const { code } = req.body;

    // تحقق إذا الطبق موجود بالفعل بالكود
    const exist = await dishSchema.findOne({ code });
    if (exist) {
      return res.status(400).json({ message: "Dish already exists" });
    }

    // إنشاء الطبق الجديد وحفظه
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

expo