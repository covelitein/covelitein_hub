import useError from "@/composed/useError";
import useUser from "@/dbHooks/useUser";
import { parsedBody } from "@/serverUtils";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await parsedBody(request);

    const data = z
      .object({
        firstname: z.string(),
        lastname: z.string(),
        email: z.string().email(),
        phone: z.string(),
        gender: z.enum(["Male", "Female"]),
        username: z.string(),
        password: z.string(),
      })
      .parse(body);

    const existing = await useUser().getUserByEmail(data.email);
    if (existing) throw new Error("user with email exist!");

    const user = useUser().registerUser(data)

    return NextResponse.json({
      user
    });
  } catch (e) {
    console.log("error", e);
    return NextResponse.json(useError().ValidationError(e), { status: 400 });
  }
}
