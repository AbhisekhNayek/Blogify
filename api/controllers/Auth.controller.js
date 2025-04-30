// Import necessary modules
import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

// ==============================
// User Registration Controller
// ==============================
export const Register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const checkuser = await User.findOne({ email });
        if (checkuser) {
            return next(handleError(409, 'User already registered.'));
        }

        // Hash the password for security
        const hashedPassword = bcryptjs.hashSync(password);

        // Create new user instance
        const user = new User({ name, email, password: hashedPassword });

        // Save user to database
        await user.save();

        // Respond with success
        res.status(200).json({
            success: true,
            message: 'Registration successful.'
        });

    } catch (error) {
        // Handle server errors
        next(handleError(500, error.message));
    }
};


// ==============================
// User Login Controller
// ==============================
export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return next(handleError(404, 'Invalid login credentials.'));
        }

        // Compare provided password with stored hash
        const comparePassword = await bcryptjs.compare(password, user.password);
        if (!comparePassword) {
            return next(handleError(404, 'Invalid login credentials.'));
        }

        // Generate JWT token
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        }, process.env.JWT_SECRET);

        // Set token as an HTTP-only cookie
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'
        });

        // Prepare response without password
        const newUser = user.toObject({ getters: true });
        delete newUser.password;

        res.status(200).json({
            success: true,
            user: newUser,
            message: 'Login successful.'
        });

    } catch (error) {
        next(handleError(500, error.message));
    }
};


// ==============================
// Google Login Controller
// ==============================
export const GoogleLogin = async (req, res, next) => {
    try {
        const { name, email, avatar } = req.body;

        // Find existing user by email
        let user = await User.findOne({ email });

        // If user does not exist, create a new one with a random password
        if (!user) {
            const password = Math.random().toString(); // generate random string
            const hashedPassword = bcryptjs.hashSync(password);

            const newUser = new User({
                name,
                email,
                password: hashedPassword,
                avatar
            });

            user = await newUser.save();
        }

        // Generate JWT token
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            email: user.email,
            avatar: user.avatar
        }, process.env.JWT_SECRET);

        // Set token as HTTP-only cookie
        res.cookie('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'
        });

        // Prepare response without password
        const newUser = user.toObject({ getters: true });
        delete newUser.password;

        res.status(200).json({
            success: true,
            user: newUser,
            message: 'Login successful.'
        });

    } catch (error) {
        next(handleError(500, error.message));
    }
};


// ==============================
// Logout Controller
// ==============================
export const Logout = async (req, res, next) => {
    try {
        // Clear the token cookie
        res.clearCookie('access_token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            path: '/'
        });

        // Respond with success message
        res.status(200).json({
            success: true,
            message: 'Logout successful.'
        });

    } catch (error) {
        next(handleError(500, error.message));
    }
};
