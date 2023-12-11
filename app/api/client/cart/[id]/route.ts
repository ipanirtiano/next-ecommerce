import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await prisma.cart.delete({
      where: { id: params.id },
    });

    return NextResponse.json(
      { message: "Cart Deleted succesfully..." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};

// update amount cart
export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    // get cart by ID cart
    const cart = await prisma.cart.findFirst({
      where: {
        id: params.id,
      },
    });

    if (cart) {
      // get request body
      const body = await request.json();

      if (body.action === "decrease") {
        if (cart.amount === 1) {
          return NextResponse.json({ message: "No content" });
        }
        const response = await prisma.cart.update({
          where: { id: params.id },
          data: {
            amount: cart?.amount - 1,
          },
        });

        return NextResponse.json({ response }, { status: 200 });
      }

      if (body.action === "increase") {
        const response = await prisma.cart.update({
          where: { id: params.id },
          data: {
            amount: cart?.amount + 1,
          },
        });

        return NextResponse.json({ response }, { status: 200 });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
