"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildExamSlip = void 0;
const logo_1 = require("./logo");
const qrCode_1 = require("./qrCode");
const buildExamSlip = async (candidate) => {
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
    const qrCode = await (0, qrCode_1.generateQRCode)(candidate.ExamNo);
    return {
        ...candidate,
        logo: logo_1.logoBase64,
        passport: `data:image/jpeg;base64,${candidate.Passport}`,
        qrCode,
        //qrCode: `data:image/png;base64,${candidate.ExamNo.replace("/", "-")}`,
        papers,
    };
};
exports.buildExamSlip = buildExamSlip;
