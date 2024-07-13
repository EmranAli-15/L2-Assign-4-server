import { Product } from "../product/product.model";
import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryIntoDB = async (payload: Partial<TCategory>) => {
    const result = await Category.create(payload);
    return result;
};

const getAllCategoryFromDB = async () => {
    const result = await Category.find();
    return result;
};

const getCategoryProductsFromDB = async (category: string) => {
    const result = await Product.find({ category: { $regex: category, $options: "i" } });
    return result;
}


export const categoryServices = {
    createCategoryIntoDB,
    getAllCategoryFromDB,
    getCategoryProductsFromDB
};