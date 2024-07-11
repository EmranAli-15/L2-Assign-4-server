import { z } from "zod";

const createProductValidation = z.object({
    body: z.object({
        title: z.string(),
        price: z.number(),
        description: z.string(),
        rating: z.number(),
        image: z.string(),
        quantity: z.number(),
        category: z.string()
    })
});

const updateProductValidation = z.object({
    body: z.object({
        title: z.string().optional(),
        price: z.number().optional(),
        description: z.string().optional(),
        rating: z.number().optional(),
        image: z.string().optional(),
        quantity: z.number().optional(),
        category: z.string().optional()
    })
});

export const productValidations = {
    createProductValidation,
    updateProductValidation
};