"use client"
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Button } from './ui/moving-border';
import Link from 'next/link';

const Hero = () => {
    const words = [
        {
          text: "Unlock",
          className: 'text-6xl text-white'
        },
        {
            text: "the",
            className: 'text-white'
        },
        {
            text: "Power",
            className: 'text-6xl text-white'
        },
        {
            text: "of",
            className: 'text-white'
        },
        {
          text: "Personalized",
          className: "text-blue-500 dark:text-blue-500 text-7xl",
        },
        {
            text: "Learning",
            className: "text-blue-500 dark:text-blue-500 text-7xl",
        },
        {
          text: "with",
          className: 'text-white'
        },
        {
          text: "Next-Generation",
          className: "text-blue-500 dark:text-blue-500 text-7xl",
        },
        {
            text: "AI",
            className: "text-blue-500 dark:text-blue-500 text-5xl",
        },
    ];
  return (
    <div className='mt-14'>
        <div className='flex flex-col justify-center items-center'>
            <TypewriterEffect words={words} />
        </div>
        <div className='flex flex-col justify-center items-center text-center lg:text-base text-[0.8rem] text-gray-400 mt-7'>
            <p>Revolutionize the learning paradigm with our AI-driven platform that</p>
            <p>dynamically tailors each self to each learner&apos;s unique needs</p>
        </div>
        <div className='mt-5 flex space-x-5 justify-center items-center'>
            <div className=''>
                <Link href='/sign-up'>
                    <Button className='bg-purple-900 py-2 px-6 border-neutral-200 rounded-full items-center space-x-3 flex'>
                        <p>Get Started</p>
                        <p><FaArrowRightLong /></p>
                    </Button>
                </Link>
            </div>
            <div>
                <Link href='/'>
                    <Button className='bg-purple-500 border-neutral-200 py-1 px-6 rounded-full'>
                        <p>Get a demo</p>
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
