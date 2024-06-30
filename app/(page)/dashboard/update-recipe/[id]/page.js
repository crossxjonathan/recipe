"use client";

import Button from '@/app/components/base/button/button';
import { toast } from 'react-toastify';
import { UpdateMyRecipeService } from '@/services/client/profile';
import Image from 'next/image';
import Footer from '@/app/components/module/footer/footer';
import MainHeader from '@/app/components/module/header/MainHeader';
import { UploadMyRecipeService } from '@/services/client/profile';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import Loading from '../../../../../public/assets/add recipe/loading cook.gif';
import ImageIcon from '../../../../../public/assets/add recipe/image icon.svg';

const UpdateRecipe = ({ params = {} }) => {
    const [imageUrl, setImageUrl] = useState(ImageIcon);
    const [imageDimensions, setImageDimensions] = useState({ width: 100, height: 100 });
    const fileUploadRef = useRef(null);
    const [form, setForm] = useState({
        title: '',
        description: '',
        image: ''
    });

    const Router = useRouter();
    const { id } = params;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const handleImageUpload = (e) => {
        e.preventDefault();
        fileUploadRef.current.click();
    };

    const uploadImageDisplay = async (event) => {
        const uploadedFile = event.target.files[0];
        console.log(uploadedFile, '<<<<<<<<<<<<<<<uploadedFile');
        if (!uploadedFile) return;

        try {
            setImageUrl(Loading);
            const formData = new FormData();
            formData.append('file', uploadedFile);

            const response = await UploadMyRecipeService(formData);
            console.log(response, '<<<<<<<<<<<<<<<<<<response');
            const imageUrlFromServer = response.data.file_url;
            console.log(imageUrlFromServer, '<<<<<<<<<<<<<<<<<<imageUrlFromServer');

            const img = new window.Image();
            img.onload = () => {
                setImageDimensions({ width: img.width, height: img.height });
                setImageUrl(imageUrlFromServer);
                setForm((prevForm) => ({
                    ...prevForm,
                    image: imageUrlFromServer,
                }));
            };
            img.src = imageUrlFromServer;
        } catch (error) {
            console.error('Error message:', error.message);
            setImageUrl(ImageIcon);
            toast.error('Failed to upload image. Please try again.');
        }
    };

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`/v1/recipes/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data!');
                }
                const result = await response.json();
                console.log(result,'<<<<<<<<<<<<<<<<<<<<result');
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
                <div className="grid bg-white-blue w-full max-w-auto mx-auto h-80 px-80 py-32 cursor-pointer rounded-xl shadow-md">
                    <Image
                        className="w-20 h-20 rounded-xl"
                        width={imageDimensions.width}
                        height={imageDimensions.height}
                        src={imageUrl}
                        alt="Image Icon"
                    />
                    <form id="form" encType="multipart/form-data" className="relative py-3">
                        <button
                            className="text-gray-500 font-semibold"
                            type="button"
                            onClick={handleImageUpload}
                        >
                            Add Photo
                        </button>
                        <input
                            type="file"
                            id="file"
                            ref={fileUploadRef}
                            onChange={uploadImageDisplay}
                            hidden
                        />
                    </form>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="w-full mx-w-auto mx-auto py-5">
                        <input
                            id="title"
                            type="text"
                            name="title"
                            value={form.title}
                            placeholder="Title"
                            onChange={handleChange}
                            maxLength={64}
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
