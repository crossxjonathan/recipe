"use client";

import React from 'react';
import ImageProfile from '../image profile/image';
import User from '../../../../public/assets/auth/profilepng.png';
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '../../base/darkmode/darkmodetoggle';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';


const MainHeader = () => {
  const Router = useRouter();

  const handleHome = () => {
    toast.loading("Please wait....")
    Router.push ('/dashboard/home')
  }

  const handleAddRecipe = () => {
    toast.loading("Please wait....")
    Router.push('/dashboard/add-recipe')
  }

  const handleProfile = () => {
    toast.loading("Please wait....")
    Router.push('/dashboard/profile/my-recipe')
  }

  const handleSearch = () => {
    toast.loading("Please wait....")
    Router.push('/dashboard/find-recipe')
  }

  return (
    <header className="flex flex-row flex-1 px-10 py-10 justify-between font-semibold text-light-purple">
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
        <ul>
          <li>
            <button onClick={handleSearch} className="text-light-purple">Recipe</button>
          </li>
        </ul>
      </div>
      <div className="flex absolute flex-row right-16 cursor-pointer">
        <div className='relative bottom-2 left-10 z-10'>
        <ImageProfile
          img={User}
        />
        </div>
        <div className='relative py-1 left-10'>
        <ThemeSwitch/>
        </div>
      </div>
    </header>
  )
}

export default MainHeader