import express from "express";
import { registration_api, login } from "../controllers/post.js";

const router = express.Router();

router.get("/registration", registration_api);
router.post("/login", login);

export default router;
