import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";
import argon2 from "argon2";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

// route login admin
export const POST = async (request: Request) => {
  try {
    const body = await request.json();

    // get user from database
    const user = await prisma.admin.findFirst({
      where: {
        email: body.email,
      },
    });

    // validate user
    if (user) {
      // validate pasword
      const matchPassword = await argon2.verify(user.password, body.password);
      if (matchPassword) {
        // user authenticated

        // get secret JWT from .env
        const jwtSecret = process.env.JWT_SECRET || "";

        // set Json Web Token
        const token = sign(
          { id: user.id, name: user.name, email: user.email },
          jwtSecret,
          {
            expiresIn: 60 * 60 * 24 * 30, // a days
          }
        );

        // set cookie and send it to browser
        const setCookie = serialize("access-token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 30, // a days
          path: "/",
        });

        // return response and cookie
        return NextResponse.json(
          { acces_token: token },
          { status: 200, headers: { "Set-Cookie": setCookie } }
        );
      } else {
        return NextResponse.json(
          {
            message: "Unauthorized!",
          },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        {
          message: "Unauthorized!",
        },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(error);
  }
};
