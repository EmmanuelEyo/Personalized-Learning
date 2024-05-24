import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { PiExport } from "react-icons/pi";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';

const HeaderHero = () => {
    const user = useSelector((state: RootState) => state.auth.user)
  return (
    <div className='flex bg-transparent justify-between py-10 px-4 mx-24 sm:px'>
        <div>
            {user ? (
                <>
                    <h1 className='text-4xl font-normal text-gray-400'>Welcome back,
                        <span className='text-blue-500 font-semibold text-5xl'> {user.name}!</span>
                    </h1>
                </>
            ): (
                <Link href='/sign-in'><button className='bg-gray-700 py-3 px-4'>LOGIN</button></Link>
            )}
        </div>
        <div className='flex space-x-4'>
            <button className="flex items-center space-x-2 bg-white hover:bg-gray-600 text-black px-4 py-3 rounded-xl">
                <CiCirclePlus className="h-6 w-6" />
                <span>Add new widget</span>
            </button>
            <button className="flex items-center space-x-2 bg-transparent hover:bg-gray-600 border border-gray-700 text-white px-4 py-3 rounded-xl">
                <PiExport className="h-6 w-6" />
                <span>Export reports</span>
            </button>
        </div>
    </div>
  )
}

export default HeaderHero