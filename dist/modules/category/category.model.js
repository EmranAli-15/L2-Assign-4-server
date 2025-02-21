"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    category: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: false,
        default: 0
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.Category = (0, mongoose_1.model)('Category', categorySchema);
