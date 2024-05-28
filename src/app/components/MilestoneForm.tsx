import { addMilestone, removeMilestone, updateMilestone } from '@/redux/slice';
import { RootState, useAppDispatch } from '@/redux/store';
import React from 'react'
import { useSelector } from 'react-redux';

const MilestoneForm = () => {
    const dispatch = useAppDispatch();
    const milestones = useSelector((state: RootState) => state.app.milestones);
  
    const handleAddMilestone = () => {
      dispatch(addMilestone());
    };
  
    const handleUpdateMilestone = (id: string, name: string, dueDate: string) => {
      dispatch(updateMilestone({ id, name, dueDate }));
    };
  
    const handleRemoveMilestone = (id: string) => {
      dispatch(removeMilestone({ id }));
    };
  return (
    <div className="p-4">
    <button 
      onClick={handleAddMilestone}
      className="mb-4 px-4 py-2 bg-blue-800 text-white rounded"
    >
      Add Milestone
    </button>
    {milestones.map((milestone) => (
      <div key={milestone.id} className="mb-4 p-4 border bg-slate-900 rounded">
        <input
          type="text"
          placeholder="Milestone Name"
          value={milestone.name}
          onChange={(e) => handleUpdateMilestone(milestone.id, e.target.value, milestone.dueDate)}
          className="mr-4 p-2 rounded mb-3 bg-slate-700 focus:outline-none"
        />
        <input
          type="date"
          value={milestone.dueDate}
          onChange={(e) => handleUpdateMilestone(milestone.id, milestone.name, e.target.value)}
          className="mr-4 p-2 rounded bg-slate-700 focus:outline-none"
        />
        <button 
          onClick={() => handleRemoveMilestone(milestone.id)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </div>
    ))}
  </div>
  )
}

export default MilestoneForm