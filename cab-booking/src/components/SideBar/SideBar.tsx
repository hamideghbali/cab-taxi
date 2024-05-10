"use client";
import React, { useState } from "react";
import cabLogo from "@/assets/cabLogo.png";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { HiOutlineSave } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LiaIdCard } from "react-icons/lia";
import { IoInformationCircleOutline } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { FiLogOut } from "react-icons/fi";


export const SideBar = () => {
  return (
    <div className="overflow-y-auto fixed left-0 top-0 w-24 bg-gray-200">
      <aside className="flex h-screen">
        <div className="flex flex-col justify-between items-center text-black p-5 py-5">
          <Link href="/">
            <Image src={cabLogo} alt="cab logo" className="w-12 text-black" />
          </Link>
          <div className="flex flex-col items-center gap-12 text-2xl flex-grow justify-center">
            <Link href="/book">
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
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <VscAccount className="text-2xl hover:text-gray-700" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="ml-24">
                <Link href="/user-profile" className="cursor-pointer">
                  <DropdownMenuLabel className="flex gap-4 items-center">
                    <VscAccount className="text-2xl hover:text-gray-700" />
                    Account Deatails
                  </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <Link href="https://becktaxi.assets.passenger.icabbi.com/terms-and-conditions-en.html">
                  <DropdownMenuLabel className="flex gap-4 items-center">
                    <IoInformationCircleOutline className="text-2xl hover:text-gray-700" />
                    Terms and conditions
                  </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <Link href="https://becktaxi.assets.passenger.icabbi.com/privacy-policy-en.html">
                  <DropdownMenuLabel className="flex gap-4 items-center">
                    <LiaIdCard className="text-2xl hover:text-gray-700" />
                    Privacy policy
                  </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <Link href="">
                
                <DropdownMenuLabel className="flex gap-4 items-center">
                  <SlBookOpen className="text-2xl hover:text-gray-700" />
                  Language
                </DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <Link href="//localhost:3000">
                
                <DropdownMenuLabel className="flex gap-4 items-center">
                  <FiLogOut className="text-2xl hover:text-gray-700" />
                  Log out
                </DropdownMenuLabel>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>
    </div>
  );
};
