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

const GoalCardForm = () => {
    const [step, setStep] = useState(1);
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<string>('Description')
    const [description, setDescription] = useState<string>('Design the home screen UI layout')
    const [category, setCategory] = useState('')
    const [customCategory, setCustomCategory] = useState('')

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = e.target.value
        setCategory(selectedCategory)
    }

    const handleCustomCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomCategory(e.target.value)
    }

    const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.innerText)
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

    const handleSumbit = () => {
        closeModal()
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'Description':
                return(
                    <textarea onInput={handleDescriptionChange} placeholder={description} suppressContentEditableWarning={true} className='p-4 outline-none text-gray-300 bg-gray-800 rounded-xl w-[110%] h-28' />
                )
            case 'Comments':
                return <textarea onInput={handleDescriptionChange} placeholder='Comments Are Optional' suppressContentEditableWarning={true} className='p-4 outline-none text-gray-300 bg-gray-800 rounded-xl w-[110%] h-28' />
            case 'Activities':
                return <textarea onInput={handleDescriptionChange} placeholder='Enter your Activities right here' suppressContentEditableWarning={true} className='p-4 outline-none text-gray-300 bg-gray-800 rounded-xl w-[110%] h-28' />
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
                    <SheetTitle>{step === 1 ? "Step 1: Goal Details" : step === 2 ? "Step 2: Goal Category" : "Step 3: Confirmation"}</SheetTitle>
                    <SheetDescription>
                        {step === 1 ? "Provide the basic details of your goal." : step === 2 ? "Provide the catogory your goal fall under." : "Review and confirm your goal."}
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
                                    <h2 className="text-lg font-bold mb-2">Confirm Your Goal</h2>
                                    <p className="text-gray-700 mb-4">Review the details of your goal and confirm to save it.</p>
                                    {/* Add more review details here as needed */}
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
                                            onClick={handleSumbit}
                                        >
                                            Confirm
                                        </button>
                                    </div>
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

