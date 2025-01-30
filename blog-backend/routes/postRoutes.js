// const express = require('express');
// const multer = require('multer');
// const cloudinary = require('../config/cloudinary');
// const Post = require('../models/Post');

// const router = express.Router();

// // Configure Multer for file upload
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // @route POST /api/posts
// // @desc  Create a new blog post
// router.post('/add', upload.single('image'), async (req, res) => {
//     try {
//         const { title, description } = req.body;
//         if (!req.file) {
//             return res.status(400).json({ error: 'Image file is required' });
//         }

//         // Upload image to Cloudinary
//         const uploadResponse = await cloudinary.uploader.upload_stream(
//             { folder: 'blog_images' },
//             async (error, result) => {
//                 if (error) {
//                     console.error('Cloudinary Upload Error:', error);
//                     return res.status(500).json({ error: 'Image upload failed' });
//                 }

//                 // Save post to MongoDB
//                 const newPost = new Post({
//                     title,
//                     description,
//                     imageUrl: result.secure_url,
//                 });

//                 await newPost.save();
//                 res.status(201).json({ message: 'Post created successfully', post: newPost });
//             }
//         );

//         uploadResponse.end(req.file.buffer);
//     } catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// // @route GET /api/posts
// // @desc  Get all blog posts
// router.get('/', async (req, res) => {
//     try {
//         const posts = await Post.find().sort({ createdAt: -1 });
//         res.json(posts);
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// module.exports = router;

// const express = require('express');
// const multer = require('multer');
// const cloudinary = require('../config/cloudinary');
// const Post = require('../models/Post');

// const router = express.Router();

// // Configure Multer for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // @route POST /api/posts/add
// // @desc  Create a new blog post
// router.post('/add', upload.single('image'), async (req, res) => {
//     try {
//         const { title, description } = req.body;
//         if (!req.file) {
//             return res.status(400).json({ error: 'Image file is required' });
//         }

//         // Upload image to Cloudinary
//         cloudinary.uploader.upload_stream(
//             { folder: 'blog_images' },
//             async (error, result) => {
//                 if (error) {
//                     console.error('Cloudinary Upload Error:', error);
//                     return res.status(500).json({ error: 'Image upload failed' });
//                 }

//                 // Save post to MongoDB
//                 const newPost = new Post({
//                     title,
//                     description,
//                     imageUrl: result.secure_url,
//                 });

//                 await newPost.save();
//                 res.status(201).json({ message: 'Post created successfully', post: newPost });
//             }
//         ).end(req.file.buffer);

//     } catch (error) {
//         console.error('Error creating post:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// // @route GET /api/posts
// // @desc  Get all blog posts
// router.get('/', async (req, res) => {
//     try {
//         const posts = await Post.find().sort({ createdAt: -1 });
//         res.json(posts);
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// module.exports = router;

const express = require("express");
const Post = require("../models/Post");
const { cloudinary } = require("../config");
const router = express.Router();

// Create a post
router.post("/", async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const newPost = await Post.create({ title, description, imageUrl });
    res.json(newPost);
  } catch (err) {
    res.status(500).json({ message: "Error creating post", error: err });
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts", error: err });
  }
});

// Edit a post
router.put("/:id", async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, { title, description, imageUrl }, { new: true });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: "Error updating post", error: err });
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting post", error: err });
  }
});

module.exports = router;
