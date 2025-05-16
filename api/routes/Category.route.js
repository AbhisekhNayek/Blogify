import express from 'express'
import { addCategory, deleteCategory, getAllCategory, showCategory, updateCategory } from '../controllers/Category.controller.js'

const CategoryRoute = express.Router()

// Add a new category (admin only)
CategoryRoute.post('/add', addCategory)

// Update an existing category (admin only)
CategoryRoute.put('/update/:categoryid', updateCategory)

// Show a specific category (admin only)
CategoryRoute.get('/show/:categoryid', showCategory)

// Delete a category (admin only)
CategoryRoute.delete('/delete/:categoryid', deleteCategory)

// Get all categories (no admin restriction)
CategoryRoute.get('/all-category', getAllCategory)

export default CategoryRoute
