import React, { useState } from 'react';
import { blogData } from './BlogData.js';
import '../styles/BlogList.scss';

const BlogList = () => {
  // State to track which blog content is expanded
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  return (
    <div className="blog-list-container">
      <h2>All Blogs</h2>
      <ul className="blog-list">
        {blogData.map((blog) => (
          <li key={blog.id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>
              {expandedBlogId === blog.id ? blog.content : `${blog.summary}...`}
            </p>
            <button
              className="expand-button"
              onClick={() => toggleExpand(blog.id)}
            >
              {expandedBlogId === blog.id ? 'Show Less' : 'Read More'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
