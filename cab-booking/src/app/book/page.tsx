"use client";
import React, { useMemo, useState } from "react";
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
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DEFAULT_CENTER = [43.6532, -79.3832];

export default function Page() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <>
      <div className="absolute bg-transparent m-10 z-[500]">
        <Card>
          <CardHeader>
            <CardTitle>Book a trip</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              <div className="flex flex-col sm:flex-row sm:gap-4 mb-9">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">DATE</Label>
                  <Input />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">TIME(24 HOUR)</Label>
                  <Input />
                </div>
              </div>
              <div className="my-6">
                <Label htmlFor="email">PICKUP/DROP-OFF</Label>
                <Input type="text" placeholder="Pickup" className="mb-8" />
                <Input type="text" placeholder="Destination" className="mb-4" />
                <Link href="/" className="border-b-2 border-black">
                  Add aditioonal stop
                </Link>
              </div>
              <div className="pb-8">
                <h5 className="text-gray-300 text-[14px] mb-2">PAYMENT METHOD</h5>
                <Select >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Payment on board" />
                  </SelectTrigger>
                  <SelectContent className="z-[500]">
                    <SelectItem value="light">+ Add Anothe Card</SelectItem>
                    <SelectItem value="dark">Payment on board</SelectItem>

                  </SelectContent>
                </Select>
              </div>
              <hr />
              <div>h4</div>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <Map position={DEFAULT_CENTER} zoom={10} />
    </>
  );
}
