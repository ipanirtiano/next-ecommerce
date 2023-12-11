import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

// route get product by ID
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const product = await prisma.products.findFirst({
      where: { id: params.id },
      include: {
        Photo_product: { select: { image: true } },
        Categories: { select: { category_name: true } },
        Admin: { select: { name: true } },
      },
    });
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
