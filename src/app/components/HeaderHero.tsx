import React from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { PiExport } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import jsPDF from 'jspdf';
// import { saveAs } from 'file-saver'

const handleExportReport = () => {
  const doc = new jsPDF();

  doc.text('Dashboard Report', 20, 10);

  doc.text('Chart Data', 20, 20);
  const ChartData = [6, 7, 3, 8.5, 2, 8, 7, 7.5, 5, 6];
  ChartData.forEach((data, index) => {
    doc.text(`Day ${index + 1}: ${data}K`, 20, 30 + index * 10);
  });

  doc.text('Course Progress:', 20, 150);
  doc.text('Design Leadership - 70%', 20, 160);
  doc.text('Hours Spent: 214', 20, 170);
  doc.text('Completed: 15', 20, 180);
  doc.text('In Progress: 30%', 20, 190);

  doc.save('dashboard-report.pdf');
};

const HeaderHero = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className='flex flex-col md:flex-row bg-transparent justify-between mt-14 py-10 lg:gap-7 px-4 mx-4 md:mx-24'>
      <div className='mb-4 md:mb-0 flex items-center mt-3'>
        {user ? (
          <>
            <h1 className='lg:text-4xl text-2xl font-normal text-gray-400'>
              {user.isFirstTime ? 'Welcome,' : 'Welcome back,'}
              <span className='text-blue-500 font-semibold lg:text-5xl text-3xl'> {user.name}!</span>
            </h1>
          </>
        ) : (
          <Link href='/sign-in'>
            <button className='bg-gray-700 text-white py-3 px-4 rounded-lg hover:bg-gray-600 transition duration-300'>
              LOGIN
            </button>
          </Link>
        )}
      </div>
      <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
        <button className="flex items-center space-x-2 bg-white hover:bg-gray-600 text-black py-2 px-4 rounded-xl transition duration-300">
          <CiCirclePlus className="h-5 w-5 md:h-6 md:w-6" />
          <span className='text-sm md:text-base'>Add new widget</span>
        </button>
        <button onClick={handleExportReport} className="flex items-center space-x-2 bg-transparent hover:bg-gray-600 border border-gray-700 text-white py-2 px-4 rounded-xl transition duration-300">
          <PiExport className="h-5 w-5 md:h-6 md:w-6" />
          <span className='text-sm md:text-base'>Export reports</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderHero;

