"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImgThumbPath = exports.ImgPath = void 0;
const path_1 = __importDefault(require("path"));
const ImgPath = (imageName) => path_1.default.join(__dirname, '..', 'assets', 'images', `${imageName}.jpg`);
exports.ImgPath = ImgPath;
const ImgThumbPath = (imageName) => path_1.default.join(__dirname, '..', 'assets', 'thumbs', `${imageName}`);
exports.ImgThumbPath = ImgThumbPath;
