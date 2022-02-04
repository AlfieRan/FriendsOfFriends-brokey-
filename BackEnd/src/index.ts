import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { GetTokens } from "./TwitterApi";

dotenv.config();
const api = express();
const port = process.env.PORT;

api.use(cors());
api.use(express.json()); // for parsing application/json

api.post("/storeTokens", async (req: any, res: any) => {
  try {
    GetTokens(req.body.code);
  } catch (e) {
    console.log("errored");
    console.log(e);
  }
});

api.listen(port || 8888, () => {
  console.log(`server started at http://localhost:${port}`);
});
