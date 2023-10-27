// BlogPage.js
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <h1>Welcome to Nick's Blog</h1>
      <p>
        Here's where I share my thoughts on software development, hiking, and my
        adventures with my dog.
      </p>
      {/* Sample blog post */}
      <article>
        <h2>My Journey from Food Scientist to Software Engineer</h2>
        <p>
          Transitioning from a food scientist to a software engineer was both
          challenging and rewarding. Let me share my story...
        </p>
      </article>
    </div>
  );
};

export default BlogPage;
