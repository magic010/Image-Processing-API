"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const missingFile = (req, res, next) => {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    if (!filename || !width || !height) {
        return res.status(400).send({ error: 'file entered incorrect' });
    }
    return next();
};
exports.default = missingFile;
