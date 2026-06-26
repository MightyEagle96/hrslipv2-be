"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTemplate = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const handlebars_1 = __importDefault(require("handlebars"));
const renderTemplate = async (templateName, data) => {
    const filePath = path_1.default.join(__dirname, "../templates", `${templateName}.hbs`);
    const source = await promises_1.default.readFile(filePath, "utf8");
    const template = handlebars_1.default.compile(source);
    return template(data);
};
exports.renderTemplate = renderTemplate;
