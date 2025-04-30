import express from 'express'
import { GoogleLogin, Login, Logout, Register } from '../controllers/Auth.controller.js'
import { authenticate } from '../middleware/authenticate.js'

const AuthRoute = express.Router()

// Register a new user
AuthRoute.post('/register', Register)

// Log in a user with credentials
AuthRoute.post('/login', Login)

// Log in a user using Google OAuth
AuthRoute.post('/google-login', GoogleLogin)

// Log out a user (authentication required)
AuthRoute.get('/logout', authenticate, Logout)

export default AuthRoute
