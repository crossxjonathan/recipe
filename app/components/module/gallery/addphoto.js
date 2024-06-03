"use client";

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import ImageIcon from '../../../../public/assets/add recipe/image icon.svg';
import Loading from "../../../../public/assets/add recipe/loading recipe.gif";
import { UploadMyRecipeService } from '@/services/client/profile';

const AddPhoto = ({ onImageUpload }) => {
    const [imageUrl, setImageUrl] = useState(ImageIcon);
    const [imageDimensions, setImageDimensions] = useState({ width: 100, height: 100 });
    const fileUploadRef = useRef(null);

    const handleImageUpload = (e) => {
        e.preventDefault();
        fileUploadRef.current.click();
    };

    const uploadImageDisplay = async (event) => {
        const uploadedFile = event.target.files[0];
        if (!uploadedFile) return;

        try {
            setImageUrl(Loading);
            const formData = new FormData();
            formData.append("file", uploadedFile);

            const response = await UploadMyRecipeService(formData);

            if (response.status === 201) {
                const { location: imageUrlFromServer } = await response.json();

                const img = new window.Image();
                img.onload = () => {
                    setImageDimensions({ width: img.width, height: img.height });
                    setImageUrl(imageUrlFromServer);
                    onImageUpload(imageUrlFromServer);
                };
                img.src = imageUrlFromServer;
            } else {
                throw new Error('Failed to upload image');
            }
        } catch (error) {
            console.error(error);
            setImageUrl(ImageIcon);
        }
    };

    return (
        <div className="grid bg-white-blue w-full max-w-auto mx-auto h-80 px-80 py-32 cursor-pointer rounded-xl">
            <Image 
                className="w-20 h-20 rounded-xl" 
                width={imageDimensions.width} 
                height={imageDimensions.height} 
                src={imageUrl} 
                alt='Image Icon' 
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
                    id='file'
                    ref={fileUploadRef}
                    onChange={uploadImageDisplay}
                    hidden
                />
            </form>
        </div>
    );
};

export default AddPhoto;
