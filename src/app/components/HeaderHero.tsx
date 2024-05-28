import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { PiExport } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';

const HeaderHero = () => {
    const user = useSelector((state: RootState) => state.auth.user)
  return (
    <div className='flex flex-col md:flex-row bg-transparent justify-between mt-14 py-10 px-4 mx-4 md:mx-24 sm:px'>
        <div className='mb-4 md:mb-0'>
            {user ? (
                <>
                    <h1 className='lg:text-4xl text-2xl md:ml-0 ml-9 font-normal text-gray-400'>
                        Welcome back,
                        <span className='text-blue-500 font-semibold lg:text-5xl text-3xl'> {user.name}!</span>
                    </h1>
                </>
            ) : (
                <Link href='/sign-in'>
                    <button className='bg-gray-700 py-3 px-4'>LOGIN</button>
                </Link>
            )}
        </div>
        <div className='flex md:space-x-4 space-x-6 md:ml-0 ml-7'>
            <button className="flex items-center space-x-2 bg-white hover:bg-gray-600 text-black py-1 px-3 md:px-4 md:py-3 rounded-xl">
                <CiCirclePlus className="md:h-6 md:w-6 h-5 w-5" />
                <span className='md:text-base text-sm'>Add new widget</span>
            </button>
            <button className="flex items-center space-x-2 bg-transparent hover:bg-gray-600 border border-gray-700 text-white py-1 px-2 md:px-4 md:py-3 rounded-xl">
                <PiExport className="md:h-6 md:w-6 h-5 w-5" />
                <span className='md:text-base text-sm'>Export reports</span>
            </button>
        </div>
    </div>
  )
}

export default HeaderHero