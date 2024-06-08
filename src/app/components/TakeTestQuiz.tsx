"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const TakeTestQuiz: React.FC = () => {
  const router = useRouter();
  return (
    <div className='bg-blue-950 mx-10 mb-16 rounded h-60 flex justify-center relative overflow-hidden'>
      <div className='absolute right-0 h-64 w-96 '>
        <Image src={"/images/take-test-footer.svg"} fill alt='' />
      </div>
      <div className='z-20 flex md:flex-row flex-col py-4 justify-between w-3/4 md:items-center  '>
        <div className='flex-1 flex flex-col md:justify-center justify-end'>
          <h1 className='font-bold text-lg md:text-3xl text-white md:mb-6 mb-2'>
            Ready to take your test?
          </h1>
          <p className='text-white md:text-lg text-xs '>
            Take the first step towards better health with our prediabetic test.
            It&apos;s quick, easy, and personalized.
          </p>
        </div>
        <div className='flex-1 md:justify-end flex items-center'>
          <button className="bg-blue-600 rounded py-2 px-5">Take test now</button>
        </div>
      </div>
    </div>
  );
};
export default TakeTestQuiz;