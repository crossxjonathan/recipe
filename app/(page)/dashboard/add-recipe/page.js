"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import AddPhoto from '@/app/components/module/gallery/addphoto';
import TextField from '@/app/components/base/textfield/textfield';
import TextArea from '@/app/components/base/textfield/TextArea';
import AddVideo from '@/app/components/module/gallery/addvideo';
import Button from '@/app/components/base/button/button';
import Api from '@/app/configs/Api';
import { toast } from 'react-toastify';

const AddRecipe = () => {
  const Router = useRouter();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prevFormData => ({
      ...prevFormData,
      [id]: value
    }))
    console.log(id, value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    Api.post(`/recipes/`, {
      title: form.title,
      description: form.description,
      image: form.image,
    })
      .then((res) => {
        // console.log(res, "<<<<<<<<<<<<<<<Add Recipe")
        toast.success("Add Recipe Success!!!")
        Router.push('/dashboard/home');
      })
      .catch((error) => {
        console.error(error, "<<<<<error");
      })
      .finally(() => {
        setLoading(false);
      })
  }

  return (
    <div>
      <div>
        <MainHeader />
      </div>
      <div className="grid justify-center py-10">
        {/* <AddPhoto /> */}
        <TextField
          id="image"
          type="text"
          value={form.image}
          placeholder="Image URL"
          onChange={handleChange}
          className="text-gray-500 px-5 bg-white-blue font-semibold"
        />
        {form.image && (
          <div>
            <img src={form.image} alt="Uploaded Image" className="mt-3 w-64 h-64 object-cover" />
          </div>
        )}
        <div className="w-full mx-w-auto mx-auto py-5">
          <TextField
            id="title"
            type="text"
            value={form.title}
            placeholder="Title"
            onChange={handleChange}
            className="text-gray-500 px-5 bg-white-blue font-semibold"
          />
        </div>
        <div>
          <TextArea
            id="description"
            type="text"
            placeholder="Ingredients"
            value={form.description}
            spellCheck={false}
            onChange={handleChange}
            className="text-gray-500 pb-48 px-5 bg-white-blue font-semibold h-56"
          />
        </div>
        <div className="py-10">
          <AddVideo />
        </div>
        <div className="flex justify-center py-5">
          <Button
            className="bg-light-yellow w-72 text-center text-white rounded-lg"
            type="submit"
            name={loading ? "Posting..." : "Post"}
            onClick={handleSubmit}
            disabled={loading}
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default AddRecipe;
