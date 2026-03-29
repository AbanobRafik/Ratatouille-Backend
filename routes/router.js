import express from "express";
import {
  addNewDish,
  deleteDish,
  getAllDishes,
  getDishByCode,
  updateDish,
} from "../controller/dishController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const router = express.Router();

//* for admin only
router.post("/add", authMiddleware, adminMiddleware, addNewDish);
router.delete("/delete/:code", authMiddleware, adminMiddleware, deleteDish);
router.put("/update/:code", authMiddleware, adminMiddleware, updateDish);

// * for all users
router.get("/getAll", authMiddleware, getAllDishes);
router.get("/getByCode/:code", authMiddleware, getDishByCode);

export default router;
