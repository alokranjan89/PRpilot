import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import {
  getMyRepositories,
  getRepositoryReadme,
} from "../controllers/github.controller";

const router = Router();

// Get logged-in user's repositories
router.get(
  "/repos",
  protect,
  getMyRepositories
);

// Get README of a specific repository
router.get(
  "/repos/:owner/:repo/readme",
  protect,
  getRepositoryReadme
);

export default router;