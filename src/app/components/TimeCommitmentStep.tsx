import React, { useEffect, useState } from 'react'
import { Control } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { setUserProfile } from '@/redux/authSlice'

const TimeCommitmentStep: React.FC<{ register: any, control: Control<any>, errors: any, onNext: () => void, onPrev: () => void }> = ({ register, errors, onNext, onPrev }) => {
    const dispatch = useDispatch();
    const timeCommitment = useSelector((state: RootState) => state.auth.userProfile?.timeCommitment || 0);
    const [hours, setHours] = useState(timeCommitment);

    useEffect(() => {
        setHours(timeCommitment);
    }, [timeCommitment]);

    const handleTimeCommitmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setHours(value);
        dispatch(setUserProfile({ timeCommitment: value }));
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Time Commitment</h2>
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">How many hours per week can you dedicate to learning?</label>
                <input
                    type="number"
                    {...register('timeCommitment', { required: true })}
                    value={hours}
                    onChange={handleTimeCommitmentChange}
                    className={`w-full p-3 border rounded-lg outline-none text-black ${errors.timeCommitment ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter hours per week"
                    min="1"
                    max="168"
                />
                {errors.timeCommitment && <span className="text-red-500 text-sm mt-2">This field is required</span>}
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
    );
};


export default TimeCommitmentStep

