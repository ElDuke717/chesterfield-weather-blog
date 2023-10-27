// BlogPage.js
import React from "react";
import { posts } from "./blog_posts";

const BlogPage = () => {
  return (
    <div>
      <div className="main-info">
        <h1>Weather Blog</h1>
        <p>
          This is a collection of posts that about the local weather, this site,
          things happening in the community etc.
        </p>
        {/* Blog posts */}
        {posts.map((post, index) => (
          <div className="blog-post">
            <article key={index}>
              <h2>{post.title}</h2>
              <h3>{post.date}</h3>
              <h4>Written By: {post.author}</h4>
              <p>{post.content}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
