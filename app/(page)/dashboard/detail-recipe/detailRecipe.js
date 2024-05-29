"use client";

import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Sandwich from '../../../../public/assets/detail recipe/detail recipe.svg';
import VideoBtn from '@/app/components/base/button/videoBtn';
import TextField from '../../../components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import Comment from '../../../../public/assets/detail recipe/comment.svg';
import Profile from '../../../../public/assets/auth/profilepng.png';
import Api from '@/app/configs/Api';
import { useSearchParams } from 'next/navigation';
import ImageDefault from '../../../../public/assets/landing page/imagedefault.png';

const DetailRecipe = () => {
  const [detail, setDetail] = useState(null);
  const [error, setError] = useState('');
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  useEffect(() => {
    const getData = async () => {
      try {
        const { data: res } = await Api.get(`/recipes/${id}`);
        console.log(res.data, "<<<<<<<<<<<response");
        setDetail(res.data);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError('Failed to fetch recipe details.');
      }
    };
    getData();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!detail) {
    return <div>Loading...</div>;
  }

  const { title, description, image } = detail;

  
  return (
    <div id='detail-recipe'>
      <div className='header-wrapper'>
        <MainHeader />
      </div>
      <div>
        <div className='flex flex-1 justify-center py-5'>
          <h1 className='text-4xl font-medium text-light-purple'>{title}</h1>
        </div>
        <div className="grid flex-1 justify-center py-10">
          <div className="justify-center px-96">
            <Image className="bg-light-yellow rounded-xl w-144" width={200} height={200} layout='responsive' src={image ? image : ImageDefault} alt='ImageId' />
          </div>
          <div className="py-5 px-96">
            <h1 className="text-2xl font-medium">Ingredients</h1>
            <div className="py-2">
              <p>{description}</p>
            </div>
            <div className="py-5">
              <h1 className='text-2xl font-semibold py-5'>Video Step</h1>
              <div className='py-5'>
                <VideoBtn />
              </div>
              <div className='py-5'>
                <VideoBtn />
              </div>
              <div className='py-5'>
                <VideoBtn />
              </div>
              <div className='py-5'>
                <VideoBtn />
              </div>
              <div>
                <TextField
                  placeholder="Comment:"
                  className="h-36 pb-28 px-5 text-gray-800 bg-white-blue"
                />
              </div>
              <div className="flex justify-center py-5">
                <Button
                  className="bg-light-yellow w-72 rounded-md text-center text-white"
                  type="submit"
                  name="Send"
                />
              </div>
              <div className="px-5">
                <h1 className='text-2xl font-medium'>Comment</h1>
                <div className='grid'>
                  <div className="flex py-5">
                    <Image className="w-10 h-10" src={Comment} alt='Comment' />
                    <div className="px-5">
                      <p className='font-medium'>Ayudia</p>
                      <p className='font-small'>Nice recipe. simple and delicious, thankyou</p>
                    </div>
                  </div>
                  <div className="flex py-5">
                    <Image className="w-10 h-10" src={Profile} alt='Profile' />
                    <div className="px-5">
                      <p className='font-medium'>Anto</p>
                      <p className='font-small'>This Recipe So Helpfull!! Thank u Bruhh!! 😀</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DetailRecipe;
