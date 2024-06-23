import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantityInCart,
  getCartItems,
} from "../controllers/cart.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.get("/:userId/cart", getCartItems);
router.post("/:userId/cart", addItemToCart);
router.put("/:userId/cart", updateItemQuantityInCart);
router.delete("/:userId/cart", removeItemFromCart);

export default router;
