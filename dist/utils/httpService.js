"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpService = void 0;
const axios_1 = __importDefault(require("axios"));
const route = "https://mindtech.ng/centredata";
const httpService = axios_1.default.create({
    baseURL: route,
    timeout: 60000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
exports.httpService = httpService;
httpService.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log(error);
    if (error.response) {
        return { data: error.response.data, status: error.response.status };
    }
    return { data: "Cannot establish connection", status: 500 };
});
