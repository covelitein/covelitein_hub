import { getData } from "@/action";
import { parsedBody } from "@/app/serverUtils";
import useMailer from "@/mailServer/useMailer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  try {
    // const mailerinfo = await useMailer().sendMail("Hello world");
    const v = await getData();
    console.log(v);
    return NextResponse.json(v, { status: 200 });
  } catch (e) {
    console.log("error", e);
    return NextResponse.json(e, { status: 400 });
  }
}
