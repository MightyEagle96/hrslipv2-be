"use strict";
// utils/logo.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoBase64 = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logoPath = path_1.default.join(__dirname, "../assets/logo.jpeg");
const logoBuffer = fs_1.default.readFileSync(logoPath);
exports.logoBase64 = `data:image/png;base64,${logoBuffer.toString("base64")}`;
