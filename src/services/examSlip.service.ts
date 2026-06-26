import { buildExamSlip } from "../utils/buildExamSlip";
import { renderTemplate } from "./template.service";
import { generatePdf } from "./pdf.service";

export const generateCentreExamSlips = async (candidates: any[]) => {
  const pages: string[] = [];

  for (const candidate of candidates) {
    const data = await buildExamSlip(candidate);

    const html = await renderTemplate("exam-slip", data);

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

  return generatePdf(finalHtml);
};
