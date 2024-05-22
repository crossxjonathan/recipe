"use client";

import React from 'react';
import ImageProfile from '../image profile/image';
import User from '../../../../public/assets/landing page/User Panel.svg';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '../../base/darkmode/darkmodetoggle';


const MainHeader = () => {
  const handleLogout = () => {
    toast.success("Good Bye....")
    window.location.href = '/'
  }

  return (
    <header className="flex flex-row flex-1 px-16 py-10 justify-between font-semibold">
      <div className="flex flex-row gap-16">
        <ul>
          <li>
            <button className='text-black'>Home</button>
          </li>
        </ul>
        <ul>
          <li>
            <button className='text-black text-nowrap'>Add Recipe</button>
          </li>
        </ul>
        <ul>
          <li>
            <button className="text-black">Profile</button>
          </li>
        </ul>
      </div>
      <div className="flex absolute flex-row right-16">
        <ImageProfile
          img={User}
        />
        <button onClick={handleLogout} className="px-10 absolute text-white text-nowrap">Log out</button>
        <ToastContainer
          position='bottom-right'
        />
        <div className='relative left-10'>
        <ThemeSwitch/>
        </div>
      </div>
    </header>
  )
}

export default MainHeader