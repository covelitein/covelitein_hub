import { Card } from "@/components/ui/card";
import React from "react";

const blogs = [
  {
    title: "How Digital Transformation is Shaping the Future",
    image: "https://via.placeholder.com/300",
    description:
      "Discover how brands are leveraging digital transformation to stay competitive in a rapidly changing world.",
    link: "#",
  },
  {
    title: "5 Tips for Building a Successful Digital Product",
    image: "https://via.placeholder.com/300",
    description:
      "Learn key strategies for creating digital products that delight users and drive business growth.",
    link: "#",
  },
  {
    title: "Why Technology Consulting is a Game-Changer",
    image: "https://via.placeholder.com/300",
    description:
      "Explore the benefits of working with tech consultants to optimize your processes and achieve your goals.",
    link: "#",
  },
];

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
  <section className="py-12">
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
