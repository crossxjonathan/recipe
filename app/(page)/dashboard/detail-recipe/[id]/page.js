// 'use client';

import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import React from 'react';
import Image from 'next/image';
import ImageDefault from '../../../../../public/assets/landing page/imagedefault.png';
import { GetDetailRecipe } from '@/services/client/recipe';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LikeButton from '@/app/components/module/like/like';
import SaveButton from '@/app/components/module/save/save';

const DetailRecipe = async ({ params }) => {
  console.log(params, '<<<<<<<<<params');
  if (!params || !params.id) {
    return <div>Error: Recipe ID not found.</div>;
  }

  const result = await GetDetailRecipe(params.id);
  console.log(result, '<<<<<<<<<result');

  if (!result || !result.data) {
    return <div>Error: Recipe data not found.</div>;
  }

  const { title, description, image, author } = result.data;

  return (
    <div id='detail-recipe'>
      <div className='header-wrapper'>
        <MainHeader />
      </div>
      <div>
        <ToastContainer position='bottom-right' />
        <div className='flex flex-1 justify-center py-5'>
          <h1 className='text-4xl font-medium text-light-purple'>{title}</h1>
        </div>
        <div className="grid flex-1 justify-center py-10">
          <div className="justify-center px-96">
            <Image className="bg-light-yellow rounded-xl w-144" width={200} height={200} layout='responsive' src={image ? image : ImageDefault} alt='ImageId' />
          </div>
          <div className='flex flex-1 flex-row justify-center gap-72 py-5'>
            <div className='px-10'>
              <LikeButton />
            </div>
            <div className='px-10'>
              <SaveButton />
            </div>
          </div>
          <div className="py-5 px-96">
            <h1 className="text-2xl font-medium">Ingredients</h1>
            <div className="py-2">
              <p>{description}</p>
            </div>
            <div className='py-5'>
              <p>Author: {author.name}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailRecipe;
