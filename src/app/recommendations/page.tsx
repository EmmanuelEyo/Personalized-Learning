import React from 'react';
import SideBar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CardCourse from '../components/ui/CardCourse';
import { CardHoverEffectDemo } from '../components/CardHoverEffectDemo';
import UpcomingWebinar from '../components/UpcomingWebinar';
import TakeTestQuiz from '../components/TakeTestQuiz';

const Page = () => {
  const sections = ["Basics of Blender 3D"];
  const lectures = [
    { title: "Absolute Basics", duration: "49:28", progress: 100, imageUrl: "/image_one.jpg" },
    { title: "Object Editing", duration: "28:47", progress: 72, imageUrl: "/image_two.jpg" },
    { title: "Modifiers", duration: "29:32", progress: 16, imageUrl: "/image_three.jpg" }
  ];


  return (
    <div className="flex bg-slate-950 min-h-screen">
      <SideBar />
      <div className="flex-1">
        <Navbar />
        <div className='text-center mb-10 space-y-5'>
          <h1 className='text-7xl font-bold text-white mt-20'>Inspiration Starts Here</h1>
          <p className='text-lg mx-auto text-gray-400 max-w-3xl'>Here are three recommended classes we think you&apos;d love. We will continue to surface more recommendations as your creative journey continues.</p>
        </div>
        <div className="flex justify-center">
          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <CardCourse
              title="Find Your Style: Five Exercises to Unlock Your Creative Identity"
              author="John Wayne"
              students={1822}
              duration="1h 10m"
              imageUrl="/image_one.jpg"
              sections={sections}
              lectures={lectures}
            />
            <CardCourse
              title="Art Journaling for Self-Care: 3 Exercises for Reflection and Growth"
              author="John Wayne"
              students={1822}
              duration="1h 10m"
              imageUrl="/image_two.jpg"
              sections={sections}
              lectures={lectures}
            />
            <CardCourse
              title="Start Drawing: 3 Fun, Freeing Exercises to Spark Your Creativity"
              author="John Wayne"
              students={1822}
              duration="1h 10m"
              imageUrl="/image_three.webp"
              sections={sections}
              lectures={lectures}
            />
          </main>
        </div>
        <div className='mt-28 pb-10 bg-slate-900 w-full'>
          <div className="container mx-auto">
            <div className='flex justify-between items-center px-36'>
              <div className='space-y-3 mt-14'>
                <h1 className='text-3xl font-semibold'>Recommended Learning Paths</h1>
                <p className='text-base text-gray-400'>Reach your learning goals with hand-picked, sequential classes</p>
              </div>
              <div className='mt-14'>
                <button className='bg-zinc-900 py-3 px-6 rounded-full'>All Learning Paths</button>
              </div>
            </div>
            <CardHoverEffectDemo />
          </div>
        </div>
        <div className='mt-28'>
          <div className='mx-10 mb-12'>
            <h1 className='text-5xl text-white'>Upcoming Webinar</h1>
          </div>
          <UpcomingWebinar
            date="4pm 8th July 2022"
            title="Team Talk: What is the Metaverse?"
            description="Whether you work for a global brand or an SME, ensuring your business can stand out..."
            buttonText="Register for Free"
            imageSrc="/images/Virtual-Reality-Headset.png"
          />
        </div>
        <TakeTestQuiz />
      </div>
    </div>
  );
}

export default Page;




