"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: false,
        default: false
    }
}, {
    timestamps: true
});
exports.Product = (0, mongoose_1.model)('Product', productSchema);
