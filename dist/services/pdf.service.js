"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePdf = void 0;
const browser_service_1 = require("./browser.service");
const generatePdf = async (html) => {
    const browser = await (0, browser_service_1.getBrowser)();
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
exports.generatePdf = generatePdf;
