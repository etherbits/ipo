import { withParsedData } from "@/utils/endpoints";
import { formSchema } from "@/zodSchemas/signUpSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  return withParsedData(req, formSchema, (data) => {
    console.log(data);
    return new NextResponse("ok");
  });
}
