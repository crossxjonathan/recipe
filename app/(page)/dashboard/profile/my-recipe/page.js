"use client";

import ProfileFooter from '@/app/components/module/footer/profilefooter';
import MainHeader from '@/app/components/module/header/MainHeader';
import React from 'react';
import Image from 'next/image';
import ImageProfile from '../../../../../public/assets/profile/profileimage.svg';
import EditImg from '../../../../../public/assets/profile/edit-3.svg';
import BombChicken from '../../../../../public/assets/profile/bomb chicken1.svg';
import BananasPancake from '../../../../../public/assets/profile/bananas 1.svg';
import {useRouter} from 'next/navigation';

const MyRecipe = () => {
    const Router = useRouter();

    const HandleSavedRecipe = () => {
        Router.push('/dashboard/profile/saved-recipe');
      }

    const HandleLikedRecipe = () => {
        Router.push('/dashboard/profile/liked-recipe');
      }

  return (
    <div>
        <div>
            <MainHeader/>
        </div>
        <div className="grid justify-center py-5">
            <Image className='rounded-full w-28 h-28' src={ImageProfile} alt='ImageProfile'/>
            <div className='relative bottom-2 px-20 cursor-pointer'>
                <Image src={EditImg} alt="EditImg"/>
            </div>
            <div>
                <p className='font-semibold'>Garneta Sharina</p>
            </div>
        </div>
        <div className='flex flex-row flex-1 gap-14 px-20 py-5 font-semibold'>
            <ul>
                <li>
                    <p>My Recipe</p>
                </li>
            </ul>
            <ul>
                <li>
                    <p onClick={HandleSavedRecipe} className='cursor-pointer text-gray-400'>Saved Recipe</p>
                </li>
            </ul>
            <ul>
                <li>
                    <p onClick={HandleLikedRecipe} className='cursor-pointer text-gray-400'>Liked Recipe</p>
                </li>
            </ul>
        </div>
        <hr />
        <div className='flex flex-row flex-1 px-20 gap-5'>
        <div className='flex'>
            <Image className='w-64 h-64' src={BombChicken} alt='BombChicken'/>
            <p className='absolute px-3 py-32 text-2xl w-5 text-white font-medium'>Bomb Chicken</p>
        </div>
        <div className='flex'>
            <Image className='w-64 h-64' src={BananasPancake} alt='BananasPancake'/>
            <p className='absolute px-3 py-32 text-2xl w-5 text-white font-medium'>Bananas Pancake</p>
        </div>
        </div>
        <div>
            <ProfileFooter/>
        </div>
    </div>
  )
}

export default MyRecipe