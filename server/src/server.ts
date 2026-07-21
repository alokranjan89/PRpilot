import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 5000;

console.log("Gemini Key:", process.env.GEMINI_API_KEY);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});