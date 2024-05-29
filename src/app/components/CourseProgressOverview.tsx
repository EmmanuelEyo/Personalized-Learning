import React from 'react';
import { IoIosRocket } from 'react-icons/io';
import { CircularProgress } from "@nextui-org/progress";

const CourseProgressOverview: React.FC = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between gap-6 items-center mb-4'>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-900 rounded-full h-10 w-10 md:h-12 md:w-12 flex items-center justify-center">
            <IoIosRocket className='h-6 w-6 md:h-8 md:w-8 text-white' />
          </div>
          <h1 className='font-semibold text-base md:text-xl text-blue-400'>Course Progress</h1>
        </div>
        <button className='text-sm md:text-base font-bold text-blue-600 hover:underline'>See All</button>
      </div>
      <div className="flex justify-between">
        <div className='flex flex-col items-start'>
          <CircularProgress
            classNames={{
              svg: "lg:w-36 lg:h-36 h-24 w-24 drop-shadow-md",
              indicator: "stroke-purple-500",
              track: "stroke-purple-500/10",
              value: "text-3xl font-semibold text-white",
            }}
            value={70}
            strokeWidth={2}
            showValueLabel={true}
          />
          <h1 className='mt-2 font-semibold text-base lg:text-lg text-left'>Design Leadership</h1>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <div>
            <p className='text-gray-600'>Hours Spent</p>
            <h1 className='xl:text-4xl text-xl font-bold'>214</h1>
          </div>
          <div>
            <p className='text-gray-600'>Completed</p>
            <h1 className='xl:text-4xl text-xl font-bold'>15</h1>
          </div>
          <div>
            <p className='text-gray-600'>In Progress</p>
            <h1 className='xl:text-4xl text-xl font-bold'>30%</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgressOverview;



























// import React from 'react';
// import { CircularProgress } from "@nextui-org/progress";
// import { IoIosRocket } from "react-icons/io";

// const CourseProgressOverview = () => {
//   return (
//     <div className="bg-slate-900 p-6 rounded-2xl h-full shadow-md w-full max-w-full">
//       <div className='flex justify-between'>
//         <div className="flex space-x-6">
//           <div className="bg-blue-900 rounded-full md:w-12 md:h-12 h-8 w-8 flex items-center justify-center">
//             <IoIosRocket className='w-5 h-5 md:w-8 md:h-8 text-white' />
//           </div>
//           <h1 className='mt-3 font-semibold md:text-xl text-base text-blue-400'>Course Progress</h1>
//         </div>
//         <button className='md:text-xl text-base font-bold border-b-1 border-b-gray-300'>See All</button>
//       </div>
//       <div className='flex flex-col md:flex-row gap-10 mt-5'>
//         <div className='flex flex-col items-center'>
//           <CircularProgress
//               classNames={{
//                   svg: "lg:w-36 lg:h-36 h-24 w-24 drop-shadow-md",
//                   indicator: "stroke-purple-500",
//                   track: "stroke-purple-500/10",
//                   value: "text-3xl font-semibold text-white",
//               }}
//               value={70}
//               strokeWidth={2}
//               showValueLabel={true}
//           />
//           <h1 className='mt-2 font-semibold text-base lg:text-lg'>Design Leadership</h1>
//         </div>
//         <div className='flex flex-col items-center'>
//             <CircularProgress
//             classNames={{
//                 svg: "lg:w-36 lg:h-36 h-24 w-24 drop-shadow-md",
//                 indicator: "stroke-blue-500",
//                 track: "stroke-blue-500/10",
//                 value: "text-3xl font-semibold text-white",
//             }}
//             value={45}
//             strokeWidth={2}
//             showValueLabel={true}
//             />
//             <h1 className='mt-2 font-semibold text-base lg:text-lg'>UI/UX Design</h1>
//         </div>
//         <div className='flex flex-col items-center md:items-start'>
//           <div>
//             <p className='text-gray-600'>Hours Spent</p>
//             <h1 className='text-4xl font-bold'>214</h1>
//           </div>
//           <div>
//             <p className='text-gray-600'>Completed</p>
//             <h1 className='text-4xl font-bold'>15</h1>
//           </div>
//           <div>
//             <p className='text-gray-600'>In Progress</p>
//             <h1 className='text-4xl font-bold'>30%</h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseProgressOverview;





