import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='flex justify-between p-14'>
        <div>
            <h1 className='text-3xl'>Learn.ai</h1>
        </div>
        <div className='flex space-x-3'>
            <FaFacebook size={20} />
            <FaXTwitter size={20}  />
            <FaInstagram size={20} />
        </div>
    </div>
  )
}

export default Footer