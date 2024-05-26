"use client";

import ProfileFooter from '@/app/components/module/footer/profilefooter';
import MainHeader from '@/app/components/module/header/MainHeader';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageProfile from '../../../../../public/assets/profile/profileimage.svg';
import EditImg from '../../../../../public/assets/profile/edit-3.svg';

import ImageDefault from '../../../../../public/assets/landing page/imagedefault.png';
import Api from '@/app/configs/Api';
import { useRouter } from 'next/navigation';

const MyRecipe = () => {
    const Router = useRouter();
    const [files, setFiles] = useState([]);

    const HandleSavedRecipe = () => {
        Router.push('/dashboard/profile/saved-recipe');
    }

    const HandleLikedRecipe = () => {
        Router.push('/dashboard/profile/liked-recipe');
    }

    const handleDetailRecipe = (id) => {
        Api.get(`/recipes/${id}`)
        .then((res) => {
          Router.push(`/dashboard/update-recipe/?id=${id}`)
        //   console.log(res, "<<<<<<<<<<<<<<<<<res id")
        })
        .catch((err) => {
            throw new Error(err.message)
        })
      };

    useEffect(() => {
        Api.get('/recipes/')
          .then((res) => {
            const result = res.data.data;
            setFiles(result);
          })
          .catch((err) => {
            console.error(err);
          });
      }, []);
        
    return (
        <div>
            <div>
                <MainHeader />
            </div>
            <div className="grid justify-center py-5">
                <Image className='rounded-full w-28 h-28' src={ImageProfile} alt='ImageProfile' />
                <div className='relative bottom-2 px-20 cursor-pointer'>
                    <Image src={EditImg} alt="EditImg" />
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
            <div className='flex flex-row flex-1 px-20 gap-5 py-10'>
                {files.map((file, index) => (
                     <div key={index} onClick={() => handleDetailRecipe(file.id)} className='flex'>
                     <Image className="w-72 h-64 rounded-xl bg-light-yellow" src={file.image ? file.image : ImageDefault} alt={file.title} />
                     <p className="absolute px-3 py-32 text-2xl w-48 text-white font-semibold cursor-pointer hover:text-light-purple">{file.title}</p>
                 </div>
                ))}
            </div>
            <div>
                <ProfileFooter />
            </div>
        </div>
    )
}

export default MyRecipe