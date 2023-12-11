import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

// route get admin details by ID
export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await prisma.admin.findFirst({
      where: { id: params.id },
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};

// route update user by ID
export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await request.json();
    const response = await prisma.admin.update({
      where: { id: params.id },
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
      },
    });

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};

// route delete user
export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const response = await prisma.admin.delete({
      where: {
        id: params.id,
      },
    });
    return NextResponse.json(
      { message: "User Deleted successfully.." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
