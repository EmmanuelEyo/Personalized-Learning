// components/Modal.tsx
import React, { useRef } from 'react';
import { handleUserLogout } from '@/redux/authSlice';
import { useAppDispatch } from '@/redux/store';

interface ModalProps {
  toggleModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ toggleModal }) => {
    const dispatch = useAppDispatch()
    const modalRef = useRef<HTMLDivElement>(null)

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(modalRef.current && modalRef.current === e.target) {
            toggleModal()
        }
    }
  return (
    <div ref={modalRef} onClick={handleOutsideClick} className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-700 rounded-xl overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
        <div className="bg-blue-900 p-4 flex justify-between items-center">
          <h2 className="text-white text-2xl">Confirm Logout</h2>
          <button onClick={toggleModal} className="text-white focus:outline-none">
            &times;
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-6">Are you sure you want to logout?</p>
          <div className="flex justify-end space-x-4">
            <button onClick={toggleModal} className="bg-gray-300 text-gray-700 hover:bg-gray-400 px-4 py-2 rounded transition duration-200">
              Cancel
            </button>
            <button onClick={() => dispatch(handleUserLogout())} className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded transition duration-200">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

