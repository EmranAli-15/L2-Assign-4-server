import AppError from "../../errors/AppError";
import { Category } from "../category/category.model";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const category = payload.category;
    const didFindCategory = await Category.findOne({ category });

    if (!didFindCategory) {
        throw new AppError(400, 'Category not found');
    };

    const result = await Product.create(payload);
    return result;
};

const getAllProductsFromDB = async () => {
    const result = await Product.find();
    return result;
};

const getSingleProductFromDB = async (id: string) => {
    const result = await Product.findById(id);
    return result;
}

export const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB
};