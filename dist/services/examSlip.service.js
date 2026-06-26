"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCentreExamSlips = void 0;
const buildExamSlip_1 = require("../utils/buildExamSlip");
const template_service_1 = require("./template.service");
const pdf_service_1 = require("./pdf.service");
const generateCentreExamSlips = async (candidates) => {
    const pages = [];
    for (const candidate of candidates) {
        const data = await (0, buildExamSlip_1.buildExamSlip)(candidate);
        const html = await (0, template_service_1.renderTemplate)("exam-slip", data);
        pages.push(html);
    }
    const finalHtml = `
<!DOCTYPE html>

<html>

<head>

<style>

body{

margin:0;

padding:0;

}

.page-break{

page-break-after:always;

}

.page-break:last-child{

page-break-after:auto;

}

</style>

</head>

<body>

${pages.join('<div class="page-break"></div>')}

</body>

</html>
`;
    return (0, pdf_service_1.generatePdf)(finalHtml);
};
exports.generateCentreExamSlips = generateCentreExamSlips;
