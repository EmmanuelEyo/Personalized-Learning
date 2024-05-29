import React from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { BsFillBellSlashFill } from "react-icons/bs";
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Navbar = () => {
    const user = useSelector((state: RootState) => state.auth.user);

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
        <div className='bg-gray-800 text-gray-300 shadow-md w-full z-10 fixed top-0 left-0'>
            <div className='flex items-center justify-between h-16 px-4 lg:px-8 max-w-screen-xl mx-auto'>
                <div className='flex items-center space-x-4 mx-20 md:mx-32'>
                    <PlaceholdersAndVanishInput onChange={handleChange} onSubmit={onSubmit} placeholders={placeholders} />
                </div>
                <div className='flex items-center space-x-4 md:space-x-6'>
                    <FaMoon className='h-6 w-6 text-gray-400 hidden md:block' />
                    <BsFillBellSlashFill className='h-6 w-6 text-gray-400 hidden md:block' />
                    <div className='bg-gray-700 h-8 w-8 rounded-full overflow-hidden flex items-center justify-center'>
                        {user && user.name ? (
                            <p className='uppercase text-2xl'>{user.name[0]}</p>
                        ) : (
                            <p className='uppercase text-2xl'>?</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


