import { Request, Response } from "express";
import { generateCentreExamSlips } from "../services/examSlip.service";
import fs from "fs/promises";
import path from "path";
import { httpService } from "../utils/httpService";

// export const generateExamSlip = async (req: Request, res: Response) => {
//   try {
//     const { data, status } = await httpService.get(`/${req.body.centreId}`);

//     if (status !== 200) {
//       return res.status(400).json({
//         success: false,

//         message: "Unable to generate slips.",
//       });
//     }

//     const candidates = data;

//     if (!Array.isArray(candidates)) {
//       return res.status(400).json({
//         success: false,

//         message: "Candidates must be an array.",
//       });
//     }

//     const pdf = await generateCentreExamSlips(candidates);

//     res.set({
//       "Content-Type": "application/pdf",

//       "Content-Disposition": "attachment; filename=exam-slips.pdf",

//       "Content-Length": pdf.length,
//     });
//     fs.writeFile(`Centre ${req.body.centreId}.pdf`, pdf);

//     res.send("exam-slips.pdf");

//     //res.send(pdf);
//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       success: false,

//       message: "Unable to generate slips.",
//     });
//   }
// };

export const generateExamSlip = async (req: Request, res: Response) => {
  try {
    const { centreId } = req.body;

    if (!centreId) {
      return res.status(400).json({
        success: false,
        message: "Centre ID is required.",
      });
    }

    const { data, status } = await httpService.get(`/${centreId}`);

    if (status !== 200) {
      return res.status(400).json({
        success: false,
        message: "Unable to retrieve candidates.",
      });
    }

    if (!Array.isArray(data)) {
      return res.status(400).json({
        success: false,
        message: "Invalid response received from candidate service.",
      });
    }

    const pdf = await generateCentreExamSlips(data);

    // Optional: Save a copy on the server
    //await fs.writeFile(`Centre-${centreId}.pdf`, pdf);

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="Centre-${centreId}.pdf"`,
      "Content-Length": pdf.length,
    });

    return res.send(pdf);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Unable to generate examination slips.",
    });
  }
};
