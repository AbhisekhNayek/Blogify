import mongoose from "mongoose";

// Define the schema for a Blog Category

const categorySchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

})

const Category = mongoose.model('Category', categorySchema, 'categories')
export default Category 