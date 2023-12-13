import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { name, email, phone, interestId, businessIds } =
      await request.json();
    const existingClient = await prisma.client.findUnique({
      where: {
        email,
      },
    });

    if (existingClient) {
      return NextResponse.json(
        { message: "E-mail já cadastrado" },
        { status: 400 }
      );
    }

    if (name.length <= 2) {
      return NextResponse.json(
        { message: "O nome deve ter mais de 2 letras" },
        { status: 400 }
      );
    }

    if (phone.length < 10) {
      return NextResponse.json(
        { message: "O número de telefone deve ter pelo menos 10 dígitos" },
        { status: 400 }
      );
    }

    const createClient = await prisma.client.create({
      data: {
        name,
        email,
        phone,
        interestId,
        businessIds: {
          create: businessIds.map((businessId: number) => ({
            business: { connect: { id: businessId } },
          })),
        },
      },
    });

    return NextResponse.json({ createClient });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al procesar la solicitud:", error);
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
  }
}
