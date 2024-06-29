'use client';

import React from 'react';
import Image from 'next/image';
import Liked from '../../../../public/assets/profile/like.svg';
import { AddLikeRecipe } from '@/services/client/profile';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';


const LikeButton = () => {
    const {id} = useParams();
  const handleLikeRecipe = async (recipe_id) => {
    try {
        const result = await AddLikeRecipe(recipe_id);
        toast.success('Liked Recipe Success!!🥰')
        console.log(result, "<<<<<<<<<<<<<<<<<<<result");
      } catch (error) {
        toast.error('Already Liked, Check your Like Recipe!!')
        console.error(error.message);
      }  
  };

  return (
    <div className='px-10 cursor-pointer' onClick={() => handleLikeRecipe(id)}>
      <Image src={Liked} alt='liked' width={48} height={48} />
    </div>
  );
};

export default LikeButton;
