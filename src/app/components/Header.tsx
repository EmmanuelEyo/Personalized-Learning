"use client"
import React, { useState, useRef, useEffect } from 'react'
import { navbarLinks } from '@/constants'
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const Header = () => {
    const [active, setActive] = useState<string | null>(null)
    const [toggle, setToggle] = useState(false)
    const sheetRef = useRef<HTMLDivElement>(null)

    const handleItemClick = (id: string) => {
        setActive(id)
    }

    const handleClickOutside = (e: MouseEvent) => {
        if(sheetRef.current && !sheetRef.current.contains(e.target as Node)) {
            setToggle(false)
        }
    }

    useEffect(() => {
        if(toggle) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        }
    }, [toggle])

  return (
    <nav className='w-full flex py-6 justify-between items-center'>
        <h1 className='w-[124px] h-[32px] ml-6 text-xl'>Learn.ai</h1>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navbarLinks.map((item, index) => (
                <li onClick={() => handleItemClick(item.id)} key={item.id} className={`cursor-pointer text-xs font-normal mr-10 ${index === navbarLinks.length - 1 ? 'mr-0' : 'mr-10'} ${active === item.id ? 'text-purple-500' : 'text-white'}`}>
                    <a className='hover:text-purple-500' href={`${item.route}`}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>

        <div className='sm:hidden flex justify-end items-center flex-1'>
                <Sheet>
                    <SheetTrigger className='mr-6 w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle((state) => !state)}>
                        {toggle ? <IoMdClose size={20} /> : <RiMenu3Fill size={20} />}
                    </SheetTrigger>
                    <SheetContent ref={sheetRef} className='fixed top-0 right-0 w-full max-w-xs h-full bg-purple-900 p-6 rounded-l-xl shadow-lg z-50'>
                        <SheetHeader>
                            <SheetTitle className='text-3xl font-semibold text-white mb-4'>Explore Learn.ai</SheetTitle>
                            <SheetDescription>
                                <ul className='list-none flex flex-col justify-center items-center space-y-4'>
                                    {navbarLinks.map((item) => (
                                        <li
                                            onClick={() => handleItemClick(item.id)}
                                            key={item.id}
                                            className={`cursor-pointer text-lg font-medium ${active === item.id ? 'text-purple-500' : 'text-white'}`}
                                        >
                                            <a className='hover:text-purple-500' href={item.route}>
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

        </div>
    </nav>
  )
}

export default Header