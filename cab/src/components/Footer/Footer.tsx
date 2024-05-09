import React from 'react'
import { Button } from "@/components/ui/button"
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import AppStore from "@/assets/app-store.png"
import GooglePlay from "@/assets/google-play.png"

export const Footer = () => {
  return (
    <footer className='bg-orange-400 text-white py-8 px-4 mt-10'>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and navigation links */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h3 className='mb-4 text-xl'>Hamid Taxi</h3>
            <ul className='flex flex-col space-y-2'>
              <li><a href="">About</a></li>
              <li><a href="">hamid Bucks</a></li>
              <li><a href="">Accounts</a></li>
              <li><a href="">FAQ</a></li>
              <li><a href="">Work With HamidTaxi</a></li>
            </ul>
          </div>

          {/* Contact information */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <Button variant="outline" className='bg-orange-400 mb-2'>Contact Us</Button>
            <p>1 Credit Union Dr Toronto M4A 2S6</p>
            <a href="tel:4167515555">416-751-5555</a>
          </div>

          {/* Social media links */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <ul className="flex space-x-4">
              <li><FaInstagram /></li>
              <li><FaFacebook /></li>
              <li><FaTwitter /></li>
            </ul>
            <span>@HamidTaxi</span>
          </div>

          {/* Download app section */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h4 className="mb-2">Download our App</h4>
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
    </footer>
  )
}
