"use client";
import React from 'react';
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import Textfield from './components/base/textfield/textfield';
import Button from './components/base/button/button';
import Header from './components/module/header/Header';
import Footer from './components/module/footer/footer';
import '../app/(page)/Layout.css';
import Image from 'next/image';

import MainImage from '../public/assets/landing page/landingpage food.svg';
import Lettuce from '../public/assets/landing page/lettuce.svg';
import Search from '../public/assets/landing page/search.png';
import Popular1 from '../public/assets/landing page/popular 1.svg';
import Popular2 from '../public/assets/landing page/popular 2.svg';
import Popular3 from '../public/assets/landing page/healthy 1.svg';
import ChickenKare from '../public/assets/landing page/chicken kare.svg';
import BombChicken from '../public/assets/landing page/bomb chicken.svg';
import CoffeLava from '../public/assets/landing page/coffe lava.svg';
import IndiaSalad from '../public/assets/landing page/india salad.svg';
import SugarSalmon from '../public/assets/landing page/sugar salmon.svg';
import Banana from '../public/assets/landing page/Banana.svg';
import BG from '../public/assets/landing page/BG.svg';


const page = () => {
  return (
    <div id="landingpage">
      <div className='header-container'>
        <div className='header-wrapper'>
          <Header />
          <div className="absolute top-56 px-20">
            <h1 className="text-5xl font-semibold w-96 text-light-purple" >Discover Recipe & Delicious Food</h1>
            <div className='relative right-5'>
              <Textfield
                type="search"
                id="search"
                placeholder="Search Recipe"
                className="w-96 h-14"
              />
              <Image className="absolute bottom-5 left-80 cursor-pointer" src={Search} alt='Search' />
            </div>
          </div>
          <div className='absolute left-1/2 top-10'>
            <Image className="absolute bottom-28 left-16 w-128 h-128" src={Lettuce} alt="MainImage" />
            <Image className="relative w-144 h-144 right-10 top-16" src={MainImage} alt="MainImage" />
          </div>
        </div>
      </div>

     <Element id='popularforyou'>
     <div className="bg-white-cream flex flex-1 flex-row px-28">
        <div className='bg-light-yellow w-5 h-28'>
          <h1 className="text-4xl font-semibold py-10 px-10 w-96 text-light-purple">Popular For You !</h1>
        </div>
      </div>
      <div className="flex bg-white-cream ">
        <div className='relative'>
          <Image className="w-56 py-3" src={BG} alt='BG' />
          <Image className="w-96 h-96" src={Popular1} alt='Popular1' />
          <h1 className='text-3xl w-5 relative bottom-28 px-5 text-white-cream cursor-pointer hover:text-light-yellow'>Pizza Lamoa</h1>
        </div>
        <div className='relative py-14 px-5' >
          <Image className="w-96 h-96" src={Popular2} alt='Popular2' />
          <Image className="relative w-56 left-36" src={BG} alt='BG' />
          <h1 className='text-3xl w-5 relative bottom-36 px-5 text-white-cream cursor-pointer hover:text-light-yellow'>King Burger</h1>
        </div>
      </div>
     </Element>
      
      <Element id='newrecipe'>
      <div className="bg-white-cream flex flex-1 flex-row px-28">
        <div className='bg-light-yellow w-5 h-28'>
          <h1 className="text-4xl font-semibold py-10 px-10 w-96 text-gray-700" >New Recipe</h1>
        </div>
      </div>
      <div className='flex justify-between bg-white-cream'>
        <div>
          <div className='flex bg-light-yellow w-80 h-96 relative top-20' />
          <Image className="w-112 relative bottom-56 left-28" src={Popular3} alt='BG' />
        </div>
        <div className='py-32 pr-20'>
          <h1 className='text-4xl text-gray-600 font-medium w-96 py-2'>Healthy Bone Broth Ramen (Quick & Easy)</h1>
          <hr className='border-dark-green border-1 w-20'/>
          <p className='w-96 font-medium py-5 text-gray-500'>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
          <Button
          type="submit"
          name="Learn More"
          className="w-36 h-12 bg-light-yellow text-white text-center font-normal py-2"
          />
        </div>
      </div>
      </Element>

      <Element id='popularrecipe'>
      <div className="bg-white-cream flex flex-1 flex-row px-28">
        <div className='bg-light-yellow w-5 h-28'>
          <h1 className="text-4xl font-semibold py-10 px-10 w-96 text-gray-800" >Popular Recipe</h1>
        </div>
        <div className='py-40'>
          <div className='flex flex-1 flex-row gap-10'>
            <div>
            <Image className='w-80' src={ChickenKare} alt='chicken kare'/>
            <p className='relative bottom-20 px-5 w-10 font-medium text-2xl text-black cursor-pointer hover:text-light-yellow'>Chicken Kare</p>
            </div>
            <div>
            <Image className='w-80' src={BombChicken} alt='bomb chicken'/>
            <p className='relative bottom-20 px-5 w-10 font-medium text-2xl text-black cursor-pointer hover:text-light-yellow'>Bomb Chicken</p>
            </div>
            <div>
            <Image className='w-80' src={Banana} alt='banana'/>
            <div>
            <p className='relative bottom-20 px-5 font-medium text-2xl text-black cursor-pointer hover:text-light-yellow'>Banana</p>
            <p className='relative bottom-20 px-5 font-medium text-2xl text-black cursor-pointer hover:text-light-yellow'>Smooth pop</p>
            </div>
            </div>
          </div>
          
          <div className='flex flex-1 flex-row gap-10'>
           <div>
           <Image className='w-80' src={CoffeLava} alt='chicken kare'/>
           <p className='relative bottom-20 px-5 font-medium text-2xl text-black cursor-pointer hover:text-light-yellow'>Coffe Lava</p>
           <p className='relative bottom-20 px-5 font-medium text-2xl text-black cursor-pointer hover:text-light-yellow'>Cake</p>
           </div>
            <div>
            <Image className='w-80' src={SugarSalmon} alt='bomb chicken'/>
            <p className='relative bottom-20 px-5 w-10 font-medium text-2xl text-black cursor-pointer hover:text-light-yellow'>Sugar Salmon</p>
            </div>
            <div>
            <Image className='w-80' src={IndiaSalad} alt='banana'/>
            <p className='relative bottom-20 px-5 w-10 font-medium text-2xl text-black cursor-pointer hover:text-light-yellow'>Indian Salad</p>
            </div>
          </div>
        </div>
      </div>
      </Element>

      <Element id='information'>
      <Footer />
      </Element>
    </div>
  )
}

export default page