import express from "express";
import cors from "cors";

import "dotenv/config";
import { connectDB } from "./configs/db.js";

const app = express();

const PORT = 8000;

await connectDB();

//middleware
app.use(express.json());
app.use(cors);

app.get("/", (req, res) => res.send("server is live"));

app.listen(PORT, () => {
  console.log(PORT);
});
