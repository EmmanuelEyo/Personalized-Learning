"use client"
import React from 'react'
import SideBar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { BentoGridSecondDemo } from '../components/BentoGridSecondDemo'

const page = () => {
  return (
    <div className="flex bg-slate-950 min-h-screen justify-center">
        <SideBar />
        <div>
            <Navbar />
            <div className='text-6xl font-bold mb-10'>
              <h1 className='text-white mt-20'>Feeling stuck?</h1>
              <p>We&apos;re here to help</p>
            </div>
            <BentoGridSecondDemo />
        </div>
    </div>
  )
}

export default page