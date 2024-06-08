import React from 'react'

interface TimelineProps {
    steps: { title: string, component: React.FC<any> }[]
    currentStep: number
}

const Timeline: React.FC<TimelineProps> = ({ steps, currentStep }) => {
  return (
    <div className='flex justify-between mb-6'>
        {steps.map((step, index) => (
            <div key={index} className='flex-1 text-center'>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${currentStep >= index ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                    {index + 1}
                </div>
                <div className={`text-xs mt-2 ${currentStep >= index ? 'text-green-500' : 'text-gray-600'}`}>
                    {step.title}
                </div>
                {/* {index < steps.length - 1 && (
                    <div className='flex-1 border-t-2 border-gray-300 mt-4'></div>
                )} */}
            </div>
        ))}
    </div>
  )
}

export default Timeline