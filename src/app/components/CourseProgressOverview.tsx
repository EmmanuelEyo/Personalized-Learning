// components/CourseProgress.tsx
import React from 'react';
import {CircularProgress} from "@nextui-org/progress";
import { IoIosRocket } from "react-icons/io";

const CourseProgressOverview = () => {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl h-full shadow-md max-w-xl mr-10">
      <div className='flex justify-between'>
        <div className="flex space-x-6">
          <div className="bg-blue-900 rounded-full w-12 h-12">
            <IoIosRocket className='ml-2 mt-2' size={30} />
          </div>
          <h1 className='mt-3 font-semibold text-xl text-blue-400'>Course Progress</h1>
        </div>
        <button className='text-xl font-bold border-b-1 border-b-gray-300'>See All</button>
      </div>
      <div className='flex gap-10 mt-10'>
        <div className='flex-col space-y-8 justify-center items-center'>
          <CircularProgress
              classNames={{
                  svg: "w-36 h-36 drop-shadow-md",
                  indicator: "stroke-purple-500",
                  track: "stroke-purple-500/10",
                  value: "text-3xl font-semibold text-white",
              }}
              value={70}
              strokeWidth={2}
              showValueLabel={true}
          />
          <h1 className='ml-2 font-semibold text-lg'>Design Leadership</h1>
        </div>
        <div className='flex-col space-y-8 justify-center items-center'>
            <CircularProgress
            classNames={{
                svg: "w-36 h-36 drop-shadow-md",
                indicator: "stroke-blue-500",
                track: "stroke-blue-500/10",
                value: "text-3xl font-semibold text-white",
            }}
            value={45}
            strokeWidth={2}
            showValueLabel={true}
            />
            <h1 className='ml-4 font-semibold text-lg'>UI/UX Design</h1>
        </div>
        <div className='flex-col space-y-10 -mt-5'>
          <div>
            <p className='text-gray-600'>Hours Spent</p>
            <h1 className='text-4xl font-bold'>214</h1>
          </div>
          <div>
            <p className='text-gray-600'>Completed</p>
            <h1 className='text-4xl font-bold'>15</h1>
          </div>
          <div>
            <p className='text-gray-600'>In Progress</p>
            <h1 className='text-4xl font-bold'>30%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressOverview;



