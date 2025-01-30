// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');

// dotenv.config();

// const postRoutes = require('./routes/postRoutes');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Routes
// app.use('/api/posts', postRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.error('MongoDB Connection Failed:', err));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const fileUpload = require("express-fileupload");
// const cloudinary = require("cloudinary").v2;

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// // Cloudinary Configuration
// cloudinary.config({
//   cloud_name: "dj2juzuu5",  // Replace with your actual Cloudinary cloud name
//   api_key: "465124593463732",        // Replace with your actual Cloudinary API key
//   api_secret: "COr_Ct0q5d0OY4fGAmrXW3Jxl1o",  // Replace with your actual Cloudinary API secret
// });

// // MongoDB Connection
// mongoose
//   .connect(
//     "mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/Post?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Schema and Model for Blog Post
// const PostSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     imageUrl: { type: String, required: true }, // Field to store image URL
//   },
//   { timestamps: true }
// );

// const PostModel = mongoose.model("Post", PostSchema);

// // Routes

// // Add a New Blog Post
// app.post("/api/posts", async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = null;

//   try {
//     // Handle image upload if provided
//     if (req.files && req.files.image) {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url; // Save Cloudinary image URL
//     }

//     // Create a new post record
//     const newPost = await PostModel.create({
//       title,
//       description,
//       imageUrl,
//     });

//     res.json({ message: "Post added successfully!", post: newPost });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error. Could not create post.", error: err });
//   }
// });

// // Get All Blog Posts
// app.get("/api/posts", async (req, res) => {
//   try {
//     const posts = await PostModel.find();
//     res.json(posts);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error fetching posts.", error: err });
//   }
// });

// // Start Server
// app.listen(3001, () => {
//   console.log("Server is running on http://localhost:3001");
// });

// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const fileUpload = require("express-fileupload");
// const cloudinary = require("cloudinary").v2;

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// // Cloudinary Configuration
// cloudinary.config({
//   cloud_name: "dj2juzuu5",
//   api_key: "976595336731421",
//   api_secret: "vJJcdqQpqaCZwtCHZ2WIz8GD63A",
// });

// // MongoDB Connection
// mongoose
//   .connect(
//     "mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/Post?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));



// // Post Schema and Model
// const PostSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   imageUrl: { type: String, required: true },
// }, { timestamps: true });

// const PostModel = mongoose.model("Post", PostSchema);

// // Routes

// // Create Post Endpoint
// app.post("/api/posts", async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = null;

//   try {
//     // Handle image upload if provided
//     if (req.files && req.files.image) {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url; // Save Cloudinary image URL
//     }

//     // Create a new post record
//     const newPost = await PostModel.create({
//       title,
//       description,
//       imageUrl,
//     });

//     res.json(newPost);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error. Could not create post.", error: err });
//   }
// });

// // Start Server
// app.listen(3001, () => {
//   console.log("Server is running on http://localhost:3001");
// });

// const express = require('express');
// const mongoose = require('mongoose');
// const fileUpload = require('express-fileupload');
// const cloudinary = require('cloudinary').v2;
// const cors = require('cors');
// const Post = require('./models/Post'); // Import the Post model
// //const postRoutes = require("./routes/postRoutes");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: 'dj2juzuu5',
//   api_key: '465124593463732',
//   api_secret: 'COr_Ct0q5d0OY4fGAmrXW3Jxl1o',
// });

// // MongoDB connection
// mongoose.connect('mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/Post?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('Error connecting to MongoDB:', err));

// // Route to handle adding new post
// app.post('/api/posts', async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = null;

//   // Check if file is present
//   if (req.files && req.files.image) {
//     try {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url; // Cloudinary image URL
//     } catch (err) {
//       console.error('Error uploading image:', err);
//       return res.status(500).json({ message: 'Error uploading image', error: err });
//     }
//   }

//   try {
//     // Create a new post in MongoDB
//     const newPost = await Post.create({
//       title,
//       description,
//       imageUrl,
//     });

//     res.status(200).json({ message: 'Post created successfully!', post: newPost });
//   } catch (err) {
//     console.error('Error creating post:', err);
//     res.status(500).json({ message: 'Error creating post', error: err });
//   }
// });

// // Add this route to fetch all posts
// app.get('/api/posts', async (req, res) => {
//   try {
//     const posts = await Post.find(); // Fetch all posts from MongoDB
//     res.status(200).json(posts);
//   } catch (err) {
//     console.error('Error fetching posts:', err);
//     res.status(500).json({ message: 'Error fetching posts', error: err });
//   }
// });


// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const fileUpload = require("express-fileupload");
// const cloudinary = require("cloudinary").v2;
// const cors = require("cors");
// const Post = require("./models/Post"); // Import the Post model

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: "dj2juzuu5",
//   api_key: "465124593463732",
//   api_secret: "COr_Ct0q5d0OY4fGAmrXW3Jxl1o",
// });

// // MongoDB connection
// mongoose
//   .connect(
//     "mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/Post?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// /**
//  * Route to Create a New Post
//  */
// app.post("/api/posts", async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = null;

//   if (req.files && req.files.image) {
//     try {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url;
//     } catch (err) {
//       console.error("Error uploading image:", err);
//       return res.status(500).json({ message: "Error uploading image", error: err });
//     }
//   }

//   try {
//     const newPost = await Post.create({ title, description, imageUrl });
//     res.status(200).json({ message: "Post created successfully!", post: newPost });
//   } catch (err) {
//     console.error("Error creating post:", err);
//     res.status(500).json({ message: "Error creating post", error: err });
//   }
// });

// /**
//  * Route to Fetch All Posts
//  */
// app.get("/api/posts", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).json(posts);
//   } catch (err) {
//     console.error("Error fetching posts:", err);
//     res.status(500).json({ message: "Error fetching posts", error: err });
//   }
// });

// /**
//  * Route to Update (Edit) a Post
//  */
// app.put("/api/posts/:id", async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = req.body.imageUrl; // Use existing image if not updating

//   if (req.files && req.files.image) {
//     try {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url;
//     } catch (err) {
//       console.error("Error uploading image:", err);
//       return res.status(500).json({ message: "Error uploading image", error: err });
//     }
//   }

//   try {
//     const updatedPost = await Post.findByIdAndUpdate(
//       req.params.id,
//       { title, description, imageUrl },
//       { new: true }
//     );

//     if (!updatedPost) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     res.status(200).json({ message: "Post updated successfully!", post: updatedPost });
//   } catch (err) {
//     console.error("Error updating post:", err);
//     res.status(500).json({ message: "Error updating post", error: err });
//   }
// });

// /**
//  * Route to Delete a Post
//  */
// app.delete("/api/posts/:id", async (req, res) => {
//   try {
//     const deletedPost = await Post.findByIdAndDelete(req.params.id);

//     if (!deletedPost) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     res.status(200).json({ message: "Post deleted successfully!" });
//   } catch (err) {
//     console.error("Error deleting post:", err);
//     res.status(500).json({ message: "Error deleting post", error: err });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
// const express = require("express");
// const mongoose = require("mongoose");
// const fileUpload = require("express-fileupload");
// const cloudinary = require("cloudinary").v2;
// const cors = require("cors");
// const Post = require("./models/Post");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: "dj2juzuu5",
//   api_key: "465124593463732",
//   api_secret: "COr_Ct0q5d0OY4fGAmrXW3Jxl1o",
// });

// // MongoDB connection
// mongoose
//   .connect(
//     "mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/Post?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// /**
//  * Route to Create a New Post
//  */
// app.post("/api/posts", async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = null;

//   if (req.files && req.files.image) {
//     try {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url;
//     } catch (err) {
//       console.error("Error uploading image:", err);
//       return res.status(500).json({ message: "Error uploading image", error: err });
//     }
//   }

//   try {
//     const newPost = await Post.create({ title, description, imageUrl });
//     res.status(200).json({ message: "Post created successfully!", post: newPost });
//   } catch (err) {
//     console.error("Error creating post:", err);
//     res.status(500).json({ message: "Error creating post", error: err });
//   }
// });

// /**
//  * Route to Fetch All Posts
//  */
// app.get("/api/posts", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).json(posts);
//   } catch (err) {
//     console.error("Error fetching posts:", err);
//     res.status(500).json({ message: "Error fetching posts", error: err });
//   }
// });

// /**
//  * Route to Update (Edit) a Post
//  */
// app.put("/api/posts/:id", async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = req.body.imageUrl; // Use existing image if not updating

//   if (req.files && req.files.image) {
//     try {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url;
//     } catch (err) {
//       console.error("Error uploading image:", err);
//       return res.status(500).json({ message: "Error uploading image", error: err });
//     }
//   }

//   try {
//     const updatedPost = await Post.findByIdAndUpdate(
//       req.params.id,
//       { title, description, imageUrl },
//       { new: true }
//     );

//     if (!updatedPost) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     res.status(200).json({ message: "Post updated successfully!", post: updatedPost });
//   } catch (err) {
//     console.error("Error updating post:", err);
//     res.status(500).json({ message: "Error updating post", error: err });
//   }
// });

// /**
//  * Route to Delete a Post
//  */
// app.delete("/api/posts/:id", async (req, res) => {
//   try {
//     const deletedPost = await Post.findByIdAndDelete(req.params.id);

//     if (!deletedPost) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     res.status(200).json({ message: "Post deleted successfully!" });
//   } catch (err) {
//     console.error("Error deleting post:", err);
//     res.status(500).json({ message: "Error deleting post", error: err });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// const express = require("express");
// const mongoose = require("mongoose");
// const fileUpload = require("express-fileupload");
// const cloudinary = require("cloudinary").v2;
// const cors = require("cors");
// const Post = require("./models/Post");

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// // Cloudinary configuration
// cloudinary.config({
//   cloud_name: "dj2juzuu5",
//   api_key: "465124593463732",
//   api_secret: "COr_Ct0q5d0OY4fGAmrXW3Jxl1o",
// });

// // MongoDB connection
// mongoose
//   .connect(
//     "mongodb+srv://Bhakti12:12345678a@cluster.hozl3.mongodb.net/Post?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));


// app.post("/api/posts", async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = null;

//   if (req.files && req.files.image) {
//     try {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url;
//     } catch (err) {
//       console.error("Error uploading image:", err);
//       return res.status(500).json({ message: "Error uploading image", error: err });
//     }
//   }

//   try {
//     const newPost = await Post.create({ title, description, imageUrl });
//     res.status(200).json({ message: "Post created successfully!", post: newPost });
//   } catch (err) {
//     console.error("Error creating post:", err);
//     res.status(500).json({ message: "Error creating post", error: err });
//   }
// });

// /**
//  * Route to Fetch All Posts
//  */
// app.get("/api/posts", async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).json(posts);
//   } catch (err) {
//     console.error("Error fetching posts:", err);
//     res.status(500).json({ message: "Error fetching posts", error: err });
//   }
// });

// /**
//  * Route to Update (Edit) a Post
//  */
// app.put("/api/posts/:id", async (req, res) => {
//   const { title, description } = req.body;
//   let imageUrl = req.body.imageUrl; // Use existing image if not updating

//   if (req.files && req.files.image) {
//     try {
//       const file = req.files.image;
//       const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
//       imageUrl = uploadResult.secure_url;
//     } catch (err) {
//       console.error("Error uploading image:", err);
//       return res.status(500).json({ message: "Error uploading image", error: err });
//     }
//   }

//   try {
//     const updatedPost = await Post.findByIdAndUpdate(
//       req.params.id,
//       { title, description, imageUrl },
//       { new: true }
//     );

//     if (!updatedPost) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     res.status(200).json({ message: "Post updated successfully!", post: updatedPost });
//   } catch (err) {
//     console.error("Error updating post:", err);
//     res.status(500).json({ message: "Error updating post", error: err });
//   }
// });

// /**
//  * Route to Delete a Post
//  */
// app.delete("/api/posts/:id", async (req, res) => {
//   try {
//     const deletedPost = await Post.findByIdAndDelete(req.params.id);

//     if (!deletedPost) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     res.status(200).json({ message: "Post deleted successfully!" });
//   } catch (err) {
//     console.error("Error deleting post:", err);
//     res.status(500).json({ message: "Error deleting post", error: err });
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Welcome to the Blog API");
// });


// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const dotenv = require("dotenv");
const Post = require("./models/Post");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/" }));

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.post("/api/posts", async (req, res) => {
  const { title, description } = req.body;
  let imageUrl = null;

  if (req.files && req.files.image) {
    try {
      const file = req.files.image;
      const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
      imageUrl = uploadResult.secure_url;
    } catch (err) {
      console.error("Error uploading image:", err);
      return res.status(500).json({ message: "Error uploading image", error: err });
    }
  }

  try {
    const newPost = await Post.create({ title, description, imageUrl });
    res.status(200).json({ message: "Post created successfully!", post: newPost });
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ message: "Error creating post", error: err });
  }
});

/**
 * Route to Fetch All Posts
 */
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ message: "Error fetching posts", error: err });
  }
});

/**
 * Route to Update (Edit) a Post
 */
app.put("/api/posts/:id", async (req, res) => {
  const { title, description } = req.body;
  let imageUrl = req.body.imageUrl; // Use existing image if not updating

  if (req.files && req.files.image) {
    try {
      const file = req.files.image;
      const uploadResult = await cloudinary.uploader.upload(file.tempFilePath);
      imageUrl = uploadResult.secure_url;
    } catch (err) {
      console.error("Error uploading image:", err);
      return res.status(500).json({ message: "Error uploading image", error: err });
    }
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, description, imageUrl },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post updated successfully!", post: updatedPost });
  } catch (err) {
    console.error("Error updating post:", err);
    res.status(500).json({ message: "Error updating post", error: err });
  }
});

/**
 * Route to Delete a Post
 */
app.delete("/api/posts/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (err) {
    console.error("Error deleting post:", err);
    res.status(500).json({ message: "Error deleting post", error: err });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
