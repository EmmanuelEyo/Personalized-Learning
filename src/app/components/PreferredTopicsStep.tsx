import React, { useEffect, useState } from 'react'
import { fetchSkills, setUserProfile } from '@/redux/authSlice'
import { RootState, useAppDispatch } from '@/redux/store'
import { useSelector } from 'react-redux'


const PreferredTopicsStep: React.FC<{ register: any, onNext: () => void, onPrev: () => void }> = ({ register, onNext, onPrev }) => {
    const dispatch = useAppDispatch()
    const skills = useSelector((state: RootState) => state.auth.skills)
    const [searchSkills, setSearchSkills] = useState('')
    const [selectedSkills, setSelectedSkills] = useState<string[]>([])
    // const { register, control, watch, formState: { errors } } = useForm();

    useEffect(() => {
        dispatch(fetchSkills(searchSkills))
    }, [dispatch, searchSkills])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchSkills(e.target.value)
    }

    const handleSelect = (skill: string) => {
        if(selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(selectedSkills => selectedSkills !== skill))
        } else {
            setSelectedSkills([...selectedSkills, skill])
        }
    }

    const handleSubmit = () => {
        dispatch(setUserProfile({ interests: selectedSkills }))
        onNext()
    }


    return (
        <div>
            <h2 className='text-2xl mb-4'>Preferred Topics</h2>
            <div className='mb-4'>
                <label className='block text-gray-700 mb-2'>Select your interests</label>
                <input 
                    type='text' 
                    placeholder='Type to search...' 
                    value={searchSkills} 
                    onChange={handleSearch} 
                    className='border outline-none rounded w-full py-2 px-3 text-gray-700'
                />
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {skills.map(skill => (
                        <div key={skill} onClick={() => handleSelect(skill)} className='cursor-pointer mt-2' style={{ width: '20%', padding: '0.3rem' }}>
                            <div className="bg-white h-10 shadow-md rounded" style={{ padding: '1rem' }}>
                                <label className='flex justify-center items-center'>
                                    <input type='checkbox' {...register('interests')} value={skill} checked={selectedSkills.includes(skill)} readOnly className='form-checkbox custom-checkbox' />
                                    <span className='ml-2 text-xs text-slate-900'>{skill}</span>
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-4'>
                    <h3 className='text-xl mb-2'>Selected Interests:</h3>
                    <div>
                        {selectedSkills.map(skill => (
                            <span key={skill} className='inline-block bg-blue-200 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2'>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <button type="button" onClick={onPrev} className="bg-gray-500 text-white py-2 px-4 rounded">
                    Back
                </button>
                <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded">
                    Next
                </button>
            </div>
        </div>
    )
}

export default PreferredTopicsStep