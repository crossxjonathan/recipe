"use client";

import ProfileFooter from '@/app/components/module/footer/profilefooter';
import MainHeader from '@/app/components/module/header/MainHeader';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GetProfile, GetSaveRecipe, cancelSaveRecipe } from '@/services/client/profile';
import MyProfile from '@/app/components/module/profile/myProfile';
import { GoBookmarkSlash, GoHeart } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SavedRecipe = () => {
    const Router = useRouter();
    const [profile, setProfile] = useState([]);
    const [likedRecipes, setLikedRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSaveRecipe = async () => {
        try {
            const res = await GetSaveRecipe();
            setProfile(res.data);
        } catch (err) {
            console.log(err);
            setError(err.message || 'Failed to fetch saved recipes');
        } finally {
            setLoading(false);
        }
    };

    const handleCancelSave = async (id) => {
        try {
            const res = await cancelSaveRecipe(id);
            console.log(res, '<<<<<<<<<res');
            toast.success('Saved has been cancel!!')
            handleSaveRecipe();
        } catch (error) {
            toast.error('Cancel is failed!!')
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleSaveRecipe();
    }, [])

    return (
        <div>
            <div>
                <MainHeader />
            </div>
            <div className="grid justify-center py-5">
                <MyProfile />
            </div>
            <div className='flex flex-row flex-1 gap-14 px-20 py-5 font-semibold'>
                <ul>
                    <li>
                        <p onClick={() => Router.push('/dashboard/profile/my-recipe')} className='cursor-pointer text-gray-400'>My Recipe</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p>Saved Recipe</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p onClick={() => Router.push('/dashboard/profile/liked-recipe')} className='cursor-pointer text-gray-400'>Liked Recipe</p>
                    </li>
                </ul>
            </div>
            <hr />
            <ToastContainer position='bottom-right' />
            <div className="flex flex-wrap gap-5 px-20 py-10">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <>
                        {profile.map((item) => (
                            <div key={item.id} className="relative">
                                <div className="absolute flex gap-5 top-2 right-2">
                                    <GoBookmarkSlash className="cursor-pointer w-10 h-10" onClick={() => handleCancelSave(item.id)} />
                                </div>
                                <Image
                                    className="w-64 h-72 rounded-xl bg-light-yellow object-cover"
                                    src={item.recipe.image || '/default-image.jpg'}
                                    width={256}
                                    height={288}
                                    alt={item.recipe.title}
                                />
                                <p
                                    className="absolute bottom-5 left-3 text-2xl text-border font-semibold hover:text-light-yellow cursor-pointer"
                                >
                                    {item.recipe.title}
                                </p>
                            </div>
                        ))}
                        {likedRecipes.map((item) => (
                            <div key={item.id} className="relative">
                                <div className="absolute flex gap-5 top-2 right-2">
                                    <GoHeart className="cursor-pointer w-10 h-10" onClick={() => handleCancelLike(item.id)} />
                                </div>
                                <Image
                                    className="w-64 h-72 rounded-xl bg-light-yellow object-cover"
                                    src={item.recipe.image || '/default-image.jpg'}
                                    width={256}
                                    height={288}
                                    alt={item.recipe.title}
                                />
                                <p
                                    className="absolute bottom-5 left-3 text-2xl text-border font-semibold hover:text-light-yellow cursor-pointer"
                                >
                                    {item.recipe.title}
                                </p>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div>
                <ProfileFooter />
            </div>
        </div>
    )
}

export default SavedRecipe;
