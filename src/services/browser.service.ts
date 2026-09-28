// import puppeteer from "puppeteer";

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

import puppeteer from "puppeteer";
import fs from "node:fs";

export const getBrowser = async () => {
  const executablePath = await puppeteer.executablePath();

  console.log("Chrome executable path:", executablePath);
  console.log("Chrome exists:", fs.existsSync(executablePath));

  if (!fs.existsSync(executablePath)) {
    throw new Error(
      `Chrome not found at ${executablePath}. Check the Puppeteer installation.`,
    );
  }

  return puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });
};
