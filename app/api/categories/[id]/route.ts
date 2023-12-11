import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

// route delete categories
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await prisma.categories.delete({
      where: { id: params.id },
    });
    return NextResponse.json({ message: "Categories deleted successfully..." });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
