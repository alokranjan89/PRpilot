import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/user.routes";
import { errorHandler } from "./middleware/error.middleware";

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


// Health Check Route
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "PRPilot API is running,"
    });
});

app.use("/api/users", userRoutes);
app.use(errorHandler);

export default app;