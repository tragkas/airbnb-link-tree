"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    "/home.png",
    "/interior1.png",
    "/interior2.png",
    "/interior3.png",
    "/interior4.png",
  ];

  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="flex flex-col items-center">
      {/* Main Image - Click to Open Carousel */}
      <Image
        src={images[0]}
        alt="Main view of Cozy Beachfront Villa"
        width={400}
        height={300}
        priority
        className="rounded-2xl shadow-lg cursor-pointer"
        onClick={toggleModal}
      />
      <h1 className="text-2xl text-black font-bold mt-4">🏡 Cozy Beachfront Villa</h1>

      {/* Modal with Carousel */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery modal"
        >
          <div className="relative w-[90%] max-w-2xl p-4 bg-black rounded-lg">
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-4 text-black text-3xl z-10"
              aria-label="Close gallery"
            >
              &times;
            </button>

            {/* Image Carousel */}
            <Carousel
              showArrows
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              showStatus={false}
            >
              {images.map((src, index) => (
                <div key={index}>
                  <Image
                    src={src}
                    alt={`View ${index + 1} of the Cozy Beachfront Villa`}
                    width={600}
                    height={400}
                    className="rounded-xl"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
