import { NextRequest, NextResponse } from "next/server";
import { auth } from "./prisma/db";

export const middleware = async (req: NextRequest) => {
  return NextResponse.next();
};
