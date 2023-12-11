import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await prisma.order.delete({
      where: { id: params.id },
    });
    return NextResponse.json(
      { message: "Delete Order succesfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
