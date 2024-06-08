import Image from 'next/image';
import React from 'react';

interface CardProps {
  date: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

const UpcomingWebinar: React.FC<CardProps> = ({ date, title, description, buttonText, imageSrc }) => {
  return (
    <div className="flex gap-5 mx-10">
        <div className="max-w-3xl mb-10 flex bg-white rounded-xl overflow-hidden justify-between shadow-lg">
            <div>
              <div className="px-6 py-4">
                <div className="text-sm mb-2 font-semibold text-slate-700">{date}</div>
                <div className="font-bold text-xl mb-2 text-slate-700">{title}</div>
                <p className="text-slate-700 text-sm">{description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-20 rounded">
                  {buttonText}
                </button>
              </div>
            </div>
            <div className='flex items-center mr-10'>
                <Image className="max-w-[18rem] rounded-xl object-cover" width={1000} height={1000} src={imageSrc} alt="Event" />
            </div>
        </div>
        <div className="max-w-3xl mb-10 flex bg-white rounded-xl overflow-hidden justify-between shadow-lg">
            <div>
              <div className="px-6 py-4">
                <div className="text-sm mb-2 font-semibold text-slate-700">{date}</div>
                <div className="font-bold text-xl mb-2 text-slate-700">{title}</div>
                <p className="text-slate-700 text-sm">{description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-20 rounded">
                  {buttonText}
                </button>
              </div>
            </div>
            <div className='flex items-center mr-10'>
                <Image className="max-w-[18rem] rounded-xl object-cover" width={1000} height={1000} src={imageSrc} alt="Event" />
            </div>
        </div>
    </div>
  );
}

export default UpcomingWebinar;
