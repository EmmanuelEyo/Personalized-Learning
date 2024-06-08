"use client";
import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from 'next/image';

interface Lecture {
  title: string;
  duration: string;
  progress: number;
  imageUrl: string;
}

interface CourseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  sections: string[];
  lectures: Lecture[];
}

const CourseModal: React.FC<CourseModalProps> = ({ isOpen, onClose, title, sections, lectures }) => {
  const [openSections, setOpenSections] = useState<boolean[]>(Array(sections.length).fill(false));

  const toggleSection = (index: number) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <Transition show={isOpen}>
      <Dialog onClose={onClose} className="fixed inset-0 z-50 overflow-y-auto">
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <div className="min-h-screen px-4 text-center">
          <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <DialogPanel className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
              {title}
            </DialogTitle>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{sections.length} sections • {lectures.length} lectures</p>
            </div>
            {sections.map((section, index) => (
              <div key={index} className="mt-4">
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full text-left font-semibold text-base flex gap-3 items-center ${openSections[index] ? 'text-blue-700' : 'text-gray-800'}`}
                >
                  <span className="">
                    {openSections[index] ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
                  </span>
                  <p className='text-base'>{section}</p>
                </button>
                {openSections[index] && (
                  <div className="mt-2 space-y-2">
                    {lectures.map((lecture, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-16 h-16 flex-shrink-0 relative">
                          <Image
                            className="rounded-xl"
                            src={lecture.imageUrl}
                            alt={lecture.title}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-sm font-medium text-gray-900">{lecture.title}</h5>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{lecture.duration}</span>
                            <span>{lecture.progress}%</span>
                          </div>
                          <div className="relative w-full bg-gray-200 rounded-full h-2">
                            <div className="absolute top-0 left-0 h-2 rounded-full bg-blue-600" style={{ width: `${lecture.progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}

export default CourseModal;




