import { Router } from "express";
import { analyzeRepo } from "../controllers/ai.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/analyze",
  protect,
  analyzeRepo
);

export default router;