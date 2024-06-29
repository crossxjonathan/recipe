'use client';

import React from 'react';
import Image from 'next/image';
import Saved from '../../../../public/assets/profile/save.svg';
import { AddSaveRecipe } from '@/services/client/profile';
import { toast } from 'react-toastify';
import { useParams } from 'next/navigation';

const SaveButton = () => {
    const {id} = useParams();
    const handleSaveRecipe = async (recipe_id) => {
        try {
          const result = await AddSaveRecipe(recipe_id);
          toast.success('Saved Recipe Success!!🥰')
          console.log(result, "<<<<<<<<<<<<<<<<<<<result");
        } catch (error) {
          toast.error('Already Saved, Check your Save Recipe!!')
          console.error(error.message);
        }
      };

  return (
    <div className='cursor-pointer' onClick={() => handleSaveRecipe(id)}>
      <Image src={Saved} alt='liked' width={48} height={48} />
    </div>
  );
};

export default SaveButton;
