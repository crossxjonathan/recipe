"use client";

import Button from '@/app/components/base/button/button';
import { toast } from 'react-toastify';
import { UpdateMyRecipeService } from '@/services/client/profile';
import Image from 'next/image';
import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AddVideo from '@/app/components/module/gallery/addvideo';
import AddPhoto from '@/app/components/module/gallery/addphoto';

const UpdateRecipe = ({ params = {} }) => {
    const Router = useRouter();
    const { id } = params;
    const [form, setForm] = useState({
        title: '',
        description: '',
        image: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const handleImageUpload = (imageUrl) => {
        setForm(prevForm => ({
            ...prevForm,
            image: imageUrl
        }));
    };

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`/v1/recipes/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data!');
                }
                const result = await response.json();
                setForm({
                    title: result.title,
                    description: result.description,
                    image: result.image
                });
            } catch (error) {
                console.log(error);
                setError('Failed to fetch data!');
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchRecipe();
        } else {
            setLoading(false);
        }
    }, [id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UpdateMyRecipeService(id, form);
            toast.success("Recipe updated successfully!");
            Router.push('/dashboard/profile/my-recipe');
        } catch (error) {
            console.error('Failed to update the recipe:', error);
            toast.error("Failed to update the recipe!");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <MainHeader />
            <div className="grid justify-center py-10">
                <form onSubmit={handleSubmit}>
                    <div className="py-5">
                        {/* <AddPhoto onImageUpload={handleImageUpload}/> */}
                    </div>
                    <input
                        id="image"
                        type="text"
                        name="image"
                        value={form.image}
                        placeholder="Image URL"
                        onChange={handleChange}
                        className="shadow-md p-5 px-2 border w-full focus:outline-none focus:ring focus:border-blue-500 ..."
                    />
                    {form.image && (
                        <div>
                            <Image src={form.image} alt="Uploaded Image" width={256} height={256} className="mt-3 w-64 h-64 object-cover" />
                        </div>
                    )}
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
                            name="Update"
                        />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default UpdateRecipe;
