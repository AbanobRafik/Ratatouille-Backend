import express from "express";
import {
  addNewDish,
  deleteDish,
  getAllDishes,
  getDishByCode,
  updateDish,
} from "../controller/dishController.js";

const router = express.Router();

//* for admin only
router.post("/add", addNewDish);
router.delete("/delete/:code", deleteDish);
router.put("/update/:code", updateDish);

// * for all users
router.get("/getAll", getAllDishes);
router.get("/getByCode/:code", getDishByCode);

export default router;
