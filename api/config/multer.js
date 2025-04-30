// Importing multer for handling multipart/form-data (mainly file uploads)
import multer from 'multer';

// Configuring disk storage settings for multer
const storage = multer.diskStorage({
    // Set the filename to be the original name of the uploaded file
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// Defining a file filter to restrict uploads to specific image types
function fileFilter(req, file, cb) {
    const allowedFiles = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp'];
    
    // If the uploaded file type is not allowed, return an error
    if (!allowedFiles.includes(file.mimetype)) {
        cb(new Error('Only images are allowed.'), false);
    } else {
        // Accept the file
        cb(null, true);
    }
}

// Creating a multer instance with custom storage and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Exporting the configured multer instance for use in routes/controllers
export default upload;
