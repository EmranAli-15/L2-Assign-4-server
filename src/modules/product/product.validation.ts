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

export const productValidations = {
    createProductValidation
};