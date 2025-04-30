import express from 'express'
import { doLike, likeCount } from '../controllers/BlogLike.controller.js'
import { authenticate } from '../middleware/authenticate.js'

const BlogLikeRoute = express.Router()

// Like or unlike a blog (authentication required)
BlogLikeRoute.post('/do-like', authenticate, doLike)

// Get the like count for a specific blog, and check if a user has liked it (authentication not required)
BlogLikeRoute.get('/get-like/:blogid/:userid?', likeCount)

export default BlogLikeRoute
