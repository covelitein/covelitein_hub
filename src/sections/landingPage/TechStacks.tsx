'use client'

import { TechItem } from "@/components/reusable";
import { stacks1, stacks2, stacks3 } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";

export default function TechStacks() {
  return (
    <div className="max-w-6xl mx-auto py-10">
        <h3 className="text-center sm:text-3xl text-2xl mb-7 font-bold">Our Technologies</h3>
      <Marquee direction="left" pauseOnHover={false} className="gap-5 mb-8">
        {stacks1.map((stack) => (
          <TechItem key={stack.text} icon={(stack.icon as any)} text={stack.text} />
        ))}
      </Marquee>
      <Marquee
        direction="right"
        pauseOnHover={false}
        className="gap-5 mb-8" // pass class to change gap or speed
      >
        {stacks2.map((stack) => (
          <TechItem key={stack.text} icon={(stack.icon as any)} text={stack.text} />
        ))}
      </Marquee>
      <Marquee
        direction="left"
        pauseOnHover={false}
        className="gap-5 mb-8" // pass class to change gap or speed
      >
        {stacks3.map((stack) => (
          <TechItem key={stack.text} icon={(stack.icon as any)} text={stack.text} />
        ))}
      </Marquee>
    </div>
  );
}
