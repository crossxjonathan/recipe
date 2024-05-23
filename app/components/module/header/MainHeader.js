"use client";

import React from 'react';
import ImageProfile from '../image profile/image';
import User from '../../../../public/assets/auth/profilepng.png';
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '../../base/darkmode/darkmodetoggle';
import { toast } from 'react-toastify';


const MainHeader = () => {
  const handleHome = () => {
    toast.loading("Please wait....")
    window.location.href = '/dashboard/home'
  }

  const handleAddRecipe = () => {
    toast.loading("Please wait....")
    window.location.href = '/dashboard/add-recipe'
  }

  const handleProfile = () => {
    toast.loading("Please wait....")
    window.location.href = '/dashboard/profile/my-recipe'
  }

  return (
    <header className="flex flex-row flex-1 px-16 py-10 justify-between font-semibold text-light-purple">
      <div className="flex flex-row gap-16">
        <ul>
          <li>
            <button onClick={handleHome} className='text-light-purple'>Home</button>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={handleAddRecipe} className='text-light-purple text-nowrap'>Add Recipe</button>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={handleProfile} className="text-light-purple">Profile</button>
          </li>
        </ul>
      </div>
      <div className="flex absolute flex-row right-16 cursor-pointer z-10">
        <ImageProfile
          img={User}
        />
        <div className='relative py-3 left-10'>
        <ThemeSwitch/>
        </div>
      </div>
    </header>
  )
}

export default MainHeader