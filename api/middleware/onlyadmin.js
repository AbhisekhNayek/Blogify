import jwt from 'jsonwebtoken';

// Middleware function to ensure that only admins have access to the route
export const onlyadmin = async (req, res, next) => {
    try {
        // Retrieve the access token from cookies
        const token = req.cookies.access_token;

        // If no token is found, return an unauthorized error (403 Forbidden)
        if (!token) {
            return next(403, 'Unauthorized');
        }

        // Verify the token using the secret key from environment variables
        const decodeToken = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the decoded token has the role of 'admin'
        if (decodeToken.role === 'admin') {
            // Attach the decoded token (user data) to the request object
            req.user = decodeToken;
            // Proceed to the next middleware or route handler
            next();
        } else {
            // If the role is not 'admin', return unauthorized (403 Forbidden)
            return next(403, 'Unauthorized');
        }
    } catch (error) {
        // If any error occurs during token verification, return a 500 error
        next(500, error.message);
    }
};
