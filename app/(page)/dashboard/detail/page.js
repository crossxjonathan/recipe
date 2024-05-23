import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import React from 'react';
import Image from 'next/image';
import Sandwich from '../../../../public/assets/detail recipe/detail recipe.svg';
import VideoBtn from '@/app/components/base/button/videoBtn';
import TextField from './../../../components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import Comment from '../../../../public/assets/detail recipe/comment.svg';
import Profile from '../../../../public/assets/auth/profilepng.png';

const DetailRecipe = () => {
  return (
    <div id='detail-recipe'>
      <div className='header-wrapper'>
        <MainHeader />
      </div>
      <div>
        <div className='flex flex-1 justify-center py-5'>
          <h1 className='text-4xl font-medium text-light-purple'>Sandwich with Boiled Egg</h1>
        </div>
        <div className="grid flex-1 justify-center py-10">
          <Image className="w-144" src={Sandwich} alt='Sandwich' />
          <div className="py-5">
            <h1 className="text-2xl font-medium">Ingredients</h1>
            <div className="py-2">
              <p>- 2 Eggs</p>
              <p>- 2 Tbsp Mayonnaise</p>
              <p>- 3 Slices Bread</p>
              <p>- a Little Butter</p>
              <p>- ⅓ Carton Of Cress</p>
              <p>- 2-3 Slices Of Tomato Or A Lettuce Leaf
                And A Slice Of Ham Or Cheese</p>
              <p>- Crisps, To Serve</p>
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

export default DetailRecipe