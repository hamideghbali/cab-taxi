import React from 'react'
import Image from 'next/image'
import blurNight from "@/assets/blurNight.jpg"
import { Link } from 'lucide-react'
import AppStore from "@/assets/app-store.png"
import GooglePlay from "@/assets/google-play.png"

export function DownloadApp() {
  return (
    <div className='mt-10 relative'>
      <div>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center text-gray-700">
          MORE WAYS TO RIDE WITH US
        </h3>
      </div>
      {/* Image as background */}
      <div className="grid grid-cols-2 w-full h-72 relative">
        <Image src={blurNight} alt='night' layout="fill" objectFit="cover" className='bg-black opacity-100'/>
        <div className="grid grid-rows-3 gap-4">
          <div className="absolute top-1/2 transform -translate-y-1/2 text-white p-8">
            <div className='mb-4'>
              <h4 className="text-4xl font-semibold tracking-tight text-orange-400 mb-4">Download the <br />  new HamidTaxi app</h4>

              <p className="text-white text-xl">
                Available on the App Store and <br /> Google Play, our brand new app will <br /> get you where you want to go, faster.
              </p>
            </div>
            <div className='flex gap-4'>
              <a href="https://www.apple.com">
                <img src={AppStore.src} alt="apple" className='w-[160px]' />
              </a>
              <a href="//play.google.com">
                <img src={GooglePlay.src} alt="google" className='w-[160px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
