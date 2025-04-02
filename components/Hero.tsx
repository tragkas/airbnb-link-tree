"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface HeroProps {
  title: string;
  images: string[];
}

export default function Hero({ title, images }: HeroProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className="flex flex-col items-center">
      {/* Main Image - Click to Open Carousel */}
      <Image
        src={images[0]}
        alt={`Main view of ${title}`}
        width={400}
        height={300}
        priority
        className="rounded-2xl shadow-lg cursor-pointer"
        onClick={toggleModal}
      />
      <h1 className="text-2xl text-black font-bold mt-4">🏡 {title}</h1>

      {/* Modal with Carousel */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery modal"
          onClick={toggleModal} // Click outside to close
        >
          {/* Prevent clicks inside modal from closing */}
          <div
            className="relative w-[90%] max-w-2xl p-4 bg-black rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-6 text-white text-4xl z-10 cursor-pointer"
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
                    alt={`View ${index + 1} of ${title}`}
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
