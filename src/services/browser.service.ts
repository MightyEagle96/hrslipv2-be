import puppeteer from "puppeteer";

export const getBrowser = async () => {
  const executablePath = await puppeteer.executablePath();

  console.log("Executable Path:", executablePath);

  return await puppeteer.launch({
    executablePath,
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  });
};
