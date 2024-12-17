"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { JoinClients } from ".";
import { Link } from "@nextui-org/react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex justify-center items-center px-4">
      <div className="max-w-4xl w-full">
        <h3 className="text-4xl md:text-6xl lg:text-7xl md:text-center font-bold leading-tight relative mt-16">
          Innovative Strategies for Modern Businesses.
          <img
            src="/illustrations/rays-of-light.svg"
            width={40}
            className="absolute hidden lg:block right-4 -top-3 -rotate-[45deg]"
            alt="Decorative rays of light"
          />
        </h3>
        <p className="mt-4 text-sm md:text-base lg:text-lg md:text-center sm:px-8 font-medium">
          We specialize in working with digital products and brands, regardless
          of the size and lifecycle stage, from startups to established
          businesses striving to achieve significant tech leverage.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/get_quotes"
            className="bg-blue-600 px-8 max-sm:flex max-sm:items-center max-sm:justify-center rounded-lg sm:py-5 py-4 text-white font-semibold w-full sm:w-auto"
          >
            Get In Touch
          </Link>
          <Link
            href="/#about"
            className="px-8 sm:py-5 py-4 max-sm:flex max-sm:items-center max-sm:justify-center rounded-lg w-full sm:w-auto text-blue-600 font-semibold bg-white border-white hover:bg-white hover:text-blue-700"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <JoinClients />
        </div>
      </div>
    </section>
  );
}
