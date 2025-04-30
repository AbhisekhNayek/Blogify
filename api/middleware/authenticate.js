import jwt from 'jsonwebtoken';

// Middleware function to authenticate the user based on a JWT token
export const authenticate = async (req, res, next) => {
    try {
        // Retrieve the access token from cookies
        const token = req.cookies.access_token;

        // If no token is found, return an unauthorized error (403 Forbidden)
        if (!token) {
            return next(403, 'Unauthorized');
        }

        // Verify the token using the secret key from environment variables
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded token information (user data) to the request object
        req.user = decodeToken;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If any error occurs during token verification, return a 500 error
        next(500, error.message);
    }
};
