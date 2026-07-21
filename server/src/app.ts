import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import session from "express-session";

import passport from "./config/passport";

import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";

import { errorHandler } from "./middleware/error.middleware";
import cookieParser from "cookie-parser";
import githubRoutes from "./routes/github.routes";
import aiRoutes from "./routes/ai.routes";

const app = express();

// Global Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Session Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PRPilot API is running 🚀",
  });
});

app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/ai", aiRoutes);

// Error Handler (Always Last)
app.use(errorHandler);

export default app;