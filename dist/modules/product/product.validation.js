"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidations = void 0;
const zod_1 = require("zod");
const createProductValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        price: zod_1.z.number(),
        description: zod_1.z.string(),
        rating: zod_1.z.number(),
        image: zod_1.z.string(),
        quantity: zod_1.z.number(),
        category: zod_1.z.string()
    })
});
const updateProductValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        description: zod_1.z.string().optional(),
        rating: zod_1.z.number().optional(),
        image: zod_1.z.string().optional(),
        quantity: zod_1.z.number().optional(),
        category: zod_1.z.string().optional()
    })
});
exports.productValidations = {
    createProductValidation,
    updateProductValidation
};
