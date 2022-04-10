"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const missing_file_1 = __importDefault(require("../middlewares/missing-file"));
const check_thumb_exists_1 = __importDefault(require("../middlewares/check-thumb-exists"));
const not_found_1 = __importDefault(require("../middlewares/not-found"));
const thumb_1 = require("../middlewares/thumb");
const img_controller_1 = require("../controller/img-controller");
const imgRoute = express_1.default.Router();
imgRoute.get('/images', [missing_file_1.default, check_thumb_exists_1.default, not_found_1.default, thumb_1.thumbDirectory], img_controller_1.imgController);
exports.default = imgRoute;
