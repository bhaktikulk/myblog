// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav style={styles.navbar}>
//             <ul style={styles.navList}>
//                 <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
//                 <li style={styles.navItem}><Link to="/add-post" style={styles.navLink}>Add Blog</Link></li>
//                 <li style={styles.navItem}><Link to="/list-posts" style={styles.navLink}>List Blogs</Link></li>
//             </ul>
//         </nav>
//     );
// };

// const styles = {
//     navbar: {
//         backgroundColor: '#333',
//         padding: '10px 0',
//     },
//     navList: {
//         listStyleType: 'none',
//         margin: 0,
//         padding: 0,
//         display: 'flex',
//         justifyContent: 'flex-start', /* Align items to the left */
//         alignItems: 'center',
//         gap: '20px',
//     },
//     navItem: {
//         display: 'inline-block',
//     },
//     navLink: {
//         color: 'white',
//         textDecoration: 'none',
//         fontSize: '18px',
//         fontWeight: 'bold',
//         padding: '8px 16px',
//         borderRadius: '5px',
//         transition: 'background-color 0.3s ease',
//     }
// };

// export default Navbar;

// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav style={styles.navbar}>
//             <ul style={styles.navList}>
//                 <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
//                 <li style={styles.navItem}><Link to="/add-post" style={styles.navLink}>Add Blog</Link></li>
//                 <li style={styles.navItem}><Link to="/list-posts" style={styles.navLink}>List Blogs</Link></li>
//             </ul>
//         </nav>
//     );
// };

// const styles = {
//     navbar: {
//         backgroundColor: '#333',
//         padding: '20px 0', // Increased padding for a broader navbar
//         textAlign: 'center', // Center the links in the navbar
//     },
//     navList: {
//         listStyleType: 'none',
//         margin: 0,
//         padding: 0,
//         display: 'flex',
//         justifyContent: 'center', // Center the links
//         alignItems: 'center',
//         gap: '40px', // Increase gap between links for a more spacious look
//     },
//     navItem: {
//         display: 'inline-block',
//     },
//     navLink: {
//         color: 'white',
//         textDecoration: 'none',
//         fontSize: '20px', // Larger font size for a bold navbar
//         fontWeight: 'bold',
//         padding: '10px 20px', // Increased padding for a more clickable look
//         borderRadius: '5px',
//         transition: 'background-color 0.3s ease',
//     }
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <nav style={styles.navbar}>
            <div style={styles.logo}>
                <h2>Bhakti's Blog 😇</h2>
            </div>
            <ul style={styles.navLinks}>
                <li>
                    <Link
                        to="/"
                        style={hovered === 'home' ? { ...styles.navLink, ...styles.navLinkHover } : styles.navLink}
                        onMouseEnter={() => setHovered('home')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        🏠Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/add-post"
                        style={hovered === 'add-post' ? { ...styles.navLink, ...styles.navLinkHover } : styles.navLink}
                        onMouseEnter={() => setHovered('add-post')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        Add Blog
                    </Link>
                </li>
                <li>
                    <Link
                        to="/list-posts"
                        style={hovered === 'list-posts' ? { ...styles.navLink, ...styles.navLinkHover } : styles.navLink}
                        onMouseEnter={() => setHovered('list-posts')}
                        onMouseLeave={() => setHovered(null)}
                    >
                        List Blogs
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: '20px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontSize: '24px',
        fontWeight: '700',
    },
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: '500',
        transition: 'color 0.3s ease',
    },
    navLinkHover: {
        color: '#feb47b', // Hover effect color
    },
};

export default Navbar;
