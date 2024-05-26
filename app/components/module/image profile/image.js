"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';

const ImageProfile = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    toast.success("Good Bye....")
    window.location.href = '/'
  }

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button 
          type='button'
          className='inline-flex justify-center w-full rounded-full px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none'
          onClick={toggleDropdown}
        >
          <Image
            src={img}
            alt='Profile image'
            className="rounded-full"
            width={36}
            height={36}
          />
        </button>
      </div>

      {isOpen && (
        <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            <button 
              onClick={handleLogout}
              className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-light-yellow hover:text-white'
              role='menuitem'
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageProfile;
