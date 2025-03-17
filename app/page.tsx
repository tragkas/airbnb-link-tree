"use client";
import PropertyHeader from "../components/Hero";
import LinkButton from "../components/LinkButton";
import Footer from "../components/Footer";
import { FaAirbnb, FaPhone } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FiInstagram } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import LinkSocial from "../components/LinkSocial";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f7f7] text-gray-800 p-6">
      {/* Property Header */}
      <PropertyHeader />

      {/* Links Section */}
      <div className="mt-6 w-full max-w-sm space-y-4">
        <LinkButton
          text="Book on Airbnb"
          icon={<FaAirbnb />}
          link="https://airbnb.com"
          bgColor="bg-[#FF5A5F]"
        />
        <LinkButton
          text="Book on Booking.com"
          icon={<TbBrandBooking />}
          link="https://www.booking.com/"
          bgColor="bg-blue-600"
        />
        <LinkButton
          text="Call Us"
          icon={<FaPhone />}
          link="tel:+1234567890"
          bgColor="bg-blue-400"
        />
        <LinkButton
          text="Download PDF Guide"
          icon={<HiDocumentText />}
          link="/guide.pdf"
          bgColor="bg-blue-300"
        />
      </div>

      {/* Social Media Links */}
      <div className="flex gap-4 mt-6">
        <LinkSocial icon={<FiInstagram />} link="https://instagram.com" />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
