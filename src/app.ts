import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { categoryRoutes } from './modules/category/category.route';
import { productRoutes } from './modules/product/product.route';
export const app = express();

app.use(express.json());
app.use(cors());




// -----ROUTES START----- //

app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

// -----ROUTES END----- //




app.get('/', (req, res) => {
  res.send('Hello World!')
});



app.use((req: Request, res: Response, next) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Not Found",
  })
});

app.use(globalErrorHandler);