import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request) {
  const res = await request.json();
  const { name, email, phone } = res;
  const client = await prisma.client.create({
    data: {
      name,
      email,
      phone,
    },
  });
  return NextResponse.json({ data: res });
}
