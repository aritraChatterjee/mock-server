"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.CONTEXT_ROOT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var CONTEXT_ROOT = process.env.CONTEXT_ROOT;
exports.CONTEXT_ROOT = CONTEXT_ROOT;
var PORT = process.env.PORT;
exports.PORT = PORT;
