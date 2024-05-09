import React from 'react';

export function Hero() {
  return (
    <div>
      <video className=" inset-0 w-full  object-cover" autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/5834231/5834231-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
