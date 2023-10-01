import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      title: "Building a Blog with React and Tailwind CSS",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 3,
      title: "Advanced React Techniques",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
  ];

  return (
    <div>
      <div className="bg-gray-200 p-4 md:p-8 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
          <div className="grid gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-700">{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
