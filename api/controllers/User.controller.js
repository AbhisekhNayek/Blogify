import cloudinary from "../config/cloudinary.js";
import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

// ==============================
// Get Single User
// ==============================
export const getUser = async (req, res, next) => {
    try {
        const { userid } = req.params;

        const user = await User.findById(userid).lean().exec();
        if (!user) {
            return next(handleError(404, "User not found."));
        }

        res.status(200).json({
            success: true,
            message: "User data found.",
            user
        });
    } catch (error) {
        next(handleError(500, error.message));
    }
};

// ==============================
// Update User Profile
// ==============================
export const updateUser = async (req, res, next) => {
    try {
        const { userid } = req.params;
        const data = JSON.parse(req.body.data);

        const user = await User.findById(userid);
        if (!user) return next(handleError(404, "User not found."));

        user.name = data.name || user.name;
        user.email = data.email || user.email;
        user.bio = data.bio || user.bio;

        if (data.password && data.password.length >= 8) {
            user.password = bcryptjs.hashSync(data.password);
        }

        if (req.file) {
            const uploadResult = await cloudinary.uploader.upload(req.file.path, {
                folder: "yt-mern-blog",
                resource_type: "auto"
            });

            user.avatar = uploadResult.secure_url;
        }

        await user.save();

        const newUser = user.toObject();
        delete newUser.password;

        res.status(200).json({
            success: true,
            message: "User updated successfully.",
            user: newUser
        });
    } catch (error) {
        next(handleError(500, error.message));
    }
};

// ==============================
// Get All Users (Admin use case)
// ==============================
export const getAllUser = async (req, res, next) => {
    try {
        const user = await User.find().sort({ createdAt: -1 })
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        next(handleError(500, error.message))
    }
}

// ==============================
// Delete User (Admin use case)
// ==============================
export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        if (!user) return next(handleError(404, "User not found."));

        res.status(200).json({
            success: true,
            message: "User deleted successfully."
        });
    } catch (error) {
        next(handleError(500, error.message));
    }
};
