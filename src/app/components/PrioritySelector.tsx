// components/PrioritySelector.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/redux/store';
import { setPriority } from '@/redux/slice';

const PrioritySelector: React.FC = () => {
  const dispatch = useAppDispatch();
  const priority = useSelector((state: RootState) => state.app.level);

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPriority(e.target.value as 'low' | 'medium' | 'high'));
  };

  return (
    <div className='bg-transparent p-6 rounded-md shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>Select Priority Level</h2>
      <div>
        <label className='block mb-4'>
          <input
            type='radio'
            name='priority'
            value='low'
            checked={priority === 'low'}
            onChange={handlePriorityChange}
            className='form-radio text-green-500 h-6 w-6'
          />
          <span className='ml-2 text-green-500 text-lg'>Low</span>
        </label>
        <label className='block mb-4'>
          <input
            type='radio'
            name='priority'
            value='medium'
            checked={priority === 'medium'}
            onChange={handlePriorityChange}
            className='form-radio text-yellow-500 h-6 w-6'
          />
          <span className='ml-2 text-yellow-500 text-lg'>Medium</span>
        </label>
        <label className='block mb-4'>
          <input
            type='radio'
            name='priority'
            value='high'
            checked={priority === 'high'}
            onChange={handlePriorityChange}
            className='form-radio text-red-500 h-6 w-6'
          />
          <span className='ml-2 text-red-500 text-lg'>High</span>
        </label>
      </div>
      <p className='text-gray-200 mt-4'>Selected Priority: <span className={`text-${priority === 'low' ? 'green' : priority === 'medium' ? 'yellow' : 'red'}-500 text-lg`}>{priority}</span></p>
    </div>
  );
};

export default PrioritySelector;

