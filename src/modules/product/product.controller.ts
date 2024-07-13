import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.service";

const createProduct = catchAsync(
    async (req, res) => {
        const result = await productServices.createProductIntoDB(req.body);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Product created successfully",
            data: result
        });
    }
);

const searchProducts = catchAsync(
    async (req, res) => {
        const result = await productServices.searchProductsIntoDB(req.query);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Products fetched successfully",
            data: result
        });
    }
);

const getAllProducts = catchAsync(
    async (req, res) => {
        const { page } = req.query;
        const skipNum = parseInt(page as string);

        const result = await productServices.getAllProductsFromDB(skipNum);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Products fetched successfully",
            data: result
        });
    }
);

const getAllProductsByFiltering = catchAsync(
    async (req, res) => {
        const { amount } = req.query;

        const result = await productServices.getProductsByFilteringFromDB(amount as string);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Products filtered successfully",
            data: result
        });
    }
);

const getSingleProduct = catchAsync(
    async (req, res) => {
        const { id } = req.params;
        const result = await productServices.getSingleProductFromDB(id);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Product get successfully",
            data: result
        });
    }
);

const updateProduct = catchAsync(
    async (req, res) => {
        const { id } = req.params;
        const payload = req.body;
        const result = await productServices.updateProductIntoDB(id, payload);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Product updated successfully",
            data: result
        });
    }
);

const deleteProduct = catchAsync(
    async (req, res) => {
        const { id } = req.params;
        const result = await productServices.deleteProductFromDB(id);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Product deleted successfully",
            data: result
        });
    }
);

const reduceQuantity = catchAsync(
    async (req, res) => {
        const { id, quantity } = req.body;
        const result = await productServices.reduceQuantityFromDB(id, quantity);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Product Sell successfully",
            data: result
        });
    }
);

export const productControllers = {
    createProduct,
    getAllProducts,
    getAllProductsByFiltering,
    getSingleProduct,
    searchProducts,
    updateProduct,
    deleteProduct,
    reduceQuantity
};