
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

    const newFavourite = await prisma.favourite.create({
      data: {
        enterName: payload.enterName,
        enterPassword: payload.enterPassword,

      },
    });

    // Log the created booking
    // console.log("New booking created:", newBooking);

    // Return the created booking as a response
    return NextResponse.json({
      status: "success",
      data: newFavourite,
    });
  } catch (error) {
    // If an error occurs, log the error and return an error response
    console.error("Error creating Favourite:", error);
    return NextResponse.json({
      status: "error",
      message: "An error occurred while creating the Favourite.",
    });
  }
}
