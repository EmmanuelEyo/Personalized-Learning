import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <div className='lg:px-14 px-10 mt-28'>
        <button className='bg-gray-800 border border-gray-500 py-2.5 px-6 rounded-full'>
            <p className='lg:text-base text-sm'>Why Personalized Learning?</p>
        </button>
        <div className='lg:flex flex-col mt-10 justify-between'>
            <div className='lg:text-6xl text-2xl'>
                <h1 className=' text-wrap'>The Future of Learning</h1>
                <h1>is Here: Personalized</h1>
                <h1>and Optimized</h1>
            </div>
            <div className='flex flex-col justify-end lg:text-sm text-[0.8rem] text-gray-400'>
                <p>Learn.ai leverrages cutting-edge artificial intelligence</p>
                <p>to forge a personalized learning experience that</p>
                <p>demonstrably enhances</p>
            </div>
        </div>
        <div className="text-white mt-16 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-semibold mb-2">Knowledge <br />Acquisition</h2>
                        <p className="text-gray-400">
                        Optimize knowledge retention with AI-powered curriculum that adapts to each learner&apos;s pace and understanding.
                        </p>
                        <div className='flex justify-end'>
                            <Image src='/abstract-shape.png' width={180} height={180} alt='shape' />
                        </div>
                    </div>
                    <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-semibold mb-2">Resource <br /> Efficiency</h2>
                        <p className="text-gray-400">
                        Free instructors and students from the constraints of a pre-defined learning path. Our platform personalizes the journey for every learner.
                        </p>
                        <div className='flex justify-end'>
                            <Image src='/abstract-shape.png' width={180} height={180} alt='shape' />
                        </div>
                    </div>
                    <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-semibold mb-2">Learner <br /> Engagement</h2>
                        <p className="text-gray-400">
                        Maintain high levels of motivation through content that aligns with individual preferences and learning styles.
                        </p>
                        <div className='flex justify-end'>
                            <Image src='/abstract-shape.png' width={180} height={180} alt='shape' />
                        </div>
                    </div>
                </div>
                <div className="mt-6 bg-blue-900 p-6 rounded-2xl shadow-lg text-center">
                    <div className='flex justify-center'>
                        <Image src='/idea.png' width={50} height={50} alt='shape' />
                    </div>
                    <div className="text-2xl mt-4">
                        <p>A study by <span className='font-bold'>TheJournals</span> revealed that students who receive</p>
                        <p>personalized learning experience a 50% increase in</p>
                        <p>knowledge retention.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero2