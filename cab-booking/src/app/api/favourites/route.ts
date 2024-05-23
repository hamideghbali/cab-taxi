import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
      console.log('im here')
    // Fetch all bookings from the database
    const favourites = await prisma.favourite.findMany();

    // Return the bookings as a response
    return NextResponse.json({
      status: "success",
      data: favourites,
    });
  } catch (error) {
    // If an error occurs, log the error and return an error response
    console.error("Error fetching favourites:", error);
    return NextResponse.json({
      status: "error",
      message: "An error occurred while fetching the favourites.",
    });
  }
}
