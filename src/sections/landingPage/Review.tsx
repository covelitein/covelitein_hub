import { ReviewCard } from "@/components/reusable/ReviewCard";
import { reviews } from "@/constants";

export const Review = () => (
  <section className="" id="reviews">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold md:mb-4">
        What <span className="text-blue-600">Our Clients</span> Say
      </h2>
      <p className="text-gray-600 mb-10">
        Hear from the people we&apos;ve helped achieve their goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  </section>
);
