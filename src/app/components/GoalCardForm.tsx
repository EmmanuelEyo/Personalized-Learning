import React, { ChangeEvent, FC, useState, useTransition } from 'react';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import DatePicker from './DatePicker';
import PrioritySelector from './PrioritySelector';
import MilestoneForm from './MilestoneForm';
import UrlForm from './UrlForm';
import NotificationSettings from './NotificationSettings';
import { account, databases } from '@/appwriteConfig';
import { ID } from 'appwrite'
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/redux/store';
import { useRouter } from 'next/navigation';

const GoalCardForm = () => {
    const [step, setStep] = useState(1);
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<string>('Description')
    const [description, setDescription] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [comment, setComment] = useState<string>('')
    const [activity, setActivity] = useState<string>('')
    const [category, setCategory] = useState('')
    const [customCategory, setCustomCategory] = useState('')

    const priority = useSelector((state: RootState) => state.app.level);
    const milestones = useSelector((state: RootState) => state.app.milestones);
    const url = useSelector((state: RootState) => state.app.urls);
    const notifications = useSelector((state: RootState) => state.app.notifications);
    const selectedDate = useSelector((state: RootState) => state.app.selectedDate);
    const router = useRouter()


    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = e.target.value
        setCategory(selectedCategory)
    }

    const handleCustomCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomCategory(e.target.value)
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value)
    }

    const handleActivityChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setActivity(e.target.value)
    }

    const nextStep = () => {
        startTransition(() => setStep(prevStep => prevStep + 1));
    };
    
    const prevStep = () => {
        startTransition(() => setStep(prevStep => prevStep - 1));
    };

    const closeModal = () => {
        setIsOpen(false)
        setStep(1)
    }

    const handleSubmit = async () => {
        const formattedUrls = Array.isArray(url) ? url.join(',') : url;
    
        const goalData = {
            title,
            description,
            category: category === 'custom' ? customCategory : category,
            selectedDate,
            comment,
            activity,
            priority,
            url: formattedUrls,
        };

        
    
        try {
            const user = await account.get();
            if (!user.$id) {
                console.error('User is not authenticated');
                return;
            }
    
            if (typeof goalData.title !== 'string' || goalData.title.length > 255) {
                throw new Error('Title must be a string with a maximum length of 255 characters');
            }
            if (typeof goalData.description !== 'string' || goalData.description.length > 1000) {
                throw new Error('Description must be a string with a maximum length of 1000 characters');
            }
            if (!["Personal Development", "Career", "Health", "Education", "custom"].includes(goalData.category)) {
                throw new Error('Invalid category');
            }
            if (typeof goalData.selectedDate !== 'string') {
                throw new Error('Selected Date must be a valid datetime string');
            }
            if (goalData.comment && (typeof goalData.comment !== 'string' || goalData.comment.length > 500)) {
                throw new Error('Comment must be a string with a maximum length of 500 characters');
            }
            if (goalData.activity && (typeof goalData.activity !== 'string' || goalData.activity.length > 500)) {
                throw new Error('Activity must be a string with a maximum length of 500 characters');
            }
            if (!["low", "medium", "high"].includes(goalData.priority)) {
                throw new Error('Invalid priority');
            }
            if (goalData.url && (typeof goalData.url !== 'string' || goalData.url.length > 3000)) {
                throw new Error('URL must be a string with a maximum length of 3000 characters');
            }
            
            console.log('Final goalData:', goalData);
            await databases.createDocument('6657c6fd00077e8f549f', '6657c70a0018f5aebbe3', ID.unique(), goalData);
            console.log('Goal saved successfully');
        } catch (error) {
            console.error('Error saving goal:', error);
        }
    
        closeModal();
    };
    
    
    
    

    const renderContent = () => {
        switch (activeTab) {
            case 'Description':
                return(
                    <textarea onInput={handleDescriptionChange} value={description} placeholder="Design the home screen UI layout" suppressContentEditableWarning={true} className='p-4 outline-none text-gray-300 bg-gray-800 rounded-xl w-[110%] h-28' />
                )
            case 'Comments':
                return <textarea onInput={handleCommentChange} value={comment} placeholder="Comments Are Optional..." suppressContentEditableWarning={true} className='p-4 outline-none text-gray-300 bg-gray-800 rounded-xl w-[110%] h-28' />
            case 'Activities':
                return <textarea onInput={handleActivityChange} value={activity} placeholder="Activities are also Optional..." suppressContentEditableWarning={true} className='p-4 outline-none text-gray-300 bg-gray-800 rounded-xl w-[110%] h-28' />
            default:
                return null
        }
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className='z-40'>
                <div className="mt-10 z-40">
                    <button className="bg-purple-600 rounded-xl px-6 py-4 text-xl text-white cursor-pointer hover:bg-purple-700">Create Goal</button>
                </div>
            </SheetTrigger>
            <SheetContent className="max-w-lg p-6">
                <SheetHeader>
                    <SheetTitle>{step === 1 ? "Step 1: Goal Details" : step === 2 ? "Step 2: Goal Category" :  step === 3 ? 'Step 3: Your Milestone' : 'Step 4: Add Resources'}</SheetTitle>
                    <SheetDescription>
                        {step === 1 ? "Provide the basic details of your goal." : step === 2 ? "Provide the catogory your goal fall under." : step === 3 ? 'Review and confirm your goal.' : 'Add URLs and upload files related to your goal.'}
                    </SheetDescription>
                </SheetHeader>
                <TransitionGroup>
                    <CSSTransition
                        key={step}
                        timeout={300}
                        classNames="fade"
                    >
                        <div>
                            {step === 1 && (
                                <div className="mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="goalTitle">
                                        Goal Title
                                    </label>
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={handleTitleChange}
                                        id="goalTitle"
                                        name="goalTitle"
                                        className="w-full h-10 px-2 outline-none text-gray-300 bg-gray-800 rounded-xl"
                                    />
                                    <div className='flex'>
                                        <div className='flex flex-col mt-10'>
                                            <div className='flex'>
                                                <button
                                                    className={`py-2 px-4 text-sm font-medium border-b-2 border-gray-700 ${
                                                        activeTab === 'Description' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'
                                                    }`}
                                                    onClick={() => setActiveTab('Description')}
                                                    >
                                                    Description
                                                </button>
                                                <button
                                                    className={`py-2 px-4 text-sm font-medium border-b-2 border-gray-700 ${
                                                        activeTab === 'Comments' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'
                                                    }`}
                                                    onClick={() => setActiveTab('Comments')}
                                                    >
                                                    Comments
                                                </button>
                                                <button
                                                    className={`py-2 px-4 text-sm font-medium border-b-2 border-gray-700 ${
                                                        activeTab === 'Activities' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-400'
                                                    }`}
                                                    onClick={() => setActiveTab('Activities')}
                                                    >
                                                    Activities
                                                </button>
                                            </div>
                                            <div className='mt-4'>
                                                {renderContent()}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mt-8 text-sm font-bold mb-2" htmlFor="goalTitle">
                                            Choose your Completion Date
                                        </label>
                                        <DatePicker />
                                    </div>
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                                            onClick={nextStep}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="mt-4">
                                    <div className='bg-transparent p-6 rounded-md shadow-md'>
                                        <h2 className='text-2xl font-bold mb-4'>Select Goal Category</h2>

                                        <label className='text-gray-200 block mb-2'>Category</label>
                                        <select value={category} onChange={handleCategoryChange} className='border border-gray-500 p-3 mb-4 rounded bg-gray-800 w-full'>
                                            <option value="">Select Category</option>
                                            <option value="Personal Development">Personal Development</option>
                                            <option value="Career">Career</option>
                                            <option value="Health">Health</option>
                                            <option value="Education">Education</option>
                                            <option value="custom">Custom</option>
                                        </select>
                                        {category === 'custom' && (
                                            <input type='text' value={customCategory} onChange={handleCustomCategoryChange} className='border border-gray-500 p-2 mb-4 rounded w-full bg-gray-800' placeholder='Enter custom Category' />
                                        )}
                                        <p className='text-gray-200 mt-2'>Selected Category: {category === 'custom' ? customCategory : category}</p>
                                    </div>
                                    <PrioritySelector />
                                    <div className="mt-4 flex justify-between">
                                        <button
                                            type="button"
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                                            onClick={prevStep}
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                                            onClick={nextStep}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                            {step === 3 && (
                                <div className="mt-4">
                                    <MilestoneForm />
                                    <div className="mt-4 flex justify-between">
                                        <button
                                            type="button"
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                                            onClick={prevStep}
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                                            onClick={nextStep}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                            {step === 4 && (
                                <div className='mt-5'>
                                    <UrlForm />
                                    <NotificationSettings />
                                    <div className="mt-4 flex justify-between">
                                        <button
                                            type="button"
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                                            onClick={prevStep}
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                                            onClick={nextStep}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}
                            {step === 5 && (
                                   <div className="mt-4 flex justify-between">
                                        <button
                                            type="button"
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                                            onClick={prevStep}
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                                            onClick={handleSubmit}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                            )}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </SheetContent>
        </Sheet>
    );
}

export default GoalCardForm;

