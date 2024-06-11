import { setUserProfile } from '@/redux/authSlice'
import React, { useState } from 'react'
import { Control } from 'react-hook-form'
import { useDispatch } from 'react-redux'

const LearningGoalsStep: React.FC<{ register: any, control: Control<any>, onNext: () => void, onPrev: () => void }> =({ register, onNext, onPrev }) => {
    const [goal, setGoal] = useState('')
    const [goals, setGoals] = useState<string[]>([])
    const dispatch = useDispatch()

    const handleInputChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setGoal(e.target.value)
    }

    const handleKeyPress = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter' && goal.trim()) {
            e.preventDefault()
            setGoals([...goals, goal.trim()])
            setGoal('')
        }
    }

    const handleSubmit = () => {
        dispatch(setUserProfile({ learningGoals: goals }))
        onNext()
    }

  return (
    <div className='max-w-lg mx-auto p-6'>
        <h2 className='text-2xl font-semibold text-center mb-6'>Learning Goals</h2>
        <div className='mb-6'>
            <label className='block text-gray-200 font-medium mb-2'>What are your learning goals?</label>
            <textarea onKeyDown={handleKeyPress} value={goal} onChange={handleInputChange} placeholder='Type your goals...' className='w-full p-2 border rounded outline-none text-black'></textarea>
        </div>
        <div className='mb-6'>
            {goals.map((g, index) => (
                <div key={index} className='bg-blue-600 text-blue-800 text-sm px-3 py-2 rounded-full mb-2'>
                    {g}
                </div>
            ))}
        </div>
        <div className="flex justify-between mt-6">
            <button
                type="button"
                onClick={onPrev}
                className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
                Back
            </button>
            <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
                Next
            </button>
        </div>
    </div>
  )
}

export default LearningGoalsStep