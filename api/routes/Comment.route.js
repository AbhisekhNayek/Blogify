import express from 'express'
import { addComment, commentCount, deleteComment, getAllComments, getComments } from '../controllers/Comment.controller.js'
import { authenticate } from '../middleware/authenticate.js'

const CommentRoute = express.Router()

// Add a new comment (authentication required)
CommentRoute.post('/add', authenticate, addComment)

// Get comments for a specific blog
CommentRoute.get('/get/:blogid', getComments)

// Get the count of comments for a specific blog
CommentRoute.get('/get-count/:blogid', commentCount)

// Get all comments made by the authenticated user
CommentRoute.get('/get-all-comment', authenticate, getAllComments)

// Delete a specific comment (authentication required)
CommentRoute.delete('/delete/:commentid', authenticate, deleteComment)

export default CommentRoute
