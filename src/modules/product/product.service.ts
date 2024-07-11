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

const searchProductsIntoDB = async (query: Record<string, unknown>) => {
    const searchItem = query.searchItem;
    const result = await Product.find({
        $or: [
            { title: { $regex: searchItem, $options: "i" } },
            { description: { $regex: searchItem, $options: "i" } }
        ]
    });

    return result;
};

const getAllProductsFromDB = async (page: number) => {
    const skip = (page - 1) * 8;
    const result = await Product.find().skip(skip).limit(8);
    return result;
};

const getProductsByFilteringFromDB = async (amount: string) => {
    let result;
    if (amount === 'lessThenSixty') {
        result = await Product.find({ price: { $lt: 60 } });
    } else if (amount === 'moreThenSixty') {
        result = await Product.find({ price: { $gt: 60 } });
    } else {
        result = await Product.find().limit(8);
    };

    return result;
}

const getSingleProductFromDB = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};

const updateProductIntoDB = async (id: string, payload: TProduct) => {
    const result = await Product.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteProductFromDB = async (id: string) => {
    const result = await Product.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result;
}

export const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getProductsByFilteringFromDB,
    getSingleProductFromDB,
    searchProductsIntoDB,
    updateProductIntoDB,
    deleteProductFromDB
};