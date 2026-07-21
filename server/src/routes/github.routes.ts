import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { getMyRepositories } from "../controllers/github.controller";

const router = Router();

router.get(
  "/repos/:owner/:repo/readme",
  protect,
  getMyRepositories
);

export default router;