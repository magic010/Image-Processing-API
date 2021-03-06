"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imgController = exports.resizeImg = void 0;
const sharp_1 = __importDefault(require("sharp"));
const paths_1 = require("../paths");
const resizeImg = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, sharp_1.default)((0, paths_1.ImgPath)(String(filename)))
        .resize(width, height)
        .toFile(`.assets/thumbs/${filename}-thumb(${width}x${height}).jpg`);
});
exports.resizeImg = resizeImg;
const imgController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename, width, height } = req.query;
    yield (0, exports.resizeImg)(String(filename), Number(width), Number(height));
    res
        .status(200)
        .sendFile((0, paths_1.ImgThumbPath)(`${filename}-thumb(${width}x${height}).jpg`));
});
exports.imgController = imgController;
