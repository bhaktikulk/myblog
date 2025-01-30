// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const ListPostsPage = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/posts');
//         setPosts(response.data); // Update posts with the fetched data
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="list-posts-page">
//       <h2>All Blog Posts</h2>
//       <ul>
//         {posts.map((post) => (
//           <li key={post._id}>
//             <h3>{post.title}</h3>
//             {/* Use imageUrl for the image field */}
//             {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
//             <p>{post.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListPostsPage;

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Navigate to Add Post page

const ListPostsPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to fetch all posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Handle Edit Post (Navigate to Add Post Page with Post Data)
  const handleEdit = (post) => {
    navigate("/add-post", { state: { post } }); // Send post data to AddPostPage
  };

  // Handle Delete Post
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        setPosts(posts.filter((post) => post._id !== id)); // Remove post from UI
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <div className="list-posts-page">
      <h2>All Blog Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
            <p>{post.description}</p>
            <div className="buttons">
              <button className="edit-btn" onClick={() => handleEdit(post)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(post._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPostsPage;
