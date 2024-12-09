import { PricingSection } from "@/components/reusable/PricingSection";
import { educationPlans, pricingPlans } from "@/constants";
import React from "react";

export default function Pricing() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        <PricingSection plans={pricingPlans} title="Our Services Pricing" />
        <PricingSection
          className="mt-20"
          plans={educationPlans}
          title="Education Plans Pricing"
        />
      </div>
    </section>
  );
}
