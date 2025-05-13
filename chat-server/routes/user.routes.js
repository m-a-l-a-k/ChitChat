import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar, viewMyProfile, editProfile, viewProfile, searchUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/me", protectRoute, viewMyProfile);
router.patch("/edit", protectRoute, editProfile);
router.get("/search", protectRoute, searchUser);
router.get("/:id", protectRoute, viewProfile);

export default router;