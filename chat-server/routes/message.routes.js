import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage, getMessages, deleteMessageForMe, deleteMessageForEveryone } from '../controllers/message.controller.js';

const router = express.Router();

router.get("/:id", protectRoute, getMessages)
router.post("/send/:id", protectRoute, sendMessage)
router.delete("/delete/:id", protectRoute, deleteMessageForMe)
router.delete("/delete/all/:id", protectRoute, deleteMessageForEveryone)


export default router;