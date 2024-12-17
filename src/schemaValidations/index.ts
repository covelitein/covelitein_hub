import { z } from "zod";

export const PricingSchema = z.object({
  fullname: z.string().min(1, "Enter your fullname"),
  email: z.string().min(1, "Enter email").email("enter a valid email"),
});
