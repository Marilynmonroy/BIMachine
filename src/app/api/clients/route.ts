import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json();
    const createClient = await prisma.client.create({
      data: {
        name,
        email,
        phone,
      },
    });
    return NextResponse.json({ createClient });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ mesagge: error.message }, { status: 500 });
    }
  }
}
