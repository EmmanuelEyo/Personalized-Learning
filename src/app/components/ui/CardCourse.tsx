"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import CourseModal from './CourseModal';

interface CardProps {
  title: string;
  author: string;
  students: number;
  duration: string;
  imageUrl: string;
  sections: string[];
  lectures: Lecture[];
}

interface Lecture {
  title: string;
  duration: string;
  progress: number;
  imageUrl: string;
}

const CardCourse: React.FC<CardProps> = ({ title, author, students, duration, imageUrl, sections, lectures }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="max-w-sm border border-slate-600 rounded-xl overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image className="w-full max-h-56" src={imageUrl} alt={title} width={400} height={300} />
        <div className="px-6 py-4">
          <div className="font-semibold text-lg mb-2">{title}</div>
          <p className="text-gray-600 text-base">{author}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center text-gray-700">
            <svg className="h-6 w-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 12a1 1 0 00.883.993L3 13h14a1 1 0 100-2H3a1 1 0 00-1 1zm2-3h12a1 1 0 00.117-1.993L16 7H4a1 1 0 00-.117 1.993L4 9zm2-3h8a1 1 0 00.117-1.993L14 4H6a1 1 0 00-.117 1.993L6 6z"/>
            </svg>
            {students} Students
          </div>
          <div className="flex items-center text-gray-700">
            <svg className="h-6 w-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 10V5a1 1 0 012 0v5h2a1 1 0 110 2h-4a1 1 0 01-1-1z"/>
            </svg>
            {duration}
          </div>
        </div>
      </div>
      
      <CourseModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        sections={sections}
        lectures={lectures}
      />
    </>
  );
}

export default CardCourse;

