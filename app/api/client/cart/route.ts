import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export const GET = async (request: Request) => {
  try {
    // init cookies
    const cookieStore = cookies();
    // get token from cookies
    const token = cookieStore.get("access-token");

    // validate token
    if (!token) {
      return NextResponse.json(
        {
          message: "No Content",
        },
        {
          status: 200,
        }
      );
    }

    // verify token
    verify(token.value, process.env.JWT_SECRET || "");

    // decode jwt token
    const tokenDecode: any = jwtDecode(token.value);

    // get all cart
    const cart = await prisma.cart.findMany({
      where: { id_user: tokenDecode.id },
      include: {
        Products: {
          include: {
            Photo_product: { select: { image: true } },
            Categories: { select: { category_name: true } },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    // find cart by id product
    const product = await prisma.cart.findFirst({
      where: { id_product: body.id_product },
    });
    // updata amount if there has a product into the cart
    if (product) {
      const updateCount = await prisma.cart.update({
        where: {
          id: product.id,
        },
        data: {
          amount: product.amount + 1,
        },
      });

      return NextResponse.json(product, { status: 201 });
    } else {
      // init cookies
      const cookieStore = cookies();
      // get token from cookies
      const token = cookieStore.get("access-token");

      // validate token
      if (!token) {
        return NextResponse.json(
          {
            message: "Unauthorized",
          },
          {
            status: 401,
          }
        );
      }

      // verify token
      verify(token.value, process.env.JWT_SECRET || "");

      // decode jwt token
      const tokenDecode: any = jwtDecode(token.value);

      // add cart by ID user
      const cart = await prisma.cart.create({
        data: {
          id_user: tokenDecode.id,
          id_product: body.id_product,
          amount: body.amount,
        },
      });
      return NextResponse.json(cart, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
