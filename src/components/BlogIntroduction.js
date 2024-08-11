// BlogIntroduction.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/BlogIntroduction.scss';

const BlogIntroduction = () => {
  return (
    <motion.section
      className="blog-introduction"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>To My Blog...</h2>
      <p>
        Explore a collection of insightful articles covering various topics in full stack development. 
        Dive into detailed posts about Node.js, React, Angular, and C#.
      </p>
      <Link to="/all-blogs" className="blog-link">Read All Blogs</Link>
    </motion.section>
  );
};

export default BlogIntroduction;
