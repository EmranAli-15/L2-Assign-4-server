"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const category_model_1 = require("../category/category.model");
const product_model_1 = require("./product.model");
const createProductIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const category = payload.category;
    const didFindCategory = yield category_model_1.Category.findOne({ category });
    if (!didFindCategory) {
        throw new AppError_1.default(400, 'Category not found');
    }
    ;
    const result = yield product_model_1.Product.create(payload);
    return result;
});
const searchProductsIntoDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const searchItem = query.searchItem;
    const result = yield product_model_1.Product.find({
        $or: [
            { title: { $regex: searchItem, $options: "i" } },
            { description: { $regex: searchItem, $options: "i" } }
        ]
    });
    return result;
});
const getAllProductsFromDB = (page) => __awaiter(void 0, void 0, void 0, function* () {
    const skip = (page - 1) * 8;
    const result = yield product_model_1.Product.find().skip(skip).limit(8);
    return result;
});
const getProductsByFilteringFromDB = (amount) => __awaiter(void 0, void 0, void 0, function* () {
    let result;
    if (amount === 'lessThenHundred') {
        result = yield product_model_1.Product.find({ price: { $lt: 100 } });
    }
    else if (amount === 'moreThenHundred') {
        result = yield product_model_1.Product.find({ price: { $gt: 100 } });
    }
    else {
        result = yield product_model_1.Product.find().limit(8);
    }
    ;
    return result;
});
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
const updateProductIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(id);
    return result;
});
const reduceQuantityFromDB = (id, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const getData = yield product_model_1.Product.findById(id);
    const store = getData === null || getData === void 0 ? void 0 : getData.quantity;
    const remain = store - quantity;
    if (remain < 0) {
        throw new AppError_1.default(400, 'Insufficient Quantity');
    }
    const result = yield product_model_1.Product.findByIdAndUpdate(id, { quantity: remain }, { new: true });
    return result;
});
exports.productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getProductsByFilteringFromDB,
    getSingleProductFromDB,
    searchProductsIntoDB,
    updateProductIntoDB,
    deleteProductFromDB,
    reduceQuantityFromDB
};
