// import Image from 'next/image'
"use client"
import React, { useState } from 'react'
import { items } from '@/constants'
import Image from 'next/image'

const AdaptiveLearning = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null)
  return (
    <div className='text-white py-20 px-4 sm:px-6 md:px-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between'>
          <div className='flex flex-col lg:w-1/2'>
            <button className='bg-gray-800 border border-gray-500 py-2.5 px-6 rounded-full mb-4 lg:self-start self-center'>
              <p className='lg:text-base text-sm'>Powering Individualized Learning with AI</p>
            </button>
            <h1 className='text-3xl sm:text-4xl lg:text-left text-center lg:text-6xl mb-6'>
              Harnessing AI <br />
              to Orchestrate <br />
              Personalized Learning
            </h1>
            <Image src='/3D-image.png' alt='AI image' width={400} height={400} />
          </div>
          <div className='flex flex-col lg:w-1/2 mt-20 sm:mt-24 lg:mt-16 ml-0 sm:ml-8 lg:ml-16'>
            <ul className='space-y-4 text-base sm:text-lg'>
              {items.map(item => (
                <li key={item.id} className={`flex flex-col items-start cursor-pointer hover:text-blue-800 transition-all duration-500 ${activeItem === item.id ? 'bg-transparent border border-gray-300 border-r-0 border-l-4 p-3' : ''}`}>
                  <div className={`flex items-start cursor-pointer ${activeItem === item.id ? 'font-bold text-white' : ''}`} onClick={() => setActiveItem(item.id)}>
                    <span className={`w-0.5 h-8 sm:h-10 cursor-pointer mr-3 ${activeItem === item.id ? '': 'bg-gray-500'}`}></span>
                    <p className='text-lg sm:text-2xl'>{item.text}</p>
                  </div>
                  {activeItem === item.id && (
                    <p className='text-gray-500 text-sm sm:text-base'>{item.description}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdaptiveLearning
