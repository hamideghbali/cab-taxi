"use client";
import React, { useState } from "react";
import cabLogo from "@/assets/cabLogo.png";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { HiOutlineSave } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
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
import Link from "next/link";

export const SideBar = () => {
  const [showCard, setShowCard] = useState(false);

  const handleCiCalendarClick = () => {
    setShowCard(true);
  };

  const handleCloseCard = () => {
    setShowCard(false);
  };

  return (
    <div className="overflow-y-auto fixed left-0 top-0 w-24 bg-gray-200">
      <aside className="flex h-screen">
        <div className="flex flex-col justify-between items-center text-black p-5 py-5">
          <Link href="/">
            <Image src={cabLogo} alt="cab logo" className="w-12 text-black" />
          </Link>
          <div className="flex flex-col items-center gap-12 text-2xl flex-grow justify-center">
            <Link href="/">
              <span className="bg-red-500 d-block">
                <CiCalendar className="hover:text-gray-700" />
              </span>
            </Link>
            <Link href="/bookings">
              <IoCalendarOutline className=" hover:text-gray-700" />
            </Link>
            <Link href="/payment">
              <FaRegCreditCard className=" hover:text-gray-700" />
            </Link>
            <Link href="/saved-cabs">
              <HiOutlineSave className=" hover:text-gray-700" />
            </Link>
          </div>
          <Link href="/account">
            <VscAccount className="text-2xl hover:text-gray-700" />
          </Link>
        </div>
        {showCard && (
          <Card className="w-auto absolute right-0 z-10">
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
            <CardFooter>
              <button onClick={handleCloseCard}>Close</button>
            </CardFooter>
          </Card>
        )}
      </aside>
    </div>
  );
};
