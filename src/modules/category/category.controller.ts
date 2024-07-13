import catchAsync from "../../utils/catchAsync";
import { categoryServices } from "./category.service";

const createCategory = catchAsync(
    async (req, res) => {
        const result = await categoryServices.createCategoryIntoDB(req.body);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Category created successfully",
            data: result
        });
    }
);

const getAllCategory = catchAsync(
    async (req, res) => {
        const result = await categoryServices.getAllCategoryFromDB();

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Category fetched successfully",
            data: result
        });
    }
);

const getCategoryProducts = catchAsync(
    async (req, res) => {
        const  {category}  = req.query;
        const result = await categoryServices.getCategoryProductsFromDB(category as string);

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Similar category products fetched successfully",
            data: result
        });
    }
);


export const categoryControllers = {
    createCategory,
    getAllCategory,
    getCategoryProducts
};