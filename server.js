import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
const app = express();
const PORT = 5000;
configDotenv()
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.get("/api/live-streaming", (req, res) => {
  res.json({ url: process.env.url || 9090 });
});

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});