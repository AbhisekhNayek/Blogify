// Helper function to create and return a custom error object
export const handleError = (statusCode = 500, message = 'Something went wrong') => {
    // Create a new error object with the provided message
    const error = new Error(message);
    
    // Attach a custom status code to the error object
    error.statusCode = statusCode;
    
    // Return the error object to be handled by error-handling middleware
    return error;
};
