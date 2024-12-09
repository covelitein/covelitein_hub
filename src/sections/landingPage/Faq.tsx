"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HighlightMiddleWord } from "@/components/reusable";

export default function Faq() {
  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold  mb-6">
          <HighlightMiddleWord text={"Frequently Asked Questions"} />
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="question-1">
            <AccordionTrigger className="text-lg font-semibold">
              What services do you offer?
            </AccordionTrigger>
            <AccordionContent>
              We specialize in web and mobile app development, UX/UI design, and
              providing tech solutions for businesses of all sizes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="question-2">
            <AccordionTrigger className="text-lg font-semibold">
              How long does it take to build a website?
            </AccordionTrigger>
            <AccordionContent>
              The timeline depends on the complexity of the project. On average,
              it can take 4-12 weeks for a standard website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="question-3">
            <AccordionTrigger className="text-lg font-semibold">
              Do you provide ongoing support?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer maintenance and support services to ensure your
              website or app remains up-to-date and functional.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="question-4">
            <AccordionTrigger className="text-lg font-semibold">
              What is your pricing structure?
            </AccordionTrigger>
            <AccordionContent>
              Our pricing depends on the scope and requirements of the project.
              Contact us for a custom quote.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="question-5">
            <AccordionTrigger className="text-lg font-semibold">
              Can you work with my existing team?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We can collaborate with your in-house team to achieve
              your goals.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
