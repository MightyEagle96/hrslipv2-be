import { logoBase64 } from "./logo";
import { generateQRCode } from "./qrCode";

export const buildExamSlip = async (candidate: any) => {
  const papers = [];

  for (let i = 1; i <= 3; i++) {
    const code = candidate[`Paper${i}`];
    const title = candidate[`Title${i}`];

    if (code) {
      papers.push({
        code,
        title,
        // date: "Coming Soon",
        date: candidate[`Date${i}`],
      });
    }
  }

  const qrCode = await generateQRCode(candidate.ExamNo);
  return {
    ...candidate,

    logo: logoBase64,

    passport: `data:image/jpeg;base64,${candidate.Passport}`,

    qrCode,

    //qrCode: `data:image/png;base64,${candidate.ExamNo.replace("/", "-")}`,

    papers,
  };
};
