"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { SidebarLinks } from '@/constants/sidebarLinks'
import { FaLock } from "react-icons/fa";
import { SiThealgorithms } from "react-icons/si";
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState } from '@/redux/store';
import { setCollapsed } from '@/redux/slice';
import { BsArrowsCollapseVertical } from "react-icons/bs";
// import { handleUserLogout } from '@/redux/authSlice';
import { LuLogOut } from 'react-icons/lu';
import Modal from './Modal';

const SideBar = () => {
    const dispatch = useAppDispatch()
    const collapsed = useSelector((state: RootState) => state.app.collapsed)

    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => {
        setOpenModal(state => !state)
    }


  return (
    <div className={`bg-gray-900 h-screen fixed ${collapsed ? 'w-16' : 'w-64'} text-gray-300 flex flex-col z-50 overflow-auto scrollbar-hide transition-all duration-300`}>
        <div className={`${collapsed ? 'flex-col' : 'flex justify-center gap-6'}`}>
            <Link href='/'>
                <div className='flex items-center justify-center space-x-3 h-20 border-b border-gray-800'>
                    <SiThealgorithms size={collapsed ? '24' : '20'} />
                    {!collapsed && <h1 className='text-xl'>Learn.ai</h1>}
                </div>
            </Link>
            <button className={`${collapsed ? 'ml-5' : ''}`} onClick={() => dispatch(setCollapsed())}>
                <BsArrowsCollapseVertical size={24} />
            </button>
        </div>
        <nav className='flex-1'>
            {SidebarLinks.map((item, index) => (
                <div key={index} className='p-4'>
                    {!collapsed && <h2 className='text-gray-400 uppercase text-sm'>{item.title}</h2>}
                    <ul className='mt-2 space-y-2'>
                        {item.links.map((link, linkIndex) => (
                            <li key={linkIndex} className='flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer'>
                                <span className='h-6 w-6'>{link.icon}</span>
                                {!collapsed && (
                                    <Link className='-mt-3' href={link.route}>
                                        <span>{link.name}</span>
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <li onClick={toggleModal} className='flex items-center ml-5 space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer'>
                <span className='h-6 w-6'>
                    <LuLogOut />
                </span>
                {!collapsed && (
                    <span className='-mt-2'>logout</span>
                )}
            </li>
        </nav>
        <div className='p-4 border-t border-gray-800'>
            <div className={`${collapsed ? 'ml-2' : 'flex items-center space-x-3 bg-gray-800 p-4 rounded-md'}`}>
                <span className='h-6 w-6'>
                    <FaLock />
                </span>
               {!collapsed && (
                <div>
                    <p>Unlock new features</p>
                    <button className='bg-indigo-500 text-white mt-2 py-1 px-4 rounded-md'>Get Pro Now</button>
                </div>
               )}
            </div>
        </div>
        {openModal && <Modal toggleModal={toggleModal} />}
    </div>
  )
}

export default SideBar