"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoMdHeartDislike } from "react-icons/io";

import ProfileFooter from '@/app/components/module/footer/profilefooter';
import MainHeader from '@/app/components/module/header/MainHeader';
import MyProfile from '@/app/components/module/profile/myProfile';
import { GetLikeRecipe, cancelLikeRecipe } from '@/services/client/profile';
import '../../../Layout.css';

import defaultImage from '../../../../../public/assets/landing page/imagedefault.png';

const LikedRecipe = () => {
  const Router = useRouter();
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleLikeRecipe = async () => {
    try {
      const res = await GetLikeRecipe();
      setProfile(res.data);
    } catch (err) {
      console.log(err);
      setError(err.message || 'Failed to fetch liked recipes');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelLike = async (id) => {
    try {
      const res = await cancelLikeRecipe(id);
      console.log(res, '<<<<<<<<<res');
      handleLikeProfile();
    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => {
    handleLikeRecipe();
  }, []);

  return (
    <div>
      <MainHeader />
      <div className="grid justify-center py-5">
        <MyProfile />
      </div>
      <div className="flex flex-row flex-1 gap-14 px-20 py-5 font-semibold">
        <ul>
          <li>
            <p onClick={() => Router.push('/dashboard/profile/my-recipe')} className="cursor-pointer text-gray-400">
              My Recipe
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p onClick={() => Router.push('/dashboard/profile/saved-recipe')} className="cursor-pointer text-gray-400">
              Saved Recipe
            </p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Liked Recipe</p>
          </li>
        </ul>
      </div>
      <hr />
      <div className="flex flex-wrap gap-5 px-20 py-10">
      {loading ? (
                    <div className="flex justify-center items-center">
                        <p>Loading...</p>
                    </div>
                ) : (
          profile.map((item) => (
            <div key={item.id} className="relative">
              <div className="absolute flex gap-5 top-2 right-2">
                <IoMdHeartDislike className="cursor-pointer w-10 h-10" onClick={() => handleCancelLike(item.recipe.id)} />
              </div>
              <Image
                className="w-64 h-72 rounded-xl bg-light-yellow object-cover"
                src={item.recipe.image || defaultImage}
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
          ))
        )}
      </div>
      <ProfileFooter />
    </div>
  );
};

export default LikedRecipe;
