import { getBrowser } from "./browser.service";

export const generatePdf = async (html: string): Promise<Buffer> => {
  const browser = await getBrowser();

  const page = await browser.newPage();

  await page.setContent(html, {
    waitUntil: "load",
  });

  const pdf = await page.pdf({
    format: "A4",

    printBackground: true,

    margin: {
      top: "10mm",
      bottom: "10mm",
      left: "10mm",
      right: "10mm",
    },
  });

  await page.close();

  return Buffer.from(pdf);
};
