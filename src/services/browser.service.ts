// import puppeteer, { Browser } from "puppeteer";

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

import puppeteer from "puppeteer";

export const getBrowser = async () => {
  return await puppeteer.launch({
    executablePath:
      process.env.PUPPETEER_EXECUTABLE_PATH ||
      "/opt/render/.cache/puppeteer/chrome/linux-150.0.7871.24/chrome-linux64/chrome",

    headless: true,

    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });
};

export const closeBrowser = async () => {
  // if (browser) {
  //   await browser.close();
  //   browser = null;
  // }
};
