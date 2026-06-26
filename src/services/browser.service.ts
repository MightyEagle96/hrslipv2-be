import puppeteer, { Browser } from "puppeteer";

let browser: Browser | null = null;

export const getBrowser = async () => {
  if (browser) {
    return browser;
  }

  browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });

  return browser;
};

export const closeBrowser = async () => {
  if (browser) {
    await browser.close();
    browser = null;
  }
};
