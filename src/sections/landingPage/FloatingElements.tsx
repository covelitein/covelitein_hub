"use client";

import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { SlBriefcase } from "react-icons/sl";
import { motion } from "framer-motion";

export default function FloatingElements() {
  // Floating Animations
  const floatAnimation1 = {
    initial: { y: 0 },
    animate: { y: [0, -30, 0] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  const floatAnimation2 = {
    initial: { y: 0 },
    animate: { y: [0, -20, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
  };

  const floatAnimation3 = {
    initial: { y: 0 },
    animate: { y: [0, -15, 0] },
    transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto py-5 px-4">
      <motion.div {...floatAnimation1}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center py-4 gap-4">
            <FaRegSmileBeam className="text-4xl lg:text-5xl text-blue-700" />
            <div className="flex flex-col">
              <h3 className="font-bold text-lg lg:text-2xl">99%</h3>
              <p className="font-medium text-sm lg:text-base">Customer Satisfaction</p>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div {...floatAnimation2}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center py-4 gap-4">
            <AiOutlineLineChart className="text-4xl lg:text-5xl text-green-700" />
            <div className="flex flex-col">
              <h3 className="font-bold text-lg lg:text-2xl">+45%</h3>
              <p className="font-medium text-sm lg:text-base">Growth Rate This Year</p>
            </div>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div {...floatAnimation3}>
        <Card className="shadow-lg rounded-lg">
          <CardHeader className="flex flex-row items-center py-4 gap-4">
            <SlBriefcase className="text-4xl lg:text-5xl text-orange-700" />
            <div className="flex flex-col">
              <h3 className="font-bold text-lg lg:text-2xl">5+</h3>
              <p className="font-medium text-sm lg:text-base">Active Projects</p>
            </div>
          </CardHeader>
        </Card>
      </motion.div>
    </div>
  );
}
