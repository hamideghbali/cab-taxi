import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    console.log(' Hey I got here')
  try {
    // Fetch all bookings from the database
    const bookings = await prisma.booking.findMany();

    // Return the bookings as a response
    return NextResponse.json({
      status: "success",
      data: bookings,
    });
  } catch (error) {
    // If an error occurs, log the error and return an error response
    console.error("Error fetching bookings:", error);
    return NextResponse.json({
      status: "error",
      message: "An error occurred while fetching the bookings.",
    });
  }
}