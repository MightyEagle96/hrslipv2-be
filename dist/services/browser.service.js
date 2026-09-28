"use strict";
// import puppeteer from "puppeteer";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBrowser = void 0;
// export const getBrowser = async () => {
//   const executablePath = await puppeteer.executablePath();
//   console.log("Executable Path:", executablePath);
//   return await puppeteer.launch({
//     executablePath,
//     headless: true,
//     args: [
//       "--no-sandbox",
//       "--disable-setuid-sandbox",
//       "--disable-dev-shm-usage",
//     ],
//   });
// };
const puppeteer_1 = __importDefault(require("puppeteer"));
const node_fs_1 = __importDefault(require("node:fs"));
const getBrowser = async () => {
    const executablePath = await puppeteer_1.default.executablePath();
    console.log("Chrome executable path:", executablePath);
    console.log("Chrome exists:", node_fs_1.default.existsSync(executablePath));
    if (!node_fs_1.default.existsSync(executablePath)) {
        throw new Error(`Chrome not found at ${executablePath}. Check the Puppeteer installation.`);
    }
    return puppeteer_1.default.launch({
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
