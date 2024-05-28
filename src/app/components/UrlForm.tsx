import React, { useState } from 'react'
import { useAppDispatch } from '@/redux/store'
import { addUrl, uploadFile } from '@/redux/slice'
import Image from 'next/image'

const UrlForm = () => {
    const dispatch = useAppDispatch()
    const [url, setUrl] = useState('')
    const [file, setFile] = useState<File | null>(null)


    const handleAddUrl = () => {
        if (url) {
          dispatch(addUrl(url));
          setUrl('');
        }
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            dispatch(uploadFile(selectedFile));
        }
    };
        
    const triggerFileInput = () => {
        document.getElementById('fileInput')?.click();
    };

  return (
    <div className="max-w-lg mx-auto p-4">
        <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
            <input
                type="text"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="mt-1 block w-full p-2 rounded-xl shadow-sm focus:outline-none bg-slate-700 sm:text-sm"
            />
            <button
                onClick={handleAddUrl}
                className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Add URL
            </button>
        </div>
        <div className="mb-4">
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload File</label>
            <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                className="hidden"
            />
            <button
                type="button"
                onClick={triggerFileInput}
                className="mt-2 inline-flex items-center px-5 py-3 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
            </button>
            {file && (
                <div className="flex items-center w-[110%] mt-4 p-3 bg-slate-700 rounded-lg">
                    <div className="flex-1">
                        <div className="flex items-center space-x-3">
                            <Image
                            width={20}
                            height={20}
                                src={URL.createObjectURL(file)}
                                alt="preview"
                                className="w-16 h-16 object-cover rounded-xl"
                            />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                                <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setFile(null)}
                        className="mt-6 -ml-6 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Remove
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}

export default UrlForm