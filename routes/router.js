import express from "express";
import { addNewDish, deleteDish } from "../controller/dishController.js";

const router = express.Router();

router.post("/add", addNewDish);
router.delete("/delete/:code", deleteDish);

export default router;
