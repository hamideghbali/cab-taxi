import React, { useMemo } from 'react';
import { SideBar } from "@/components/SideBar/SideBar"
import dynamic from 'next/dynamic';

const DEFAULT_CENTER = [38.907132, -77.036546]

export default function Page () {

  const Map = useMemo(() => dynamic(
    () => import('@/components/Map/Map'),
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false
    }
  ), [])

  return (
    <div className="flex">
      <div className="w-100 h-screen overflow-y-auto fixed left-0 top-0 z-10">
        {/* <SideBar /> */}
      </div>
      <div className="ml-100 overflow-hidden relative">
        <Map position={DEFAULT_CENTER} zoom={10} />
      </div>
    </div>
  )
}