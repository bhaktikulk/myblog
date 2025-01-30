// // src/pages/AddPostPage.jsx
// import { useState } from 'react';
// import axios from 'axios';

// const AddPostPage = () => {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [image, setImage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const postData = { title, description, image };

//         try {
//             await axios.post('http://localhost:5000/api/posts', postData);
//             alert('Post added successfully');
//         } catch (error) {
//             console.error('Error adding post:', error);
//         }
//     };

//     return (
//         <div className="add-post-page">
//             <h2>Add New Post</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                 />
//                 <textarea
//                     placeholder="Description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     required
//                 ></textarea>
//                 <input
//                     type="text"
//                     placeholder="Image URL"
//                     value={image}
//                     onChange={(e) => setImage(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default AddPostPage;

// import React, { useState } from 'react';

// const AddPostPage = () => {
//     const [title, setTitle] = useState('');
//     const [image, setImage] = useState(null);
//     const [description, setDescription] = useState('');

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log({ title, image, description });

//         // Here you can upload the image to Cloudinary or your backend
//     };

//     return (
//         <div className="add-post-page">
//             <div className="form-container">
//                 <h2>Add a New Blog Post</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Enter Blog Title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
                    
//                     {/* File input to choose image */}
//                     <input 
//                         type="file" 
//                         accept="image/*" 
//                         onChange={handleImageChange} 
//                     />

//                     {image && (
//                         <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
//                             Selected Image: {image.name}
//                         </p>
//                     )}

//                     <textarea
//                         placeholder="Enter Blog Description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />
//                     <button type="submit">Submit Post</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddPostPage;

// import React, { useState } from 'react';

// const AddPostPage = () => {
//     const [title, setTitle] = useState('');
//     const [image, setImage] = useState(null);
//     const [description, setDescription] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setMessage('');

//         // Prepare the form data
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('image', image);
//         formData.append('description', description);

//         try {
//             // Send a POST request to your server or Cloudinary for image upload
//             const response = await fetch('/api/posts', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 setMessage('Post submitted successfully!');
//                 setTitle('');
//                 setImage(null);
//                 setDescription('');
//             } else {
//                 setMessage(`Error: ${result.message || 'Something went wrong.'}`);
//             }
//         } catch (error) {
//             console.error('Error submitting post:', error);
//             setMessage('Error submitting post. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="add-post-page">
//             <div className="form-container">
//                 <h2>Add a New Blog Post</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Enter Blog Title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />

//                     {/* File input to choose image */}
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                     />

//                     {image && (
//                         <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
//                             Selected Image: {image.name}
//                         </p>
//                     )}

//                     <textarea
//                         placeholder="Enter Blog Description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />

//                     <button type="submit" disabled={loading}>
//                         {loading ? 'Submitting...' : 'Submit Post'}
//                     </button>
//                 </form>

//                 {message && (
//                     <p style={{ marginTop: '20px', color: message.startsWith('Error') ? 'red' : 'green' }}>
//                         {message}
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AddPostPage;

// import React, { useState } from 'react';

// const AddPostPage = () => {
//     const [title, setTitle] = useState('');
//     const [image, setImage] = useState(null);
//     const [description, setDescription] = useState('');
//     const [message, setMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             setImage(file);
//         }
//     };

//     // handleSubmit function to send form data
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setMessage('');

//         // Prepare the form data
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('description', description);
//         formData.append('image', image);  // Image file

//         try {
//             // Send a POST request to your server or Cloudinary for image upload
//             const response = await fetch('/api/posts', {
//                 method: 'POST',
//                 body: formData,
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 setMessage('Post submitted successfully!');
//                 setTitle('');
//                 setImage(null);
//                 setDescription('');
//             } else {
//                 setMessage(`Error: ${result.message || 'Something went wrong.'}`);
//             }
//         } catch (error) {
//             console.error('Error submitting post:', error);
//             setMessage('Error submitting post. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="add-post-page">
//             <div className="form-container">
//                 <h2>Add a New Blog Post</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Enter Blog Title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />

//                     {/* File input to choose image */}
//                     <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleImageChange}
//                     />

//                     {image && (
//                         <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>
//                             Selected Image: {image.name}
//                         </p>
//                     )}

//                     <textarea
//                         placeholder="Enter Blog Description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     />

//                     <button type="submit" disabled={loading}>
//                         {loading ? 'Submitting...' : 'Submit Post'}
//                     </button>
//                 </form>

//                 {message && (
//                     <p style={{ marginTop: '20px', color: message.startsWith('Error') ? 'red' : 'green' }}>
//                         {message}
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AddPostPage;

// import React, { useState } from "react";
// import axios from "axios";

// function AddPostPage() {
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("image", image);

//     try {
//       // Send a POST request to your server
//       const response = await axios.post("http://localhost:5000/api/posts", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (response.data) {
//         setMessage("Post submitted successfully!");
//         setTitle("");
//         setImage(null);
//         setDescription("");
//       }
//     } catch (error) {
//       console.error("Error submitting post:", error);
//       setMessage("Error submitting post. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="add-post-page">
//       <div className="form-container">
//         <h2>Add a New Blog Post</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter Blog Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           {/* File input to choose image */}
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />

//           {image && (
//             <p style={{ marginTop: "10px", fontSize: "14px", color: "#555" }}>
//               Selected Image: {image.name}
//             </p>
//           )}

//           <textarea
//             placeholder="Enter Blog Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Submitting..." : "Submit Post"}
//           </button>
//         </form>

//         {message && (
//           <p style={{ marginTop: "20px", color: message.startsWith("Error") ? "red" : "green" }}>
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default AddPostPage;

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const AddPostPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingPost = location.state?.post || null; // Check if editing

  // State for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [showTitle, setShowTitle] = useState(true); // State to track title visibility

  // Populate form with existing post data if editing
  useEffect(() => {
    if (existingPost) {
      setTitle(existingPost.title);
      setDescription(existingPost.description);
      setImageUrl(existingPost.imageUrl);
      setShowTitle(false); // Hide the default title when editing
    }
  }, [existingPost]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      if (existingPost) {
        // If editing, send PUT request
        await axios.put(`http://localhost:5000/api/posts/${existingPost._id}`, formData);
      } else {
        // If adding new post, send POST request
        await axios.post("http://localhost:5000/api/posts", formData);
      }
      navigate("/list-posts"); // Redirect to posts list
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="add-post-page">
      {showTitle && <h2>{existingPost ? "Edit Post" : "Add Post"}</h2>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        {imageUrl && !image && <img src={imageUrl} alt="Current" style={{ width: "200px" }} />}
        <button type="submit">{existingPost ? "Update Post" : "Create Post"}</button>
      </form>
    </div>
  );
};

export default AddPostPage;
