"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';

const ImageProfile = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    toast.success("Good Bye....")
    window.location.href = '/'
  }

  return (
    <div className='profile dropdown'>
      <div tabIndex={0} role='button' className='cursor-pointer' onClick={toggleDropdown}>
        <Image
          src={img}
          alt='Profile image'
          className="rounded-full"
          width={36}
          height={36}
        />
        {isOpen && (
          <ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li><Link to="profile" smooth={true} duration={500}>Profile</Link></li>
          <li><Link to="menu" smooth={true} duration={500}>Menu</Link></li>
          <li><Link to="logout" onClick={handleLogout} smooth={true} duration={500}>Log out</Link></li>
        </ul>
        )}
      </div>
    </div>
  );
}

export default ImageProfile;
