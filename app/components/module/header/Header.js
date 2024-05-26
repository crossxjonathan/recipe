"use client";

import React from 'react';
import ImageProfile from '../image profile/image';
import User from '../../../../public/assets/auth/profilepng.png';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '../../base/darkmode/darkmodetoggle';


const Header = () => {
  const handleLogin = () => {
    toast.loading("Please Wait....")
    window.location.href = '/auth/login'
  }

  const handleHeader = () => {
    toast.info("Please Login First!!!")
    window.location.href = '/auth/login'
  }

  return (
    <header className="flex flex-row flex-1 px-16 py-10 justify-between font-semibold text-light-purple">
      <div className="flex flex-row gap-16">
        <ul>
          <li>
            <button onClick={handleHeader} className='text-light-purple'>Home</button>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={handleHeader} className='text-light-purple text-nowrap'>Add Recipe</button>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={handleHeader} className="text-light-purple">Profile</button>
          </li>
        </ul>
      </div>
      <div className="flex absolute flex-row right-16 gap-2">
        <ImageProfile
          img={User}
        />
        <button onClick={handleLogin} className="px-16 py-3 absolute text-white">Login</button>
        <ToastContainer
          position='bottom-right'
        />
        <div className='relative py-2 left-14'>
        <ThemeSwitch/>
        </div>
      </div>
    </header>
  )
}

export default Header