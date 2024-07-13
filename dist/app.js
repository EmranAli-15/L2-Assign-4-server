"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const category_route_1 = require("./modules/category/category.route");
const product_route_1 = require("./modules/product/product.route");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
// -----ROUTES START----- //
exports.app.use('/api', category_route_1.categoryRoutes);
exports.app.use('/api', product_route_1.productRoutes);
// -----ROUTES END----- //
exports.app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        message: "Not Found",
    });
});
exports.app.use(globalErrorHandler_1.default);
