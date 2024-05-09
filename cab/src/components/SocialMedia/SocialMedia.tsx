import React from 'react'
import { Button } from "@/components/ui/button"

export const SocialMedia = () => {
  return (
    <div className='mt-8 text-center'>
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center text-gray-700 mb-3">
          ON INSTAGRAM
        </h3>
        <p className='mb-6'>
          We post giveaways, prizes and city updates for the best Toronto events!
        </p>
        <Button variant="outline" className='w-64 bg-orange-400 text-white hover:bg-green-500'> FOLLOW US ON INSTAGRAM</Button>
      </div>
    </div>
  )
}
