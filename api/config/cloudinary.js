// Importing Cloudinary SDK and dotenv for environment variable management
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Cloudinary Configuration
// Setting up the cloudinary instance with credentials from environment variables
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_APP_NAME,   // Your Cloudinary cloud name
    api_key: process.env.CLOUDINARY_API_KEY,       // Your Cloudinary API key
    api_secret: process.env.CLOUDINARY_API_SECRET  // Your Cloudinary API secret
});

// Exporting configured cloudinary instance for use in other modules
export default cloudinary;
