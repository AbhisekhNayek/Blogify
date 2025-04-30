import { handleError } from "../helpers/handleError.js";
import Category from "../models/category.model.js";

// ==============================
// Add a New Category
// ==============================
export const addCategory = async (req, res, next) => {
    try {
        const { name, slug } = req.body;

        const category = new Category({ name, slug });
        await category.save();

        res.status(200).json({
            success: true,
            message: 'Category added successfully.'
        });
    } catch (error) {
        next(handleError(500, error.message));
    }
};

// ==============================
// Show One Category by ID
// ==============================
export const showCategory = async (req, res, next) => {
    try {
        const { categoryid } = req.params;

        const category = await Category.findById(categoryid);
        if (!category) {
            return next(handleError(404, 'Data not found.'));
        }

        res.status(200).json({ category });
    } catch (error) {
        next(handleError(500, error.message));
    }
};

// ==============================
// Update a Category by ID
// ==============================
export const updateCategory = async (req, res, next) => {
    try {
        const { name, slug } = req.body;
        const { categoryid } = req.params;

        const category = await Category.findByIdAndUpdate(
            categoryid,
            { name, slug },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: 'Category updated successfully.',
            category
        });
    } catch (error) {
        next(handleError(500, error.message));
    }
};

// ==============================
// Delete a Category by ID
// ==============================
export const deleteCategory = async (req, res, next) => {
    try {
        const { categoryid } = req.params;

        await Category.findByIdAndDelete(categoryid);

        res.status(200).json({
            success: true,
            message: 'Category deleted successfully.'
        });
    } catch (error) {
        next(handleError(500, error.message));
    }
};

// ==============================
// Get All Categories (sorted A-Z)
// ==============================
export const getAllCategory = async (req, res, next) => {
    try {
        const category = await Category.find()
            .sort({ name: 1 })
            .lean()
            .exec();

        res.status(200).json({ category });
    } catch (error) {
        next(handleError(500, error.message));
    }
};
