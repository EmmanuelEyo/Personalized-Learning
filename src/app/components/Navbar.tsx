import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { BsFillBellSlashFill } from "react-icons/bs";
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Navbar = () => {
    const user = useSelector((state: RootState) => state.auth.user)

    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };
  return (
    <div className='flex items-center justify-between bg-gray-800 text-gray-300 h-16 px-4 shadow-md'>
        <div className='flex items-center space-x-4'>
            <IoSearchOutline className='h-6 w-6 text-gray-400' />
            <PlaceholdersAndVanishInput  onChange={handleChange} onSubmit={onSubmit} placeholders={placeholders}  />
        </div>
        <div className='flex items-center space-x-6'>
            <FaMoon className='h-6 w-6 text-gray-400' />
            <BsFillBellSlashFill className='h-6 w-6 text-gray-400' />
            <div className='bg-gray-700 h-8 w-8 rounded-full overflow-hidden'>
                {/* <Image src='/icon-profile.png' alt='Profile' className='h-full w-full object-cover' width={1} height={1} /> */}
                <p className='uppercase text-2xl ml-2 -mt-0.3'>{user.name[0]}</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar