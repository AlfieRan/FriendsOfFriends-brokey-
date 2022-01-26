import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();
const api = express();
const port = process.env.PORT;
api.use(cors());
api.use(express.json()); // for parsing application/json

api.get("/", async (req: any, res: any) => {});

api.listen(port || 8888, () => {
  console.log(`server started at http://localhost:${port}`);
});
