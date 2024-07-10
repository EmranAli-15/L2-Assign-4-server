import { model, Schema } from "mongoose";
import { TCategory } from "./category.interface";

const categorySchema = new Schema<TCategory>({
    category: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: false,
        default: 0
    },
    image: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

export const Category = model<TCategory>('Category', categorySchema);