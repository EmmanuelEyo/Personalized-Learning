"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { SidebarLinks } from '@/constants/sidebarLinks';
import { FaLock } from "react-icons/fa";
import { SiThealgorithms } from "react-icons/si";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { setCollapsed } from '@/redux/slice';
import { BsArrowsCollapseVertical } from "react-icons/bs";
import { LuLogOut } from 'react-icons/lu';
import Modal from './Modal';

const SideBar = () => {
    const dispatch = useDispatch();
    const collapsed = useSelector((state: RootState) => state.app.collapsed);
    const sidebarRef = useRef<HTMLDivElement>(null)

    const [openModal, setOpenModal] = useState(false);

    const toggleModal = () => {
        setOpenModal(!openModal);
    };

    const handleCollapse = () => {
        dispatch(setCollapsed());
    };

    const handleClickOutside = (e: MouseEvent) => {
        if(sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
            dispatch(setCollapsed())
        }
    }

    useEffect(() => {
        if(!collapsed) {
            document.addEventListener('mousedown', handleClickOutside)
        } else{
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        }
    })

    return (
        <div ref={sidebarRef}>
            {collapsed && (
                <button 
                    onClick={handleCollapse} 
                    className="fixed top-[4.5rem] left-0 p-2 rounded-r-full w-14 bg-gray-900 z-50"
                >
                    <BsArrowsCollapseVertical size={24} />
                </button>
            )}
            <div className={`fixed top-0 left-0 h-screen ${collapsed ? 'w-0' : 'w-64'} bg-gray-900 text-gray-300 flex flex-col z-40 transition-width duration-300`}>
                <div className={`flex ${collapsed ? 'hidden' : 'justify-between'} items-center h-20 border-b border-gray-800 p-4`}>
                    <Link href='/'>
                        <div className='flex items-center space-x-3'>
                            <SiThealgorithms className={collapsed ? 'hidden' : ''} size={20} />
                            {!collapsed && <h1 className='text-xl'>Learn.ai</h1>}
                        </div>
                    </Link>
                    {!collapsed && (
                        <button onClick={handleCollapse} className='p-2'>
                            <BsArrowsCollapseVertical size={24} />
                        </button>
                    )}
                </div>
                {!collapsed && (
                    <>
                        <nav className='flex-1 overflow-y-auto'>
                            {SidebarLinks.map((item, index) => (
                                <div key={index} className='p-4'>
                                    <h2 className='text-gray-400 uppercase text-sm'>{item.title}</h2>
                                    <ul className='mt-2 space-y-2'>
                                        {item.links.map((link, linkIndex) => (
                                            <li key={linkIndex} className='flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer'>
                                                <span className='h-6 w-6'>{link.icon}</span>
                                                <Link href={link.route}>
                                                    <span>{link.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <li onClick={toggleModal} className='flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 hover:bg-gray-800 cursor-pointer'>
                                <span className='h-6 w-6'>
                                    <LuLogOut />
                                </span>
                                <span>Logout</span>
                            </li>
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
                    </>
                )}
                {openModal && <Modal toggleModal={toggleModal} />}
            </div>
        </div>
    );
};

export default SideBar;
