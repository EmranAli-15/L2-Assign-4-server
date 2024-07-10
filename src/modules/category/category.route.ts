import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { categoryValidations } from './category.validation';
import { categoryControllers } from './category.controller';
const route = express.Router();

route.post('/category', validateRequest(categoryValidations.createCategoryValidation), categoryControllers.createFacility);


export const categoryRoutes = route;