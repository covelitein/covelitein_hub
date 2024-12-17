"use client";

import { PricingSchema } from "@/schemaValidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import confetti from "canvas-confetti";
import HighlightMiddleWord from "./HighlightMiddleWord";
import ModalTemp from "./ModalTemp";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

export const PricingSection = ({
  plans,
  title,
  className,
}: {
  plans: any;
  title: string;
  className?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null); // Error state

  const form = useForm<z.infer<typeof PricingSchema>>({
    resolver: zodResolver(PricingSchema),
    defaultValues: {
      fullname: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof PricingSchema>, plan: any) {
    setLoading(true);
    setError(null); // Clear previous error
    try {
      const { fullname, email } = values;

      const response = await axios.post("/api/send-mail", {
        fullname,
        email,
        title: plan.title,
        features: plan.features,
        price: plan.price,
      });

      if (response.status === 200) {
        setSuccess(true);
        confetti({
          particleCount: 150,
          spread: 60,
          origin: { x: 0.5, y: 0.5 },
        });
      } else {
        setError("Failed to send email. Please try again."); // Set error message
      }
    } catch (err: any) {
      console.error("Error sending email:", err);
      setError(
        err.response?.data?.message ||
          "An unexpected error occurred. Please try again."
      ); // Set error message from server or default
    } finally {
      setLoading(false);
    }
  }

  function onCancel() {
    setSuccess(false); // Reset success state
    setError(null); // Clear error
    form.reset(); // Clear form fields
    setLoading(false); // Ensure loading is reset
  }

  return (
    <section className={cn("", className)}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          <HighlightMiddleWord text={title} />
        </h2>
        <p className="text-gray-600 mb-10">
          Choose the plan that best suits your needs and goals.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
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
              <p className="text-xl font-bold mb-4">{plan.price}</p>
              <p className="text-sm mb-4">{plan.description}</p>
              <p className="text-sm font-medium mb-6">
                <span className="block mb-2">
                  <strong>Complexity:</strong> {plan.complexity}
                </span>
                <span>
                  <strong>Timeframe:</strong> {plan.timeframe}
                </span>
              </p>
              <ul className="text-sm space-y-3 mb-6">
                {plan.features.map((feature: any, idx: number) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span
                      className={`${
                        plan.isPopular ? "text-white" : "text-blue-500"
                      }`}
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
              <ModalTemp
                triggerText={plan.buttonLabel}
                title={`Choose the ${plan.title} Plan`}
                description="Please confirm your selection to proceed."
                confirmText="Confirm Plan"
                onConfirm={() =>
                  form.handleSubmit((values) => onSubmit(values, plan))()
                }
                onCancel={onCancel} // Pass cancel handler
                triggerButtonClassName={`${
                  (index + 1) % 2 == 0 &&
                  "bg-white text-blue-600 hover:bg-white hover:text-blue-600"
                }`}
                loading={loading}
                success={success}
                error={(error as string)}
              >
                {success ? (
                  <div className="text-center p-4">
                    <h3 className="text-lg font-semibold text-green-600">
                      Email sent successfully! Check your email for details.
                    </h3>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit((values) =>
                        onSubmit(values, plan)
                      )}
                    >
                      <div className="mb-4">
                        <FormField
                          name="fullname"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="mb-4">
                        <FormField
                          name="email"
                          control={form.control}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="example@email.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription className="text-sm">
                                We&apos;ll use this email to contact you.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      {error && (
                        <p className="text-sm text-red-600 mb-4">{error}</p>
                      )}
                    </form>
                  </Form>
                )}
              </ModalTemp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
