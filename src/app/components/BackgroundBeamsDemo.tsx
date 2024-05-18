"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "./ui/moving-border";

export function BackgroundBeamsDemo() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="h-[40rem] w-[80%] bg-blue-950 relative flex flex-col items-center rounded-2xl justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <button className="flex cursor-pointer ml-28 h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Embark on Your Personalized Learning Journey Today
          </button>
          <h1 className="relative z-10 text-lg mt-10 md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Ready to Revolutionize Learning?
          </h1>
          <p></p>
          <Link href='/sign-up' className="flex items-center justify-center mt-16">
              <Button className='bg-purple-900 cursor-pointer z-50 py-2 px-6 border-neutral-200 rounded-full justify-center items-center space-x-3 flex'>
                  <p>Get Started</p>
                  <p><FaArrowRightLong /></p>
              </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
      