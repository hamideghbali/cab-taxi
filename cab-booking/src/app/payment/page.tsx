"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export default function Page() {

  const [payments, setPayments] = useState([]);

  // Function to fetch bookings from the server
  const fetchPayments = async () => {
    try {
      const response = await fetch("/api/payments", {
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
      setPayments(data.data); // Assuming data is returned in the format { status: "success", data: [...] }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []); // Fetch bookings when the component mounts





  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formJson = Object.fromEntries(formData.entries());

    console.log("formJson: ", formJson);

    const stringJson = JSON.stringify(formJson);

    const response = await fetch("http://localhost:3001/api/payment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: stringJson,
    });

    const result = await response.json();

    console.log("result: ", result);
  };

  return (
    <div className="p-5 bg-zinc-300 min-h-screen pt-20">
      <Card>
        <CardHeader>
          <CardTitle className="mb-6 text-4xl ">Payment Methods</CardTitle>
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-orange-500 text-white hover:bg-orange-400 hover:text-white"
                >
                  + New Card
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] flex flex-col">
                <form onSubmit={handleSubmit}>
                <DialogHeader>
                  <DialogTitle className="text-2xl">Add new card</DialogTitle>
                </DialogHeader>
                  <div className="gap-4 py-4">
                    <Label htmlFor="name" className="text-right text-[10px] ">
                      NAME ON CARD
                    </Label>
                    <Input
                      name="nameOnCard"
                      placeholder="NAME ON CARD"
                      className="col-span-3 mt-2"
                    />
                  </div>
                  <div className=" gap-4">
                    <Label
                      htmlFor="username"
                      className="text-right text-[10px]"
                    >
                      CARD NUMBER
                    </Label>
                    <Input
                      name="cardNumber"
                      placeholder="1234 1234 1234 1234"
                      className="col-span-3 mt-2"
                    />
                  </div>
                  <div className="flex justify-evenly gap-4 my-5">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="text-[10px]">CARD EXPIRY</Label>
                      <Input name="cardExpiry" placeholder="MM/YY" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="text-[10px]">CVC</Label>
                      <Input name="cvc" placeholder="CVC" />
                    </div>
                  </div>
                  <div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="text-[10px]">POSTAL CODE</Label>
                      <Input name="postalCode" placeholder="POSTAL CODE" />
                    </div>
                  </div>
                <DialogFooter className="flex justify-between">
                  <Button variant="ghost" className="mr-auto">
                    Ghost
                  </Button>
                  <Button
                    type="submit"
                    className="bg-orange-400 shadow-2xl shadow-gray-900 hover:bg-orange-400"
                    >
                    Save
                  </Button>
                </DialogFooter>
                    </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-gray-400 flex justify-between mb-3">
            <h3>PAYMENT METHOD</h3>
            <h3>EXPIRY</h3>
            <h3 className="mr-20">CARD NAME</h3>
          </div>
        </CardContent>
        <CardContent>
        {payments.map((payment: any) => (
                <tr key={payment.id} className="border-b border-gray-300">
                  <td className="p-2">{payment.cardNumber}</td>
                  <td className="p-2">{payment.cardExpiry}</td>
                  <td className="p-2">{payment.nameOnCard}</td>
                </tr>
              ))}
        </CardContent>
        <CardFooter>
          <p className="text-gray-400 text-sm ">Items per page: 10 20 30</p>
        </CardFooter>
      </Card>
    </div>
  );
}
