import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/User.controller.js'
import upload from '../config/multer.js'
import { authenticate } from '../middleware/authenticate.js'

const UserRoute = express.Router()

// Apply authentication middleware to all routes in this router
UserRoute.use(authenticate)

// Get a specific user's data by user ID
UserRoute.get('/get-user/:userid', getUser)

// Update a user's information, including profile picture (authentication required)
UserRoute.put('/update-user/:userid', upload.single('file'), updateUser)

// Get all users (admin only, requires authentication)
UserRoute.get('/get-all-user', getAllUser)

// Delete a user by ID (admin only, requires authentication)
UserRoute.delete('/delete/:id', deleteUser)

export default UserRoute
