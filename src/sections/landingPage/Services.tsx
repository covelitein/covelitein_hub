import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { services } from "@/constants";
import React from "react";

export default function Services() {
  return (
    <section className="" id="services">
      <div className="max-w-6xl mx-auto mt-5">
        <h2 className="text-3xl md:text-5xl font-bold sm:mb-6 mb-3">
          What <span className="text-blue-600">We</span> Offer
        </h2>
        <p className="text-gray-600 mb-10">
          We specialize in working with digital products and brands, offering a
          wide range of services to cater to businesses of all sizes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="rounded-xl">
              <CardHeader>
                <div className="mb-4">
                  <Button className="[&_svg]:size-8 bg-blue-100 px-5 py-8 hover:bg-blue-100">
                    {service.icon}
                  </Button>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
