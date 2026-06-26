"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pdf_routes_1 = __importDefault(require("./routes/pdf.routes"));
const cors_1 = __importDefault(require("cors"));
const node_path_1 = __importDefault(require("node:path"));
const app = (0, express_1.default)();
app
    .use((0, cors_1.default)())
    .use(express_1.default.json({ limit: "50mb" }))
    .use(express_1.default.static(node_path_1.default.join(__dirname, "build")))
    .use(express_1.default.static("public"))
    .use(express_1.default.urlencoded({ extended: true }))
    .use(express_1.default.static("public"))
    .use("/api", pdf_routes_1.default);
app
    .use((req, res) => {
    res.sendFile(node_path_1.default.join(__dirname, "build", "index.html"));
})
    .listen(3000, () => console.log("Server running on port 3000"));
