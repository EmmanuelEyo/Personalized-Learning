// src/app/survey/page.tsx
'use client'
import React, { useState } from 'react';
import { Control, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '@/redux/authSlice';
import Timeline from '../components/Timeline';
import { useRouter } from 'next/navigation';

const WelcomeStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div>
    <h2 className="text-2xl mb-4">Welcome to the Survey</h2>
    <p>Please answer the following questions to help us personalize your experience.</p>
    <button type="button" onClick={onNext} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
      Next
    </button>
  </div>
);

const PreferredTopicsStep: React.FC<{ register: any, onNext: () => void, onPrev: () => void }> = ({ register, onNext, onPrev }) => (
  <div>
    <h2 className="text-2xl mb-4">Preferred Topics</h2>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Select your interests:</label>
      {['Web Development', 'Data Science', 'Machine Learning', 'Mobile Development'].map(topic => (
        <div key={topic}>
          <label className="inline-flex items-center">
            <input type="checkbox" {...register('interests')} value={topic} className="form-checkbox" />
            <span className="ml-2">{topic}</span>
          </label>
        </div>
      ))}
    </div>
    <div className="flex justify-between">
      <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
        Back
      </button>
      <button type="button" onClick={onNext} className="bg-blue-500 text-white py-2 px-4 rounded">
        Next
      </button>
    </div>
  </div>
);

const SkillLevelStep: React.FC<{ register: any, control: Control<any>, errors: any, onNext: () => void, onPrev: () => void }> = ({ register, errors, onNext, onPrev }) => (
  <div>
    <h2 className="text-2xl mb-4">Current Skill Level</h2>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Rate your skill level:</label>
      {['Beginner', 'Intermediate', 'Advanced'].map(level => (
        <div key={level}>
          <label className="inline-flex items-center">
            <input type="radio" {...register('skillLevel', { required: true })} value={level} className="form-radio" />
            <span className="ml-2">{level}</span>
          </label>
        </div>
      ))}
      {errors.skillLevel && <span className="text-red-500 text-sm">This field is required</span>}
    </div>
    <div className="flex justify-between">
      <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
        Back
      </button>
      <button type="button" onClick={onNext} className="bg-blue-500 text-white py-2 px-4 rounded">
        Next
      </button>
    </div>
  </div>
);

const LearningGoalsStep: React.FC<{ register: any, onNext: () => void, onPrev: () => void }> = ({ register, onNext, onPrev }) => (
  <div>
    <h2 className="text-2xl mb-4">Learning Goals</h2>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">What are your learning goals?</label>
      <textarea {...register('learningGoals')} className="w-full p-2 border rounded"></textarea>
    </div>
    <div className="flex justify-between">
      <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
        Back
      </button>
      <button type="button" onClick={onNext} className="bg-blue-500 text-white py-2 px-4 rounded">
        Next
      </button>
    </div>
  </div>
);

const LearningMethodsStep: React.FC<{ register: any, control: Control<any>, onNext: () => void, onPrev: () => void }> = ({ register, onNext, onPrev }) => (
  <div>
    <h2 className="text-2xl mb-4">Preferred Learning Methods</h2>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Select your preferred learning methods:</label>
      {['Videos', 'Articles', 'Quizzes'].map(method => (
        <div key={method}>
          <label className="inline-flex items-center">
            <input type="checkbox" {...register('learningMethods')} value={method} className="form-checkbox" />
            <span className="ml-2">{method}</span>
          </label>
        </div>
      ))}
    </div>
    <div className="flex justify-between">
      <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
        Back
      </button>
      <button type="button" onClick={onNext} className="bg-blue-500 text-white py-2 px-4 rounded">
        Next
      </button>
    </div>
  </div>
);

const TimeCommitmentStep: React.FC<{ register: any, control: Control<any>, errors: any, onNext: () => void, onPrev: () => void }> = ({ register, errors, onNext, onPrev }) => (
  <div>
    <h2 className="text-2xl mb-4">Time Commitment</h2>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">How many hours per week can you dedicate to learning?</label>
      <input type="number" {...register('timeCommitment', { required: true })} className="w-full p-2 border rounded" />
      {errors.timeCommitment && <span className="text-red-500 text-sm">This field is required</span>}
    </div>
    <div className="flex justify-between">
      <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
        Back
      </button>
      <button type="button" onClick={onNext} className="bg-blue-500 text-white py-2 px-4 rounded">
        Next
      </button>
    </div>
  </div>
);

const AdditionalInfoStep: React.FC<{ register: any, onPrev: () => void, isLastStep: boolean }> = ({ register, onPrev, isLastStep }) => (
  <div>
    <h2 className="text-2xl mb-4">Additional Information</h2>
    <div className="mb-4">
      <label className="block text-gray-700 mb-2">Any other preferences or information you&apos;d like to share?</label>
      <textarea {...register('additionalInfo')} className="w-full p-2 border rounded"></textarea>
    </div>
    <div className="flex justify-between">
      <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
        Back
      </button>
      <button type="submit" className={`bg-green-500 text-white py-2 px-4 rounded ${isLastStep ? '' : 'hidden'}`}>
        Submit
      </button>
    </div>
  </div>
);

const steps = [
  { title: 'Welcome', component: WelcomeStep },
  { title: 'Preferred Topics', component: PreferredTopicsStep },
  { title: 'Current Skill Level', component: SkillLevelStep },
  { title: 'Learning Goals', component: LearningGoalsStep },
  { title: 'Preferred Learning Methods', component: LearningMethodsStep },
  { title: 'Time Commitment', component: TimeCommitmentStep },
  { title: 'Additional Information', component: AdditionalInfoStep },
];

const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const router = useRouter()

  const onSubmit = (data: any) => {
    dispatch(setUserProfile(data));
    router.push('/personalized-dashboard');
    console.log('Form data submitted:', data);
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const StepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="p-10 bg-slate-800 rounded-xl shadow-md w-[75%] h-[40rem] mx-auto">
        <Timeline steps={steps} currentStep={currentStep} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <StepComponent
            register={register}
            control={control}
            errors={errors}
            onNext={nextStep}
            onPrev={prevStep}
            isLastStep={currentStep === steps.length - 1}
          />
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;

