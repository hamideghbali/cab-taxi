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
          <Link href="/account">
            <VscAccount className="text-2xl hover:text-gray-700" />
          </Link>
        </div>
      </aside>
    </div>
  );
};
