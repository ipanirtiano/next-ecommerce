import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

// route get all categories
export const GET = async (request: Request) => {
  try {
    const categorie = await prisma.categories.findMany();
    return NextResponse.json(categorie, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};

// route post a new categories
export const POST = async (request: Request) => {
  const body = await request.json();
  try {
    const categories = await prisma.categories.create({
      data: {
        category_name: body.categorieName,
      },
    });
    return NextResponse.json(
      { categories: categories, message: "Add new categories successfully..." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
