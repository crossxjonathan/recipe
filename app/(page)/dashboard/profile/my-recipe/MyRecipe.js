"use client";

import ProfileFooter from '@/app/components/module/footer/profilefooter';
import MainHeader from '@/app/components/module/header/MainHeader';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DeleteMyRecipeService, GetMyRecipeService } from '@/services/client/profile';
import ProfileDefault from '../../../../../public/assets/landing page/imagedefault.png';
import MyProfile from '@/app/components/module/profile/myProfile';
import '../../../Layout.css';


const MyRecipe = () => {
    const Router = useRouter();
    const [myRecipe, setMyRecipe] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleDetailRecipe = async (id) => {
        Router.push(`/dashboard/detail-recipe/${id}`);
    }

    const handleGetMyRecipe = async () => {
        try {
            const { data } = await GetMyRecipeService();
            setMyRecipe(data);
        } catch (error) {
            console.log(error);
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
        const fetchData = async () => {
            setLoading(true);
            await handleGetMyRecipe();
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            <MainHeader />
            <div className="grid justify-center py-5">
                <MyProfile />
            </div>
            <div className='flex flex-row gap-14 px-20 py-5 font-semibold'>
                <p>My Recipe</p>
                <p onClick={() => Router.push('/dashboard/profile/saved-recipe')} className='cursor-pointer text-gray-400'>Saved Recipe</p>
                <p onClick={() => Router.push('/dashboard/profile/liked-recipe')} className='cursor-pointer text-gray-400'>Liked Recipe</p>
            </div>
            <hr />
            <div className='flex flex-wrap gap-5 px-20 py-10'>
                {loading ? (
                    <div className="flex justify-center items-center">
                        <p>Loading...</p>
                    </div>
                ) : (
                    myRecipe.map((item) => (
                        <div key={item.id} className='relative'>
                            <div className='absolute flex gap-5 top-2 right-2'>
                                <FaEye className="cursor-pointer w-5 h-5" onClick={() => handleDetailRecipe(item.id)} />
                                <FaPencilAlt className="cursor-pointer w-5 h-5" onClick={() => handleUpdateRecipe(item.id)} />
                                <FaTrash className="cursor-pointer w-5 h-5" onClick={() => handleDeleteMyRecipe(item.id)} />
                            </div>
                            <Image 
                                className="w-64 h-72 rounded-xl bg-light-yellow object-cover" 
                                src={item.image || ProfileDefault} 
                                width={256}
                                height={288} 
                                alt={item.title} 
                            />
                            <p className="absolute bottom-5 left-3 text-2xl text-border font-semibold hover:text-light-yellow cursor-pointer">{item.title}</p>
                        </div>
                    ))
                )}
            </div>
            <ProfileFooter />
        </div>
    );
};

export default MyRecipe;
