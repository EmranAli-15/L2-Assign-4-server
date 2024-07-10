import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productValidations } from './product.validation';
import { productControllers } from './product.controller';
const route = express.Router();


route.post('/product', validateRequest(productValidations.createProductValidation), productControllers.createProduct);

route.get('/product', productControllers.getAllProducts);

route.get('/product/:id', productControllers.getSingleProduct);


export const productRoutes = route;