import { DownloadApp } from "@/components/DownloadApp";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar";
import { Offers } from "@/components/Offers";
import { SocialMedia } from "@/components/SocialMedia";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DownloadApp />
      <Offers />
      <SocialMedia />
      <Footer />
    </div>
  );
}
