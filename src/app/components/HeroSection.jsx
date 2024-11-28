"use client"
import React from 'react';
import Image from 'next/image';
import TailwindcssButtons from './ui/TailwindcssButtons';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="px-3 py-8 sm:px-3 md:px-7 lg:px-16">
      <div className="flex flex-col md:flex-row items-center justify-end">
        {/* Left Section - Text Content */}
        <div className="flex flex-col mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-white mb-2 text-3xl sm:text-2xl md:text-6xl lg:text-6xl font-extrabold">
            <span className='text-gray-500 bg-grad-to-r from-gray-600 to-purple-600'>Hello, I'm</span> <span>Biplop Giri</span>  </h1>
           
            <h1 className="text-white mb-2 text-2xl sm:text-xl md:text-4xl lg:text-5xl font-semibold">
               <TypeAnimation
                     sequence={[
                     'Electronics Engineer',
                     1000,
                     'Software Developer',
                     1000
               
                     ]}
                     wrapper="span"
                     speed={50}
                     repeat={Infinity}
                   />
             </h1>
             
          <p className="text-[#ADB7BE] text-lg sm:text-xl md:text-2xl mb-5">
            I build circuits and software.
          </p>
          
          {/* Buttons */}
          <div className="space-x-4 sm:space-x-4 sm:space-y-0 sm:flex sm:items-center">
           <a href= '#projects'> <TailwindcssButtons title="Show My Work" /></a>
           <a href='https://drive.google.com/file/d/1_m1XJhRTwO0jh9MA0B7UCc7LpmPsDRAK/view?usp=sharing'><TailwindcssButtons title="Download CV" /></a> 
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center md:w-1/2">
          <Image
            src="/images/biplop.jpg"
            className="rounded-full border-solid border-[#181818] border-x-[28px] border-y-[28px]"
            alt="hero image"
            width={300}
            height={300}
            priority // This can improve performance by prioritizing the image loading
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
