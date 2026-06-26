"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pdf_controller_1 = require("../controllers/pdf.controller");
const router = (0, express_1.Router)();
router.post("/exam-slips", pdf_controller_1.generateExamSlip);
exports.default = router;
