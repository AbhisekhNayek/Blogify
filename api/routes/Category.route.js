import express from 'express'
import { addCategory, deleteCategory, getAllCategory, showCategory, updateCategory } from '../controllers/Category.controller.js'
import { onlyadmin } from '../middleware/onlyadmin.js'

const CategoryRoute = express.Router()

// Add a new category (admin only)
CategoryRoute.post('/add', onlyadmin, addCategory)

// Update an existing category (admin only)
CategoryRoute.put('/update/:categoryid', onlyadmin, updateCategory)

// Show a specific category (admin only)
CategoryRoute.get('/show/:categoryid', onlyadmin, showCategory)

// Delete a category (admin only)
CategoryRoute.delete('/delete/:categoryid', onlyadmin, deleteCategory)

// Get all categories (no admin restriction)
CategoryRoute.get('/all-category', getAllCategory)

export default CategoryRoute
