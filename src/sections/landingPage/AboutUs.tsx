"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";
import { aboutPoints } from "@/constants";

export default function AboutUs() {
  // Framer Motion Variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      id="about"
      className="py-6 px-4"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={textVariant} className="">
          <h3 className="text-3xl md:text-5xl font-bold mb-5">
            Who <span className="text-blue-600">We</span> Are?
          </h3>
          <p className="text-base">
            We are a web and mobile development company, specializing in
            creating websites and mobile apps tailored to meet the needs of
            businesses of all sizes, from small startups to large enterprises.
          </p>
          <Button className="border-2 border-blue-400 bg-transparent text-blue-600 mt-4 hover:text-white">
            Get In Touch
          </Button>
        </motion.div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <motion.div
            className="flex flex-col items-center lg:items-start justify-center space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={cardVariant}
            viewport={{ once: true }}
          >
            {aboutPoints.map((point) => (
              <Card
                key={point.id}
                className={`w-full lg:w-[20rem] bg-white ${
                  point.id === 2 ? "sm:self-end self-start" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <Button className="[&_svg]:size-6 py-6 px-3 bg-blue-600">
                      {point.icon}
                    </Button>
                    <h3 className="font-bold">{point.title}</h3>
                  </div>
                  <p className="text-sm">{point.description}</p>
                </CardHeader>
              </Card>
            ))}
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={imageVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <img
              src="/illustrations/about.svg"
              alt="About Illustration"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}
