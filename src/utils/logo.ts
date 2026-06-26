// utils/logo.ts

import fs from "fs";
import path from "path";

const logoPath = path.join(__dirname, "../assets/logo.jpeg");

const logoBuffer = fs.readFileSync(logoPath);

export const logoBase64 = `data:image/png;base64,${logoBuffer.toString(
  "base64",
)}`;
