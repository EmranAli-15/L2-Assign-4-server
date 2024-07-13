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
exports.productControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const product_service_1 = require("./product.service");
const createProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.createProductIntoDB(req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Product created successfully",
        data: result
    });
}));
const searchProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_service_1.productServices.searchProductsIntoDB(req.query);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Products fetched successfully",
        data: result
    });
}));
const getAllProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page } = req.query;
    const skipNum = parseInt(page);
    const result = yield product_service_1.productServices.getAllProductsFromDB(skipNum);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Products fetched successfully",
        data: result
    });
}));
const getAllProductsByFiltering = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount } = req.query;
    const result = yield product_service_1.productServices.getProductsByFilteringFromDB(amount);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Products filtered successfully",
        data: result
    });
}));
const getSingleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield product_service_1.productServices.getSingleProductFromDB(id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Product get successfully",
        data: result
    });
}));
const updateProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const payload = req.body;
    const result = yield product_service_1.productServices.updateProductIntoDB(id, payload);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Product updated successfully",
        data: result
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield product_service_1.productServices.deleteProductFromDB(id);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Product deleted successfully",
        data: result
    });
}));
const reduceQuantity = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, quantity } = req.body;
    const result = yield product_service_1.productServices.reduceQuantityFromDB(id, quantity);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Product Sell successfully",
        data: result
    });
}));
exports.productControllers = {
    createProduct,
    getAllProducts,
    getAllProductsByFiltering,
    getSingleProduct,
    searchProducts,
    updateProduct,
    deleteProduct,
    reduceQuantity
};
