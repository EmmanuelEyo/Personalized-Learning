import React, { useEffect, useState } from 'react'
import { Control } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/redux/store'
import { setUserProfile } from '@/redux/authSlice'

const LearningMethodsStep: React.FC<{ register: any, control: Control<any>, onNext: () => void, onPrev: () => void }> = ({ register, onNext, onPrev }) => {
    const dispatch = useDispatch()
    const learningMethods = useSelector((state: RootState) => state.auth.userProfile?.learningMethods || [])
    const [selectedMethods, setSelectedMethods] = useState<string[]>(learningMethods)

    useEffect(() => {
        setSelectedMethods(learningMethods)
    }, [learningMethods])

    const handleMethodChange = (method: string) => {
        const updatedMethods = selectedMethods.includes(method)
            ? selectedMethods.filter(item => item !== method)
            : [...selectedMethods, method]
        setSelectedMethods(updatedMethods)
        dispatch(setUserProfile({ learningMethods: updatedMethods }))
    }

    return (
        <div className="max-w-lg mx-auto p-6">
            <h2 className="text-2xl font-semibold text-center mb-6">Preferred Learning Methods</h2>
            <div className="mb-6">
                <label className="block text-gray-200 font-medium mb-2">Select your preferred learning methods:</label>
                {['Videos', 'Articles', 'Quizzes'].map(method => (
                    <div key={method} className="mb-2">
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                {...register('learningMethods')}
                                value={method}
                                className="form-checkbox h-5 w-5 text-blue-600"
                                checked={selectedMethods.includes(method)}
                                onChange={() => handleMethodChange(method)}
                            />
                            <span className="ml-3 text-gray-900 text-lg">{method}</span>
                        </label>
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
                    onClick={onNext}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default LearningMethodsStep
