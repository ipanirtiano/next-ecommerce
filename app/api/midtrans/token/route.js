import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import prisma from "@/prisma/prisma_db";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDRANTS_SERVER_KEY,
});

export const POST = async (request) => {
  // get body resquest
  const body = await request.json();
  // set id order
  const id_order = "ODR-" + uuidv4().trim().substring(0, 8).toUpperCase();
  // set item detail array variable
  const itemDetails = [];
  // set gran total variable
  let grandTotal = 0;
  // get grand total price
  for (let i = 0; i < body.cart.length; i++) {
    // set calculation total price
    let calc = body.cart[i].Products.price * body.cart[i].amount;
    // set grand total price
    grandTotal += calc;
  }

  // ===== Get user Cookie =======
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
  const tokenDecode = jwtDecode(token.value);
  const userID = tokenDecode.id;
  // if not token user return 401
  if (!userID) {
    return NextResponse.json("unauthorized", { status: 401 });
  }

  // insert order
  const order = await prisma.order.create({
    data: {
      id: id_order,
      id_user: tokenDecode.id,
      payment: "undefined",
      status: "undefined",
      total_price: grandTotal,
    },
  });

  if (order) {
    // insert item order
    for (let i = 0; i < body.cart.length; i++) {
      const order_item = await prisma.item_order.create({
        data: {
          id_order: order.id,
          id_product: body.cart[i].Products.id,
          amount: body.cart[i].amount,
        },
      });
    }
  }

  if (order) {
    // looping cart order
    for (let i = 0; i < body.cart.length; i++) {
      // set item detail order
      const item = {
        id: body.cart[i].Products.id,
        name: body.cart[i].Products.product_name,
        price: body.cart[i].Products.price,
        quantity: body.cart[i].amount,
      };
      // push item order to item detail order array variable
      itemDetails.push(item);
    }
    // set parameter snap midtrans
    let parameter = {
      // set transaction details
      transaction_details: {
        order_id: id_order,
        gross_amount: grandTotal,
      },
      // set item details
      item_details: itemDetails,
    };
    // get token snap
    const tokenSnap = await snap.createTransaction(parameter);

    // delete cart by ID cart
    // for (let i = 0; i < body.cart.length; i++) {
    //   const deleteCart = await prisma.cart.delete({
    //     where: { id: body.cart[i].id },
    //   });
    // }

    // return token snap
    return NextResponse.json({ data: tokenSnap }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
