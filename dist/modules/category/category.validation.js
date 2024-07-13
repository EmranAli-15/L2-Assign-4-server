"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryValidations = void 0;
const zod_1 = require("zod");
const createCategoryValidation = zod_1.z.object({
    body: zod_1.z.object({
        category: zod_1.z.string(),
        total: zod_1.z.number().optional(),
        image: zod_1.z.string()
    })
});
exports.categoryValidations = {
    createCategoryValidation
};
