import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";
import argon2 from "argon2";

type user = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export const POST = async (request: Request) => {
  try {
    const body: user = await request.json();
    // validate confirm password
    if (body.password != body.confirmPassword) {
      return NextResponse.json(
        { message: `Oops something when wrong!` },
        { status: 500 }
      );
    }

    // hash password
    const hashPassword = await argon2.hash(body.password);

    // create a new user
    const user = await prisma.user.create({
      data: {
        name: body.fullName,
        email: body.email,
        phone: "null",
        password: hashPassword,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
