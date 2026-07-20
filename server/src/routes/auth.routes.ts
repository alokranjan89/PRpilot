import { Router } from "express";
import passport from "../config/passport";

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
    const { user, token } = req.user as any;

    return res.json({
      success: true,
       message: "Login successful",
      token,
      user,
    });
  }
);

export default router;