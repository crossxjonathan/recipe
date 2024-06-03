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
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteMyRecipeService, GetProfile, UpdateMyRecipeService, GetMyRecipeService } from '@/services/client/profile';

const MyRecipe = () => {
    const Router = useRouter();
    const [profile, setProfile] = useState({});
    const [myRecipe, setMyRecipe] = useState([]);

    const handleDetailRecipe = async (id) => {
        Router.push(`/dashboard/detail-recipe/${id}`);
    }

    const handleGetProfile = async () => {
        try {
            const user = await GetProfile()
            setProfile(user.data)
        } catch (err) {
            console.log(err);
        }
    }

    const handleGetMyRecipe = async () => {
        try {
            const { data } = await GetMyRecipeService();
            setMyRecipe(data)
        } catch (error) {

        }
    }

    const handleUpdateRecipe = (id) => {
        Router.push(`/dashboard/update-recipe/${id}`);
    }

    const handleDeleteMyRecipe = async (id) => {
        try {
            const result = await DeleteMyRecipeService(id);
            console.log('Recipe deleted successfully:', result);
            handleGetMyRecipe();
            toast.success("Recipe deleted successfully!");
        } catch (error) {
            console.error('Failed to delete the recipe:', error);
            toast.error("Failed to delete the recipe!");
        }
    };

    useEffect(() => {
        handleGetMyRecipe()
        handleGetProfile()
    }, [])

    return (
        <div>
            <MainHeader />
            <div className="grid justify-center py-5">
                <Image className='rounded-full w-28 h-28' src={ImageProfile} alt='Profile Image' />
                <div className='relative bottom-2 px-20 cursor-pointer'>
                    <Image src={EditImg} alt="Edit Icon" />
                </div>
                <div>
                    <p className='font-semibold'>{profile.name}</p>
                    <p className='font-semibold'>{profile.email}</p>
                </div>
            </div>
            <div className='flex flex-row gap-14 px-20 py-5 font-semibold'>
                <p>My Recipe</p>
                <p onClick={() => Router.push('/dashboard/profile/saved-recipe')} className='cursor-pointer text-gray-400'>Saved Recipe</p>
                <p onClick={() => Router.push('/dashboard/profile/liked-recipe')} className='cursor-pointer text-gray-400'>Liked Recipe</p>
            </div>
            <hr />
            <div className='flex flex-wrap gap-5 px-20 py-10'>
                {myRecipe.map((item) => (
                    <div key={item.id} className='relative'>
                        <div className='absolute flex gap-3 top-2 right-2'>
                            <FaEye className="cursor-pointer w-5 h-5" onClick={() => handleDetailRecipe(item.id)} />
                            <FaPencilAlt className="cursor-pointer w-5 h-5" onClick={() => handleUpdateRecipe(item.id)} />
                            <FaTrash className="cursor-pointer w-5 h-5" onClick={() => handleDeleteMyRecipe(item.id)} />
                        </div>
                        <Image className="w-64 h-72 rounded-xl bg-light-yellow" src={ImageDefault} width={1265} height={711} alt={item.title} />
                        <p className="absolute bottom-5 left-3 text-2xl text-white font-semibold cursor-pointer hover:text-light-purple">{item.title}</p>
                    </div>
                ))}
            </div>
            <ProfileFooter />
        </div>
    );
};

export default MyRecipe;
