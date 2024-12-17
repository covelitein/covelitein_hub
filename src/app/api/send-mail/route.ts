import { parsedBody } from "@/app/serverUtils";
import { sendMail } from "@/mailServer/useMailer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const RequestSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  title: z.string(),
  features: z.array(z.string()),
  price: z.string(),
});

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const data = await parsedBody(request);

    // Validate the parsed data using Zod schema
    const validatedData = RequestSchema.parse(data);

    const { fullname, email, title, features, price } = validatedData;

    // Use the mailer utility to send the email
    const mailerInfo = await sendMail({
      fullname: fullname,
      recipient: email,
      planName: title,
      features: features,
      price: price,
    });

    // Return the response
    return NextResponse.json(
      {
        message: "Email sent successfully",
        mailerInfo,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);

    // Handle validation or internal server errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "An unexpected error occurred",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
