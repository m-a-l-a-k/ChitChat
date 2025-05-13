import express from "express";
import { signup, login, logout, changePass, deleteAcc } from "../controllers/auth.controller.js"
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

router.patch("/changePassword", protectRoute, changePass)

router.delete("/deleteAccount", protectRoute, deleteAcc)

export default router;