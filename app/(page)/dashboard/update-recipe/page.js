"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import AddPhoto from '@/app/components/module/gallery/addphoto';
import TextField from '@/app/components/base/textfield/textfield';
import TextArea from '@/app/components/base/textfield/TextArea';
import AddVideo from '@/app/components/module/gallery/addvideo';
import Button from '@/app/components/base/button/button';
import Api from '@/app/configs/Api';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';

const UpdateRecipe = () => {
  const Router = useRouter();
  const searchParams = useSearchParams();
  const Id = searchParams.get('id');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prevFormData => ({
      ...prevFormData,
      [id]: value
    }))
    console.log(id, value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Id) {
        await Api.put(`/recipes/${Id}`, form);
        toast.success("Recipe updated successfully!");
      } else {
        throw new Error("Update Failure!!")
      }
      Router.push('/dashboard/profile/my-recipe');
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while saving the recipe.");
    }
  };

  const handleDelete = async () => {
    try {
      if (Id) {
        await Api.delete(`/recipes/${Id}`);
        toast.success("deleted successfully!");
        Router.push('/dashboard/profile/my-recipe');
      } else {
        throw new Error("Recipe ID not found!");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deleting the recipe.");
    }
  };


  useEffect(() => {
    if (Id) {
      const fetchRecipe = async () => {
        try {
          const res = await Api.get(`/recipes/${Id}`);
          const result = res.data;
          setForm({
            title: result.title,
            description: result.description
          });
        } catch (error) {
          console.log(error);
          setError('Failed to Fetch Data!!!')
        } finally {
          setLoading(false);
        }
      };
      fetchRecipe();
    } else {
      setLoading(false);
    }
  }, [Id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>
        <MainHeader />
      </div>
      <div className="grid justify-center py-10">
        <AddPhoto />
        <div className="w-full mx-w-auto mx-auto py-5">
          <TextField
            id="title"
            type="text"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="text-gray-500 px-5 bg-white-blue font-semibold"
          />
        </div>
        <div>
          <TextArea
            id="description"
            type="text"
            value={form.description}
            placeholder="Ingredients"
            spellCheck={false}
            onChange={handleChange}
            className="text-gray-500 pb-48 px-5 bg-white-blue font-semibold h-auto"
            style={{ resize: 'none', overflowY: 'auto', height: 'auto' }}
            textarea 
          />
        </div>
        <div className="py-10">
          <AddVideo />
        </div>
        <div className="flex justify-center py-5 gap-5">
          <Button
            className="bg-light-yellow w-72 text-center text-white rounded-lg"
            type="submit"
            name={loading ? "Posting..." : "Post"}
            onClick={handleSubmit}
            disabled={loading}
          />
        <FaTrash className="w-8 h-8 cursor-pointer" onClick={handleDelete}/>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default UpdateRecipe;
