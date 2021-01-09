"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app")); // the actual Express app
var http_1 = require("http");
var config_1 = require("./utils/config");
var server = http_1.createServer(app_1.default);
server.listen(config_1.PORT, function () {
    console.log("Server running on port " + config_1.PORT);
});
