import { Router } from "express";

import AuthController from "../controllers/AuthController.js";

const router = Router();

// router.post("/auth/login", AuthController.login);
router.post("/auth/login", (req, res) => res.json({ message: "Call is here" }));

export default router;
