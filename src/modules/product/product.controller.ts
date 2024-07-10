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
        const result = await productServices.getAllProductsFromDB();

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Products fetched successfully",
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

export const productControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    searchProducts
};