import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";
import argon2 from "argon2";
import { admin } from "@prisma/client";

// route add new user admin
export const POST = async (request: Request) => {
  try {
    // get request input
    const body: admin = await request.json();
    // set password default
    const password = "admin123456";
    // hash password default
    const hashPassword = await argon2.hash(password);

    // post data user
    const user = await prisma.admin.create({
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        password: hashPassword,
      },
    });

    // return next response
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
