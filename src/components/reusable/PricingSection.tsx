import { cn } from "@/lib/utils";

export const PricingSection = ({
  plans,
  title,
  className,
}: {
  plans: any;
  title: string;
  className?: string;
}) => (
  <section className={cn("", className)}>
    <div className="max-w-7xl mx-auto sm:text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-10">
        Choose the plan that best suits your needs and goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan: any, index: number) => (
          <div
            key={index}
            className={`p-7 rounded-lg shadow-md ${
              plan.isPopular
                ? "bg-blue-600 text-white"
                : "bg-white border border-gray-200"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-xl font-bold mb-4">{plan.price}/month</p>
            <p className="text-sm mb-6">{plan.description}</p>
            <ul className="text-sm space-y-3 mb-6">
              {plan.features.map((feature: any, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span
                    className={`${
                      index == 1 ? "text-white" : "text-blue-500"
                    } `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 px-4 rounded ${
                plan.isPopular
                  ? "bg-white text-blue-600 font-bold"
                  : "bg-blue-600 text-white"
              }`}
            >
              {plan.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
