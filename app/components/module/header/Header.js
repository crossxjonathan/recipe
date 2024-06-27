"use client";

import React from 'react';
import ImageProfile from '../image profile/image';
import User from '../../../../public/assets/auth/profilepng.png';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '../../base/darkmode/darkmodetoggle';
import { useRouter } from 'next/navigation';
import './header.css';

const Header = () => {
  const Router = useRouter();

  const handleLogin = () => {
    toast.loading("Please Wait....")
    Router.push('/auth/login')
  }

  const handleHeader = () => {
    toast.info("Please Login First!!!")
    Router.push('/auth/login')
  }

  const handleHome = () => {
    toast.info("Please wait....")
    Router.push('/')
  }

  const handleSearch = () => {
    toast.loading("Please wait....")
    Router.push('/find-recipe')
  }

  return (
    <header id="header" className="flex flex-row flex-1 px-16 py-10 justify-between font-semibold text-light-purple">
      <div className="flex flex-row gap-16 header-container">
        <ul>
          <li>
            <button onClick={handleHome} className='text-light-purple'>Home</button>
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
        <ul>
          <li>
            <button onClick={handleSearch} className="text-light-purple">Recipe</button>
          </li>
        </ul>
      </div>
      <div className="flex absolute flex-row right-16 gap-2 LoginGroup">
        <ImageProfile
          img={User}
        />
        <button onClick={handleLogin} className="px-16 py-3 absolute text-light-purple">Login</button>
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