import { NextResponse } from "next/server";
import { ZodSchema } from "zod";

export async function withParsedData<T>(
  req: Request,
  schema: ZodSchema<T>,
  callback: (arg0: T) => Promise<NextResponse>,
) {
  const rawData = await req.json();

  const zodRes = await schema.safeParseAsync(rawData);

  if (!zodRes.success) {
    return new NextResponse(JSON.stringify(zodRes.error.errors), {
      status: 422,
    });
  }

  return callback(zodRes.data);
}
