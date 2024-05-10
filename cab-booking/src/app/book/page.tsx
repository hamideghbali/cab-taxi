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
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">DATE</Label>
                  <Input />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">TIME(24 HOUR)</Label>
                  <Input />
                </div>
              </div>
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <Map position={DEFAULT_CENTER} zoom={10} />;
    </>
  );
}
