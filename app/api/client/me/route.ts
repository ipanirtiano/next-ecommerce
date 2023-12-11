import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import prisma from "@/prisma/prisma_db";

// route get user login
export const GET = async () => {
  try {
    // init cookies
    const cookieStore = cookies();
    // get token from cookies
    const token = cookieStore.get("access-token");

    // validate token
    if (!token) {
      return NextResponse.json({
        message: "Unauthorized",
      });
    }

    // verify token
    verify(token.value, process.env.JWT_SECRET || "");

    // decode jwt token
    const tokenDecode: any = jwtDecode(token.value);

    // get user by ID form token
    const user = await prisma.user.findFirst({
      where: {
        id: tokenDecode.id,
      },
      include: {
        Cart: true,
        Order: true,
      },
    });

    return NextResponse.json(
      {
        user: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
      message: "Unauthorized!",
    });
  }
};
