import { Router } from "express";
import { generateExamSlip } from "../controllers/pdf.controller";

const router = Router();

router.post("/exam-slips", generateExamSlip);

export default router;
