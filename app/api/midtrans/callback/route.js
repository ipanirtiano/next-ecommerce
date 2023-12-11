import Midtrans from "midtrans-client";
import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma_db";

// set api client midtrans
let apiClient = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.MIDRANTS_SERVER_KEY,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
});

export const POST = async (request) => {
  // get request body from callback api mitrans
  const body = await request.json();

  // get notification transaction from api midtrans callback
  apiClient.transaction.notification(body).then(async (statusResponse) => {
    // get order ID
    let orderId = statusResponse.order_id;
    // get transaction status
    let transactionStatus = statusResponse.transaction_status;
    // get fraud status
    let fraudStatus = statusResponse.fraud_status;

    if (transactionStatus == "capture") {
      if (fraudStatus == "accept") {
        // update data order
        await prisma.order.update({
          where: { id: orderId },
          data: {
            payment: transactionStatus,
          },
        });
      }
    } else if (transactionStatus == "settlement") {
      console.log(
        `Transaction notification received. Order ID: ${orderId}. Transaction status: ${transactionStatus}. Fraud status: ${fraudStatus}`
      );

      // update data order
      await prisma.order.update({
        where: { id: orderId },
        data: {
          payment: transactionStatus,
        },
      });
    } else if (
      transactionStatus == "cancel" ||
      transactionStatus == "deny" ||
      transactionStatus == "expire"
    ) {
      // update data order
      await prisma.order.update({
        where: { id: orderId },
        data: {
          payment: transactionStatus,
        },
      });
    } else if (transactionStatus == "pending") {
      // update data order
      await prisma.order.update({
        where: { id: orderId },
        data: {
          payment: transactionStatus,
        },
      });
    }
  });

  return NextResponse.json(body);
};
