import { setUserProfile } from '@/redux/authSlice'
import { RootState, useAppDispatch } from '@/redux/store'
import React, { useEffect, useState } from 'react'
import { Control } from 'react-hook-form'
import { useSelector } from 'react-redux'

const SkillLevelStep: React.FC<{ register: any, control: Control<any>, errors: any, onNext: () => void, onPrev: () => void }> = ({ register, errors, onNext, onPrev }) => {
    const dispatch = useAppDispatch()
    const skillLevel = useSelector((state: RootState) => state.auth.userProfile?.skillLevel)
    const [selectedSkillLevel, setSelectedSkillLevel] = useState(skillLevel || '')

    useEffect(() => {
        setSelectedSkillLevel(skillLevel || '')
    }, [skillLevel])
    
    const handleSkillChange = (level: string) => {
        setSelectedSkillLevel(level)
        dispatch(setUserProfile({ skillLevel: level }))
    }
    
    const getProgress = () => {
        switch (selectedSkillLevel) {
          case 'Beginner':
            return 33
          case 'Intermediate':
            return 66
          case 'Advanced':
            return 100
          default:
            return 0
        }
    }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Current Skill Level</h2>
      <div className="mb-6">
        <label className="block text-gray-200 font-medium mb-2">Rate your skill level:</label>
        {['Beginner', 'Intermediate', 'Advanced'].map(level => (
          <div key={level} className="mb-2">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="radio"
                {...register('skillLevel', { required: true })}
                value={level}
                className="form-radio h-5 w-5 text-blue-600"
                checked={selectedSkillLevel === level}
                onChange={() => handleSkillChange(level)}
              />
              <span className="ml-3 text-gray-900 text-lg">{level}</span>
            </label>
          </div>
        ))}
        {errors.skillLevel && <span className="text-red-500 text-sm mt-1">This field is required</span>}
      </div>
      <div className="mb-6">
        <div className="h-2 w-full bg-gray-300 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>
        <div className="text-center mt-2">
          {selectedSkillLevel ? (
            <span className="text-gray-200">{selectedSkillLevel}</span>
          ) : (
            <span className="text-gray-200">Select your skill level</span>
          )}
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={onPrev}
          className="bg-gray-500 hover:bg-g ray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default SkillLevelStep