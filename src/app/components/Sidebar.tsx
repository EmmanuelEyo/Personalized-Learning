import React from 'react'
import Link from 'next/link'
import { SidebarLinks } from '@/constants/sidebarLinks'
import { FaLock } from "react-icons/fa";
import { SiThealgorithms } from "react-icons/si";

const SideBar = () => {
  return (
    <div className='bg-gray-900 h-screen w-64 text-gray-300 flex flex-col overflow-auto scrollbar-hide'>
        <Link href='/'>
            <div className='flex items-center justify-center space-x-5 h-20 border-b border-gray-800'>
                <SiThealgorithms size={20} />
                <h1 className='text-xl'>Learn.ai</h1>
            </div>
        </Link>
        <nav className='flex-1'>
            {SidebarLinks.map((item, index) => (
                <div key={index} className='p-4'>
                    <h2 className='text-gray-400 uppercase text-sm'>{item.title}</h2>
                    <ul className='mt-2 space-y-2'>
                        {item.links.map((link, linkIndex) => (
                            <li key={linkIndex} className='flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer'>
                                <span className='h-6 w-6'>{link.icon}</span>
                                <Link className='-mt-3' href={link.route}>
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
        <div className='p-4 border-t border-gray-800'>
            <div className='flex items-center space-x-3 bg-gray-800 p-4 rounded-md'>
                <span className='h-6 w-6'>
                    <FaLock />
                </span>
                <div>
                    <p>Unlock new features</p>
                    <button className='bg-indigo-500 text-white mt-2 py-1 px-4 rounded-md'>Get Pro Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar