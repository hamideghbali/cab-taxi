import React from 'react'
import Chits from "@/assets/beck-chits_.png"
import Events from "@/assets/beck-events_.png"
import Accounts from "@/assets/beck-accounts_.png"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Link } from 'lucide-react'

export const Offers = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:mt-10 ">
      <div className="md:flex md:justify-center md:items-center">
        <div className='max-w-lg p-8 bg-gray-200 rounded-lg shadow-lg text-center mb-4 md:mb-0'>
          <Image src={Chits} alt='bucks' className='w-40 h-40 mx-auto' />
          <h2 className='text-orange-400 mt-4'>HamidTaxi Bucks</h2>
          <p className="text-gray-700 mt-2 mb-3">For a unique gift giving idea, consider HamidTaxi Bucks! They are a great way to share the freedom of riding with HamidTaxi. They are great as stocking stuffers, gifts for staff, and helpful to have at home just in case!</p>
          <Button variant="outline" className="w-36 h-12 border-2 border-gray-600 hover:bg-green-500 hover:text-white">BUY NOW</Button>
        </div>
        <div className='max-w-lg p-8 bg-gray-200 rounded-lg shadow-lg text-center mb-4 md:mb-0'>
          <Image src={Events} alt='events' className='w-40 h-40 mx-auto' />
          <h2 className='text-orange-400 mt-4'>Special Events</h2>
          <p className="text-gray-700 mt-2  mb-3">If you are planning an event, large or small, we can help with all your transportation requirements. We can work with you to create a custom experience for your guests to arrive and get home safe.</p>
          <Button variant="outline" className="w-36 h-12 border-2 border-gray-600 hover:bg-green-500 hover:text-white">CONTACT US</Button>
        </div> 
        <div className='max-w-lg p-8 bg-gray-200 rounded-lg shadow-lg text-center mb-4 md:mb-0'>
          <Image src={Accounts} alt='accounts' className='w-40 h-40 mx-auto' />
          <h2 className='text-orange-400 mt-4'>Accounts</h2>
          <p className="text-gray-700 mt-2  mb-3">For a unique gift giving idea, consider HamidTaxi Bucks! They are a great way to share the freedom of riding with HamidTaxi. They are great as stocking stuffers, gifts for staff, and helpful to have at home just in case!</p>
          <Button variant="outline" className="w-36 h-12 border-2 border-gray-600 hover:bg-green-500 hover:text-white">CREATE ACCOUNT</Button>
        </div>
      </div>
    </div>
  )
}
