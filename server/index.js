import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// ===== Test Route =====
app.get("/", (req, res) => {
  res.json({ message: "🚀 Fly Server is running..." });
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
