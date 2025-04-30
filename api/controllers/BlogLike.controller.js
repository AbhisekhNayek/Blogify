import { handleError } from "../helpers/handleError.js";
import BlogLike from "../models/bloglike.model.js";

// ==============================
// Toggle Blog Like (Add or Remove)
// ==============================
export const doLike = async (req, res, next) => {
    try {
        const { user, blogid } = req.body;

        // Check if the user has already liked the blog
        let like = await BlogLike.findOne({ user, blogid });

        if (!like) {
            // If not liked yet, create a new like
            const saveLike = new BlogLike({ user, blogid });
            like = await saveLike.save();
        } else {
            // If already liked, remove the like (toggle)
            await BlogLike.findByIdAndDelete(like._id);
        }

        // Get updated like count for the blog
        const likecount = await BlogLike.countDocuments({ blogid });

        res.status(200).json({ likecount });

    } catch (error) {
        next(handleError(500, error.message));
    }
};

// ==============================
// Get Like Count and User's Like Status
// ==============================
export const likeCount = async (req, res, next) => {
    try {
        const { blogid, userid } = req.params;

        // Total like count for the blog
        const likecount = await BlogLike.countDocuments({ blogid });

        // Check if the current user has liked the blog
        let isUserliked = false;
        if (userid) {
            const getuserlike = await BlogLike.countDocuments({ blogid, user: userid });
            if (getuserlike > 0) {
                isUserliked = true;
            }
        }

        res.status(200).json({
            likecount,
            isUserliked
        });

    } catch (error) {
        next(handleError(500, error.message));
    }
};
