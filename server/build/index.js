"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const express = require("express");
const app = express();
const { PORT } = process.env;
app.get("/", routes_1.default);
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
