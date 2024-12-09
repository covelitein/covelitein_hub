import { Card } from "../ui/card";

export const ReviewCard = ({ review }: { review: any }) => (
  <Card className="p-6 bg-white rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <img
        src={review.avatar}
        alt={`${review.name}'s avatar`}
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="text-lg font-semibold">{review.name}</h3>
        <div className="flex items-center">
          {Array.from({ length: review.rating }, (_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.962a1 1 0 00.95.69h4.186c.969 0 1.371 1.24.588 1.81l-3.392 2.464a1 1 0 00-.364 1.118l1.286 3.962c.3.921-.755 1.688-1.54 1.118l-3.392-2.464a1 1 0 00-1.176 0L4.88 16.487c-.785.57-1.84-.197-1.54-1.118l1.286-3.962a1 1 0 00-.364-1.118L.87 9.389c-.783-.57-.38-1.81.588-1.81h4.186a1 1 0 00.95-.69l1.286-3.962z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600">{review.comment}</p>
  </Card>
);
