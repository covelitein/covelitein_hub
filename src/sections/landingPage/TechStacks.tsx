"use client";

import Marquee from "@/components/effects/Marquee";
import { TechItem } from "@/components/reusable";
import { stacks1, stacks2, stacks3 } from "@/constants";
import React from "react";

export default function TechStacks() {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h3 className="text-center sm:text-3xl text-2xl mb-7 font-bold">
        Our Technologies
      </h3>
      <Marquee className="bg-transparent" pauseOnHover>
        {stacks1.map((stack) => (
          <TechItem
            key={stack.text}
            icon={stack.icon as any}
            text={stack.text}
          />
        ))}
      </Marquee>
      <Marquee className="bg-transparent" pauseOnHover reverse>
        {stacks2.map((stack) => (
          <TechItem
            key={stack.text}
            icon={stack.icon as any}
            text={stack.text}
          />
        ))}
      </Marquee>
      <Marquee className="bg-transparent" pauseOnHover>
        {stacks3.map((stack) => (
          <TechItem
            key={stack.text}
            icon={stack.icon as any}
            text={stack.text}
          />
        ))}
      </Marquee>
    </div>
  );
}
