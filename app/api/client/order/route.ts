import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

export const GET = async (request: Request) => {
  try {
    // const order_undefined = await prisma.order.findMany({
    //   where: {
    //     payment: "undefined",
    //   },
    // });
    // if (order_undefined) {
    //   for (let i = 0; i < order_undefined.length; i++) {
    //     const deleteOrder = await prisma.order.delete({
    //       where: { id: order_undefined[i].id },
    //     });
    //   }
    // }

    const response = await prisma.order.findMany({
      include: {
        User: { select: { name: true } },
        item_order: {
          include: {
            Products: {
              include: { Photo_product: { select: { image: true } } },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ data: response }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
