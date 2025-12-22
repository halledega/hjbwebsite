"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the type for a single slide, ensuring it includes an image and a name.
type Slide = {
  name: string;
  image: string;
};

// Define the props for the Slideshow component.
// It expects children (the content to overlay) and an array of slides for the background.
interface SlideshowProps {
  children: React.ReactNode;
  slides: Slide[];
}

/**
 * Slideshow Component
 *
 * This client-side component provides a cycling image background.
 * It renders its `children` prop on top of this dynamic background.
 *
 * - `useState` manages the `currentIndex` to control which image is visible.
 * - `useEffect` sets up an interval to change the image every 5 seconds and includes
 *   cleanup to prevent memory leaks.
 * - `Image` component from Next.js is used for optimized image loading.
 */
export default function Slideshow({ children, slides }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up an interval to change the slide every 5 seconds (5000ms)
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    // Clean up the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, [slides.length]); // Dependency array ensures the effect reruns if the number of slides changes

  if (!slides || slides.length === 0) {
    return null; // Or a placeholder
  }
  
  return (
    <div className="relative w-full min-h-[600px] overflow-hidden">
      {/* Background Image Slideshow */}
      {slides.map((slide, index) => (
        <Image
          key={slide.name} // Unique key for each image in the list
          src={slide.image}
          alt={`Background image for ${slide.name}`}
          layout="fill"
          objectFit="cover"
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          priority={index === 0} // Prioritize loading the first image for LCP
        />
      ))}

      {/* Dark overlay for readability of foreground content */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Foreground content passed as children */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center">
        {children}
      </div>
    </div>
  );
}