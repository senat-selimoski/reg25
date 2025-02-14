import { z } from "zod";

// Step 1 Schema
export const step1Schema = z.object({
    firstName: z
      .string()
      .regex(/^[A-Za-z\s]+$/, "We only accept letters and spaces for names, no special characters")
      .min(1, "Please enter a first name."),
    
    lastName: z
      .string()
      .regex(/^[A-Za-z\s]+$/, "We only accept letters and spaces for names, no special characters")
      .min(1, "Please enter a last name."),
});

// Step 2 Schema
export const step2Schema = z.object({
    phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please check the phone number is in the correct format")
    .nonempty("Please enter a phone number.")
});

// Combined Schema for final submission
export const signInSchema = step1Schema.merge(step2Schema);
