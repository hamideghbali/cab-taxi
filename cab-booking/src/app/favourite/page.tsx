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
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

export default function Page() {

  const [favourites, setFavourites] = useState([]);

  // Function to fetch bookings from the server
  const fetchFavourites = async () => {
    try {
      const response = await fetch("/api/favourites", {
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
      setFavourites(data.data); // Assuming data is returned in the format { status: "success", data: [...] }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchFavourites();
  }, []); // Fetch bookings when the component mounts




  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formJson = Object.fromEntries(formData.entries());

    console.log("formJson: ", formJson);

    const stringJson = JSON.stringify(formJson);

    const response = await fetch("http://localhost:3001/api/favourite", {
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
          <CardTitle className="mb-6 text-4xl ">Favourites</CardTitle>
          <div className="flex justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-orange-500 text-white hover:bg-orange-400 hover:text-white"
                >
                  + Add Favourite
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col py-4">
                    <div className="py-5 gap-4">
                      <Input
                        name="enterName"
                        placeholder="Enter name"
                        className="col-span-3 bg-gray-200"
                      />
                    </div>
                    <div className=" gap-4">
                      <Input
                        name="enterPassword"
                        placeholder="Enter password"
                        className="col-span-3 bg-gray-200"
                      />
                    </div>
                  </div>
                  <DialogFooter className="flex justify-between">
                    <Button variant="ghost" className="mr-auto">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gray-200 shadow-2xl text-black shadow-gray-900 hover:bg-orange-400"
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
          <div className="text-gray-400 flex justify-between mb-3 text-sm">
            <h3>NAME</h3>
            <h3>ADDRESS</h3>
            <h3>FAVOURITE PICKUP</h3>
            <h3 className="mr-20">FAVOURITE DROPOFF</h3>
          </div>
        </CardContent>
        <CardContent>
        {favourites.map((favourite: any) => (
                <tr key={favourite.id} className="border-b border-gray-300">
                  <td className="p-2">{favourite.enterName}</td>
                  <td className="p-2">{favourite.enterPassword}</td>
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
