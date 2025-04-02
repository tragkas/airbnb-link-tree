"use client";

import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";
import { FaAirbnb, FaGithub, FaPhone } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import LinkSocial from "../components/LinkSocial";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 text-gray-800 p-6">
      {/* Property Hero */}
      <Hero 
        title="Cozy Beachfront Villa"
        images={[
            "/home.jpg",
            "/interior1.png",
            "/interior2.png",
            "/interior3.png",
            "/interior4.png",
        ]}
        />


      {/* Links Section */}
      <div className="mt-6 w-full max-w-sm space-y-4">
        <LinkButton
          text="Book on Airbnb"
          icon={<FaAirbnb />}
          link="https://airbnb.com"
          bgColor="bg-red-400"
          hoverColor="hover:bg-red-300"
        />
        <LinkButton
          text="Book on Booking.com"
          icon={<TbBrandBooking />}
          link="https://www.booking.com/"
          bgColor="bg-blue-600"
          hoverColor="hover:bg-blue-500"
        />
        <LinkButton
          text="Call Us"
          icon={<FaPhone />}
          link="tel:+1234567890" 
          bgColor="bg-blue-400"
          hoverColor="hover:bg-blue-300"
        />
        <LinkButton
          text="Download PDF Guide"
          icon={<HiDocumentText />}
          link="/guide.pdf"
          bgColor="bg-blue-300"
          hoverColor="hover:bg-blue-200"
        />
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4 mt-6">

        <LinkSocial 
          icon={<FiInstagram />} 
          link="https://instagram.com" 
          textColor="text-black" 
          hoverColor="hover:text-gray-600" 
        />

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
