"use client";

import ProfileFooter from '@/app/components/module/footer/profilefooter';
import MainHeader from '@/app/components/module/header/MainHeader';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageProfile from '../../../../../public/assets/profile/profileimage.svg';
import EditImg from '../../../../../public/assets/profile/edit-3.svg';
import ImageDefault from '../../../../../public/assets/landing page/imagedefault.png';
import Api from '@/app/configs/Api';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from 'flowbite-react';
import { FaEye, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetProfile } from '@/services/client/profile';

const MyRecipe = async () => {
    const result = await GetProfile();
    // const profile = result.data

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    // };


    return (
        <div>
            <MainHeader />
            <div className="grid justify-center py-5">
                <Image className='rounded-full w-28 h-28' src={ImageProfile} alt='Profile Image' />
                <div className='relative bottom-2 px-20 cursor-pointer'>
                    <Image src={EditImg} alt="Edit Icon" />
                </div>
                {/* <p className='font-semibold'>{name}</p> */}
            </div>
            <div className='flex flex-row gap-14 px-20 py-5 font-semibold'>
                <p>My Recipe</p>
                <p onClick={() => router.push('/dashboard/profile/saved-recipe')} className='cursor-pointer text-gray-400'>Saved Recipe</p>
                <p onClick={() => router.push('/dashboard/profile/liked-recipe')} className='cursor-pointer text-gray-400'>Liked Recipe</p>
            </div>
            <hr />
            <div className='flex flex-wrap gap-5 px-20 py-10'>
                <p>{JSON.stringify(result)}</p>
                {/* {recipes.map((recipe) => (
                    <div key={recipe.id} className='relative'>
                        <div className='absolute flex gap-3 top-2 right-2'>
                            <FaEye className="cursor-pointer hover:bg-white" onClick={() => handleDetailRecipe(recipe.id)} />
                            <FaTrash className="cursor-pointer hover:bg-white" onClick={() => handleDelete(recipe.id)} />
                        </div>
                        <Image className="w-64 h-72 rounded-xl bg-light-yellow" src={ImageDefault} width={1265} height={711} alt={recipe.title} />
                        <p className="absolute bottom-5 left-3 text-2xl text-white font-semibold cursor-pointer hover:text-light-purple">{recipe.title}</p>
                    </div>
                ))} */}
            </div>
            <div className="flex py-10 overflow-x-auto justify-center">
                {/* <Pagination
                    layout="table"
                    currentPage={currentPage}
                    totalPages={100}
                    onPageChange={handlePageChange}
                    showIcons
                /> */}
            </div>
            <ProfileFooter />
        </div>
    );
};

export default MyRecipe;
