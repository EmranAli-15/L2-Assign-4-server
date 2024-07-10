import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: Partial<TCategory>) => {
    const result = await Category.create(payload);
    return result;
};


export const categoryServices = {
    createCategoryIntoDB
};