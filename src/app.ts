import express from "express";
import router from "./routes/pdf.routes";
import cors from "cors";

const app = express();

app
  .use(cors())
  .use(express.json({ limit: "50mb" }))
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .use("/api", router)
  .listen(3000, () => console.log("Server running on port 3000"));
