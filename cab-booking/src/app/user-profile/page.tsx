import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";


export default function page() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-[500px] ">
        <CardHeader>
          <CardTitle className="mb-4">My Account</CardTitle>
          <div className="bg-red-100 rounded-md p-4 text-center">
            <CardDescription>Your Email Has Not Been Confirmed</CardDescription>
            <Link href="/" className="text-blue-400 text-sm">
              {" "}
              Send Me A Verification Email
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-[10px] mb-1">
                  FIRST NAME
                </Label>
                <Input id="name" placeholder="NAME" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-[10px] mb-1">
                  LAST NAME
                </Label>
                <Input id="name" placeholder="LAST NAME" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email" className="text-[10px] mb-1">
                  EMAIL
                </Label>
                <Input id="email" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="text-[10px] mb-1">
                  PHONE
                </Label>
                <Input type="tel" placeholder="Enter your phone number" />
              </div>
              <hr />
              <div className="flex flex-col space-y-1.5">
                <Label className="mt-1 mb-3">Communication Language</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">French</SelectItem>
                    <SelectItem value="sveltekit">English</SelectItem>
                    <SelectItem value="astro">Tajik</SelectItem>
                    <SelectItem value="nuxt">Persian</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="ghost" className="text-red-500 hover:bg-red-100 hover:text-red-500">Delete Account</Button>
        </CardFooter>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" className="text-gray-400 hover:text-gray-400">Cancel</Button>
          <Button className="bg-gray-400 text-gray-200">Save</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
