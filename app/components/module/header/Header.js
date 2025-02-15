/* eslint-disable jsx-a11y/alt-text */
'use client';
import React, { useState, useEffect } from 'react';
import ImageProfile from '../image profile/image';
import User from '../../../../public/assets/auth/profilepng.png';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '../../base/darkmode/darkmodetoggle';
import { useRouter } from 'next/navigation';
import './header.css';
import Image from 'next/image';

const Header = () => {
  const [activePage, setActivePage] = useState('');
  const Router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/')) {
      setActivePage('/');
    } else if (path.includes('/find-recipe')) {
      setActivePage('/find-recipe');
    } else {
      setActivePage('');
    }
  }, [Router]);

  const handleNavigation = (page, message, route) => {
    toast.loading(message);
    setActivePage(route);
    Router.push(route);
  };

  return (
    <header id="header" className="flex flex-row flex-1 px-16 py-10 justify-between font-semibold text-light-purple">
      <div className="flex flex-row gap-10 header-container">
        <ul>
          <li>
          <button 
              onClick={() => handleNavigation('home', 'Please wait....', '/')} 
              className='text-light-purple'
            >
              Home
            </button>
            <hr className={activePage === '/' ? 'active' : 'inactive'} />
          </li>
        </ul>
        <ul>
          <li>
          <button 
              onClick={() => handleNavigation('recipe', 'Please wait....', '/find-recipe')} 
              className='text-light-purple'
            >
              Recipe
            </button>
            <hr className={activePage === '/find-recipe' ? 'active' : 'inactive'} />
          </li>
        </ul>
      </div>
      <div className="flex absolute flex-row right-10 gap-1 LoginGroup">
        <div className="py-1 cursor-pointer">
        <Image src={User} className="w-10 h-10" onClick={() => handleNavigation('login', 'Please Wait....', '/auth/login')} />
        </div>
                <ToastContainer position='bottom-right' />
        <div className='relative py-2 left-10 z-20'>
          <ThemeSwitch/>
        </div>
      </div>
    </header>
  );
}

export default Header;
