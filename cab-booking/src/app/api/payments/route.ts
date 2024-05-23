import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
      console.log('im here')
    // Fetch all bookings from the database
    const payments = await prisma.payment.findMany();

    // Return the bookings as a response
    return NextResponse.json({
      status: "success",
      data: payments,
    });
  } catch (error) {
    // If an error occurs, log the error and return an error response
    console.error("Error fetching payments:", error);
    return NextResponse.json({
      status: "error",
      message: "An error occurred while fetching the payments.",
    });
  }
}
