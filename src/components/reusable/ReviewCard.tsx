import { Card } from "../ui/card";
import { IoIosStar } from "react-icons/io";

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
            <IoIosStar key={review.name} className="h-5 w-5 text-yellow-500"/>
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600">{review.comment}</p>
  </Card>
);
