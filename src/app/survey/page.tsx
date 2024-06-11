// src/app/survey/page.tsx
'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '@/redux/authSlice';
import Timeline from '../components/Timeline';
import { useRouter } from 'next/navigation';
import PreferredTopicsStep from '../components/PreferredTopicsStep';
import SkillLevelStep from '../components/SkillLevelStep';
import LearningGoalsStep from '../components/LearningGoalsStep';
import LearningMethodsStep from '../components/LearningMethodsStep';
import TimeCommitmentStep from '../components/TimeCommitmentStep';
import { databases } from '@/appwriteConfig';
import { ID } from 'appwrite';

const submitSurvey = async (data: any) => {
  try{
    const response = await databases.createDocument(
      '6657c6fd00077e8f549f',
      '66678220003bb4870355',
      ID.unique(),
      data
    )
    console.log('Survey submitted successfully:', response)
  } catch(err) {
    console.error('Error submitting survey:', err)
  }
}

const WelcomeStep: React.FC<{ onNext: () => void }> = ({ onNext }) => (
  <div className='flex flex-col items-center justify-center'>
    <h2 className="text-6xl text-blue-500 text-center mb-4">Welcome to the Survey</h2>
    <p className='text-center text-4xl'>Please answer the following questions to help us personalize your experience.</p>
    <div className="text-center mt-10">
      <button type="button" onClick={onNext} className="mt-4 mx-auto bg-blue-500 text-white py-4 px-4 rounded">
        Take One minute Survey
      </button>
    </div>
  </div>
);

const AdditionalInfoStep: React.FC<{ register: any, onPrev: () => void, isLastStep: boolean }> = ({ register, onPrev, isLastStep }) => (
  <div>
    <h2 className="text-2xl mb-4">Additional Information</h2>
    <div className="mb-4">
      <label className="block text-gray-200 mb-2">Any other preferences or information you&apos;d like to share?</label>
      <textarea {...register('additionalInfo')} className="w-full outline-none text-black p-2 border rounded"></textarea>
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

  const onSubmit = async (data: any) => {
    if(data.timeCommitment) {
      data.timeCommitment = parseInt(data.timeCommitment, 10)
    }
    dispatch(setUserProfile(data));
    await submitSurvey(data)
    router.push('/personalized-dashboard');
    console.log('Form data submitted:', data);
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const StepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="p-10 bg-gradient-to-r from-purple-700 via-blue-800 to-pink-900 rounded-xl shadow-md w-[75%] h-[40rem] mx-auto">
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

