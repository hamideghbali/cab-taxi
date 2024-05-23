
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: "ok",
  });
}

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON payload
    const payload = await request.json();

    console.log(payload)

    // Create a new booking in the database using Prisma
    // const isoTime = new Date().toISOString().split('T')[0] + 'T' + payload.time + ':00.000Z';

    const newPayment = await prisma.payment.create({
      data: {
        nameOnCard: payload.nameOnCard,
        cardNumber: payload.cardNumber,
        // time: isoTime, // Assuming time is sent as a DateTime string
        cardExpiry: payload.cardExpiry,
        cvc: payload.cvc,
        postalCode: payload.postalCode
      },
    });

    // Log the created booking
    // console.log("New booking created:", newBooking);

    // Return the created booking as a response
    return NextResponse.json({
      status: "success",
      data: newPayment,
    });
  } catch (error) {
    // If an error occurs, log the error and return an error response
    console.error("Error creating Payment:", error);
    return NextResponse.json({
      status: "error",
      message: "An error occurred while creating the Payment.",
    });
  }
}
