import { z } from "zod";

const createCategoryValidation = z.object({
    body: z.object({
        category: z.string(),
        total: z.number().optional(),
        image: z.string()
    })
});

export const categoryValidations = {
    createCategoryValidation
};