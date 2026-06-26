"use strict";
// import puppeteer, { Browser } from "puppeteer";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeBrowser = exports.getBrowser = void 0;
// let browser: Browser | null = null;
// export const getBrowser = async () => {
//   if (browser) {
//     return browser;
//   }
//   browser = await puppeteer.launch({
//     headless: true,
//     args: [
//       "--no-sandbox",
//       "--disable-setuid-sandbox",
//       "--disable-dev-shm-usage",
//     ],
//   });
//   return browser;
// };
const puppeteer_1 = __importDefault(require("puppeteer"));
const getBrowser = async () => {
    return await puppeteer_1.default.launch({
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH ||
            "/opt/render/.cache/puppeteer/chrome/linux-150.0.7871.24/chrome-linux64/chrome",
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox",
            "--disable-dev-shm-usage",
        ],
    });
};
exports.getBrowser = getBrowser;
const closeBrowser = async () => {
    // if (browser) {
    //   await browser.close();
    //   browser = null;
    // }
};
exports.closeBrowser = closeBrowser;
