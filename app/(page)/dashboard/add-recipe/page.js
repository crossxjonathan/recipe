'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import AddPhoto from '@/app/components/module/gallery/addphoto';
import AddVideo from '@/app/components/module/gallery/addvideo';
import Button from '@/app/components/base/button/button';
import { AddRecipeService } from '@/services/client/recipe';
import '../../Layout.css';
import { toast } from 'react-toastify';

const AddRecipe = () => {
  const [form, setForm] = useState({
    image: '',
    title: '',
    description: ''
  });

  const Router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { image, title, description } = form;
      await AddRecipeService({
        image,
        title,
        description
      });
      toast.success("Recipe added successfully");
      Router.push('/dashboard/profile/my-recipe');
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <MainHeader />
      <div className="grid justify-center py-10">
        <div className="py-5">
          <AddPhoto />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            id="image"
            type="text"
            name="image"
            value={form.image}
            placeholder="Image URL"
            onChange={handleChange}
            className="shadow-md p-5 px-2 border w-full focus:outline-none focus:ring focus:border-blue-500 ..."
          />
          <div className="w-full mx-w-auto mx-auto py-5">
            <input
              id="title"
              type="text"
              name="title"
              value={form.title}
              placeholder="Title"
              onChange={handleChange}
              className="shadow-md p-5 px-2 border w-full focus:outline-none focus:ring focus:border-blue-500 ..."
            />
          </div>
          <div>
            <textarea
              id="description"
              name="description"
              value={form.description}
              placeholder="Ingredients"
              onChange={handleChange}
              className="shadow-md p-5 px-2 border w-full focus:outline-none focus:ring focus:border-blue-500 ... h-56"
            />
          </div>
          <div className="py-10">
            <AddVideo />
          </div>
          <div className="flex justify-center py-5">
            <Button
              className="bg-light-yellow w-72 text-center text-white rounded-lg"
              type="submit"
              name="Post"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddRecipe;
