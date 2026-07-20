import { Router } from "express";
import passport from "../config/passport";
import { protect } from "../middleware/auth.middleware";
import { getMe } from "../controllers/auth.controller";

const router = Router();

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }),
 (req, res) => {
  const { user, token } = req.user as {
    user: any;
    token: string;
  };

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return res.status(200).json({
    success: true,
    message: "Login successful",
    user,
  });
}
);

router.get(
  "/me",
  protect,
  getMe
);

export default router;