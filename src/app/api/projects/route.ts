import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// define que a resposta deve ser revalidada a cada 24h
export const revalidate = 60 * 60 * 24;

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(projects);
}
