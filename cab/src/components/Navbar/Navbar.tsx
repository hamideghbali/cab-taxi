import React from 'react';
import cabLogo from "@/assets/cabLogo.png";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export const Navbar = () => {

    return (
        <div className=''>
            <div className="flex justify-between items-center px-2">
                <Image src={cabLogo} alt="cab logo" className='w-40' />
                <div className="flex space-x-4">
                    <Button variant="outline" className='text-green-500 hover:bg-green-500 hover:text-white border-none '>437-499-0651</Button>
                    <Link href="//localhost:3001" className='bg-orange-400 text-white hover:bg-green-500 hover:text-white border-none'>ORDER A BRICK!</Link>
                </div>
            </div>
            <div className='bg-orange-400 text-white p-2 flex justify-between px-4'>
                <div>
                    <nav>
                        <ul className='flex space-x-4 '>
                            <li className="hover:border-b-2  hover:border-white">
                                <Link href="#" >Buy The Ride</Link>
                            </li>
                            <li className="hover:border-b-2  hover:border-white">
                                <Link href="#">Work With HamidTaxi</Link>
                            </li>
                            <li className="hover:border-b-2  hover:border-white">
                                <Link href="#">About</Link>
                            </li>
                            <li className="hover:border-b-2  hover:border-white">
                                <Link href="#">FAQ</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='my-auto'>
                    <nav>
                        <ul className='flex space-x-4 text-sm'> {/* Add space-x-4 class to add space between list items */}
                            <li className="hover:border-b-2  hover:border-white">
                                <Link href="#">ACCOUNTS</Link>
                            </li>
                            <li className="hover:border-b-2  hover:border-white">
                                <Link href="#">CARD</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
