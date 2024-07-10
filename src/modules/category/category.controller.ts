import catchAsync from "../../utils/catchAsync";
import { categoryServices } from "./category.service";

const createFacility = catchAsync(
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


export const categoryControllers = {
    createFacility
};