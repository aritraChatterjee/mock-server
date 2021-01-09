"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var cors_1 = __importDefault(require("cors"));
var endpoints_1 = require("./controllers/endpoints");
var middleware_1 = require("./utils/middleware");
var logger_1 = require("./utils/logger");
var config_1 = require("./utils/config");
logger_1.info("starting mock-server with context-root : /" + config_1.CONTEXT_ROOT);
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.json());
app.use(middleware_1.requestLogger);
app.use("/" + config_1.CONTEXT_ROOT, endpoints_1.router);
app.use(middleware_1.unknownEndpoint);
app.use(middleware_1.errorHandler);
exports.default = app;