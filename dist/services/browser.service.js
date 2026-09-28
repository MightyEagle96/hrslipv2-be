"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowser = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const getBrowser = async () => {
    const executablePath = await puppeteer_1.default.executablePath();
    console.log("Executable Path:", executablePath);
    return await puppeteer_1.default.launch({
        executablePath,
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
        ],
    });
};
exports.getBrowser = getBrowser;
// import puppeteer from "puppeteer";
// import fs from "node:fs";
// export const getBrowser = async () => {
//   const executablePath = await puppeteer.executablePath();
//   console.log("Chrome executable path:", executablePath);
//   console.log("Chrome exists:", fs.existsSync(executablePath));
//   if (!fs.existsSync(executablePath)) {
//     throw new Error(
//       `Chrome not found at ${executablePath}. Check the Puppeteer installation.`,
//     );
//   }
//   return puppeteer.launch({
//     executablePath,
//     headless: true,
//     args: [
//       "--no-sandbox",
//       "--disable-setuid-sandbox",
//       "--disable-dev-shm-usage",
//     ],
//   });
// };
