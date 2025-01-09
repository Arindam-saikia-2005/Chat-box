import express from "express";
import {
  signUp,
  login,
  logout,
  getUserProfile,
} from "../controller/user.controller.js";
import secureRoute from "../Middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/logout", logout);
router.get("/getUserProfile", secureRoute, getUserProfile);

export default router;
