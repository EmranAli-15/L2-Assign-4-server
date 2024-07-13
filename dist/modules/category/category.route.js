"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_validation_1 = require("./category.validation");
const category_controller_1 = require("./category.controller");
const route = express_1.default.Router();
route.post('/category', (0, validateRequest_1.default)(category_validation_1.categoryValidations.createCategoryValidation), category_controller_1.categoryControllers.createCategory);
route.get('/category', category_controller_1.categoryControllers.getAllCategory);
route.get('/category-products', category_controller_1.categoryControllers.getCategoryProducts);
exports.categoryRoutes = route;
