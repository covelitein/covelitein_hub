import { Card } from "@/components/ui/card";
import { blogs } from "@/constants";
import React from "react";

const BlogCard = ({ blog }: { blog: any }) => (
  <Card className="p-6">
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
    <p className="text-gray-600 mb-4">{blog.description}</p>
    <a href={blog.link} className="text-indigo-600 font-medium hover:underline">
      Read More →
    </a>
  </Card>
);

const Blogs = () => (
  <section className="py-12" id="blogs">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Latest Blogs</h2>
      <p className="text-gray-600 mb-10">
        Stay updated with our insights on technology, design, and development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  </section>
);

export default Blogs;
