import express from 'express'
import { addBlog, deleteBlog, editBlog, getAllBlogs, getBlog, getBlogByCategory, getRelatedBlog, search, showAllBlog, updateBlog } from '../controllers/Blog.controller.js'
import upload from '../config/multer.js'
import { authenticate } from '../middleware/authenticate.js'

const BlogRoute = express.Router()

// Add a new blog (authentication required, with file upload)
BlogRoute.post('/add', authenticate, upload.single('file'), addBlog)

// Edit an existing blog (authentication required)
BlogRoute.get('/edit/:blogid', authenticate, editBlog)

// Update a blog (authentication required, with file upload)
BlogRoute.put('/update/:blogid', authenticate, upload.single('file'), updateBlog)

// Delete a blog (authentication required)
BlogRoute.delete('/delete/:blogid', authenticate, deleteBlog)

// Get all blogs (authentication required)
BlogRoute.get('/get-all', authenticate, showAllBlog)

// Get a single blog by its slug (no authentication required)
BlogRoute.get('/get-blog/:slug', getBlog)

// Get related blogs by category and excluding a specific blog (no authentication required)
BlogRoute.get('/get-related-blog/:category/:blog', getRelatedBlog)

// Get blogs by category (no authentication required)
BlogRoute.get('/get-blog-by-category/:category', getBlogByCategory)

// Search for blogs (no authentication required)
BlogRoute.get('/search', search)

// Get all blogs (no authentication required)
BlogRoute.get('/blogs', getAllBlogs)

export default BlogRoute
