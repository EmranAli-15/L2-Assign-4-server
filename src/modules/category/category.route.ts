import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidations } from './category.validation';
import { categoryControllers } from './category.controller';
const route = express.Router();

route.post('/category', validateRequest(categoryValidations.createCategoryValidation), categoryControllers.createCategory);

route.get('/category', categoryControllers.getAllCategory);

route.get('/category-products', categoryControllers.getCategoryProducts);


export const categoryRoutes = route;