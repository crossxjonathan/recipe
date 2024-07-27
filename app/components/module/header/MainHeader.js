"use client";

import React, { useState, useEffect } from 'react';
import ImageProfile from '../image profile/image';
import User from '../../../../public/assets/auth/profilepng.png';
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '../../base/darkmode/darkmodetoggle';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import './header.css';

const MainHeader = () => {
  const [activePage, setActivePage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/dashboard/home')) {
      setActivePage('/dashboard/home');
    } else if (path.includes('/dashboard/add-recipe')) {
      setActivePage('/dashboard/add-recipe');
    } else if (path.includes('/dashboard/profile')) {
      setActivePage('/dashboard/profile');
    } else if (path.includes('/dashboard/find-recipe')) {
      setActivePage('/dashboard/find-recipe');
    } else {
      setActivePage('');
    }
  }, [Router]);

  const handleNavigation = (page, message, route) => {
    toast.loading(message);
    setActivePage(route);
    Router.push(route);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="flex flex-row flex-1 px-16 py-10 justify-between font-semibold text-light-purple">
      <div className="flex flex-row gap-16 header-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <button 
                onClick={() => handleNavigation('home', 'Please wait....', '/dashboard/home')} 
                className='text-light-purple'
              >
                Home
              </button>
              <hr className={activePage === '/dashboard/home' ? 'active' : 'inactive'} />
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('add-recipe', 'Please wait....', '/dashboard/add-recipe')} 
                className='text-light-purple text-nowrap'
              >
                Add Recipe
              </button>
              <hr className={activePage === '/dashboard/add-recipe' ? 'active' : 'inactive'} />
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('profile', 'Please wait....', '/dashboard/profile/my-recipe')} 
                className="text-light-purple"
              >
                Profile
              </button>
              <hr className={activePage === '/dashboard/profile' ? 'active' : 'inactive'} />
            </li>
            <li>
              <button 
                onClick={() => handleNavigation('recipe', 'Please wait....', '/dashboard/find-recipe')} 
                className="text-light-purple"
              >
                Recipe
              </button>
              <hr className={activePage === '/dashboard/find-recipe' ? 'active' : 'inactive'} />
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex absolute flex-row right-16 cursor-pointer LoginGroup">
        <div className='relative bottom-2 left-10 z-10'>
          <ImageProfile img={User} />
        </div>
        <div className='relative py-1 left-10'>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
