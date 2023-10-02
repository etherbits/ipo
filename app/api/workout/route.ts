import { getPageSession } from "@/lib/auth";
import { prismaClient } from "@/prisma/db";
import { withParsedData } from "@/utils/endpoints";
import { workoutSchema } from "@/zodSchemas/workoutSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
}
