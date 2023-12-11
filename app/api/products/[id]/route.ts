import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

// route delete products
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await prisma.products.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "Products deleted succesfully..." });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
