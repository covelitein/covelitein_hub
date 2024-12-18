"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useState } from "react";

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[0-9\s\-()]{7,15}$/, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/coveliteinshub@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            subject: `New Contact from ${data.firstName} ${data.lastName}`,
            email: data.email,
            message: `
            <strong>First Name:</strong> ${data.firstName}<br/>
            <strong>Last Name:</strong> ${data.lastName}<br/>
            <strong>Email:</strong> ${data.email}<br/>
            <strong>Phone:</strong> ${data.phone}<br/>
            <strong>Message:</strong> ${data.message}
          `,
          }),
        }
      );

      if (response.ok) {
        form.reset();
        setSubmitMessage("Your message has been successfully sent. Thank you!");
      } else {
        throw new Error("Submission failed. Please try again later.");
      }
    } catch (error) {
      setSubmitMessage((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-lg"
      >
        {/* Left Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="p-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Our friendly team would love to hear from you!
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+123 456 7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="Your message here..."
                        {...field}
                        className="w-full border rounded-lg px-3 py-2 mt-1"
                        rows={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>

          {submitMessage && (
            <p
              className={`mt-4 text-sm ${
                isSubmitting ? "text-gray-500" : "text-green-600"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </motion.div>

        {/* Right Column: Contact Info or Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="p-8 bg-gray-100 rounded-r-lg"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Visit Us</h3>
          <p className="text-gray-600 mb-6">We’re located here:</p>
          <div className="w-full h-64 bg-gray-300 rounded-lg">
            <iframe
              src="https://maps.google.com/maps?q=Port%20Harcourt&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-gray-700">
              <strong>Email:</strong> contact@example.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +234-813-161-2666
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> RSU maingate Port Harcourt, Nigeria
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
