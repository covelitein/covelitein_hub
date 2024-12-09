import { ReviewCard } from "@/components/reusable/ReviewCard";
import { reviews } from "@/constants";

export const Review = () => (
  <section className="">
    <div className="max-w-6xl mx-auto md:text-center">
      <h2 className="text-3xl md:text-5xl font-bold md:mb-6">What Our Clients Say</h2>
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
