import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";
import { products } from "@prisma/client";

// route add new products
export const POST = async (request: Request) => {
  try {
    // get request body
    const body = await request.json();

    // post new products
    const product: products = await prisma.products.create({
      data: {
        product_name: body.product_name,
        categorie: body.categori,
        size: body.size,
        color: body.color,
        price: Number(body.price),
        descriptions: body.descriptions,
        admin_id: body.user_id,
      },
    });

    // insert products image
    body.imageUrl.forEach(async (img: any) => {
      const product_img = await prisma.photo_product.create({
        data: {
          id_product: product.id,
          image: img,
        },
      });
    });

    return NextResponse.json(
      { message: "Add Product succesfully..." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};

// route get all product
export const GET = async (request: Request) => {
  try {
    const products = await prisma.products.findMany({
      include: {
        Photo_product: { select: { image: true } },
        Categories: { select: { category_name: true } },
        Admin: { select: { name: true } },
      },
    });
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Oops something when wrong! ${error}` },
      { status: 500 }
    );
  }
};
