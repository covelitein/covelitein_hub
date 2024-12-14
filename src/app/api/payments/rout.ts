import { getData } from "@/action";
import { parsedBody } from "@/app/serverUtils";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  try {
    const version = await getData();
    console.log(version);
    return NextResponse.json(version, { status: 200 });
  } catch (e) {
    console.log("error", e);
    return NextResponse.json(e, { status: 400 });
  }
}
