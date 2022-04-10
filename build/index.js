"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const img_route_1 = __importDefault(require("./routes/img-route"));
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use('/api', img_route_1.default);
const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`Server Listening On Port ${PORT}`));
exports.default = app;
