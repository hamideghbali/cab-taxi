"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [bookings, setBookings] = useState([]);

  // Function to fetch bookings from the server
  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/bookings", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }); // Adjust the API endpoint as needed
      if (!response.ok) {
        throw new Error("Failed to fetch bookings");
      }

      const data = await response.json();
      console.log("data received from route: ", data);
      setBookings(data.data); // Assuming data is returned in the format { status: "success", data: [...] }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []); // Fetch bookings when the component mounts

  return (
    <div className="p-5 bg-zinc-300 min-h-screen pt-20">
      {/* <Button
        onClick={() => {
          fetchBookings();
        }}
      >
        Click Test
      </Button> */}
      <Card>
        <CardHeader>
          <CardTitle className="mb-6 text-4xl ">Booking History</CardTitle>
          <div className="flex justify-between ">
            <div className="flex justify-start gap-4 items-center">
              <CardDescription className="text-[18px]">
                All Trips
              </CardDescription>
              <CardDescription className="text-[18px]">
                In Progress
              </CardDescription>
              <CardDescription className="text-[18px]">
                Prebookings
              </CardDescription>
              <CardDescription className="text-[18px]">
                Completed
              </CardDescription>
              <CardDescription className="text-[18px]">
                Cancelled
              </CardDescription>
            </div>
            <div>
              <Button
                variant="outline"
                className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white"
              >
                + New Booking
              </Button>
            </div>
          </div>
          <hr />
        </CardHeader>
        <CardContent>
          <table>
            <thead>
              <tr className="text-gray-400">
                <th className="p-2">DATE</th>
                <th className="p-2">TIME</th>
                <th className="p-2">TAXI COMPANY</th>
                <th className="p-2">FROM</th>
                <th className="p-2">TO</th>
                <th className="p-2 pr-10">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking: any) => (
                <tr key={booking.id} className="border-b border-gray-300">
                  <td className="p-2">{booking.date}</td>
                  <td className="p-2">{booking.time}</td>
                  <td className="p-2">{booking.taxiCompany}</td>
                  <td className="p-2">{booking.from}</td>
                  <td className="p-2">{booking.to}</td>
                  <td className="p-2 pr-10">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
        <CardFooter>
          <p className="text-gray-400 text-sm ">Items per page: 10 20 30</p>
        </CardFooter>
      </Card>
    </div>
  );
}
