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
import {
  addCart,
  clearCart,
  getCart,
  removeFromCart,
} from "../controller/cartController.js";

const router = express.Router();

//* for admin only
router.post("/add", authMiddleware, adminMiddleware, addNewDish);
router.delete("/delete/:code", authMiddleware, adminMiddleware, deleteDish);
router.put("/update/:code", authMiddleware, adminMiddleware, updateDish);

// * for all users to view dishes
router.get("/getAll", authMiddleware, getAllDishes);
router.get("/getByCode/:code", authMiddleware, getDishByCode);

// * cart routes
router.post("/cart/addToCart", authMiddleware, addCart);
router.get("/cart", authMiddleware, getCart);
router.delete("/cart/removeFromCart", authMiddleware, removeFromCart);
router.post("/cart/clearCart", authMiddleware, clearCart);

export default router;
