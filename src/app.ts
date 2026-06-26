import express from "express";
import router from "./routes/pdf.routes";
import cors from "cors";
import path from "node:path";

const app = express();

app
  .use(cors())
  .use(express.json({ limit: "50mb" }))

  .use(express.static(path.join(__dirname, "build")))
  .use(express.static("public"))

  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .use("/api", router);

app
  .use((req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  })
  .listen(3000, () => console.log("Server running on port 3000"));
