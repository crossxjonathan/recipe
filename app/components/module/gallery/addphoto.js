"use client";

import Image from 'next/image';
import React, { useState, useRef } from 'react';
import ImageIcon from '../../../../public/assets/add recipe/image icon.svg';
import Loading from "../../../../public/assets/add recipe/loading recipe.gif";
import Api from '@/app/configs/Api';

const AddPhoto = () => {
    const [ imageUrl, setImageUrl ] = useState(ImageIcon);
    const [ imageDimensions, setImageDimensions ] = useState({ width: 100, height: 100 });
    const fileUploadRef = useRef(null);

    const handleImageUpload = (e) => {
        e.preventDefault();
        fileUploadRef.current.click();
    }

    const uploadImageDisplay = async () => {
        try {
            setImageUrl(Loading);
            const uploadedFile = fileUploadRef.current.files[0];
            const formData = new FormData();
            formData.append("file", uploadedFile);

            const response = await Api.post('/recipes/', {
                body: formData
            });

            if (response.status === 201) {
                const data = await response.json();
                const imageUrlFromServer = data?.location;

                const img = new window.Image();
                img.onload = () => {
                    setImageDimensions({ width: img.width, height: img.height });
                    setImageUrl(imageUrlFromServer);
                };
                img.src = imageUrlFromServer;
            } else {
                throw new Error('Failed to upload image');
            }
        } catch (error) {
            console.error(error);
            setImageUrl(ImageIcon);
        }
    }


    return (
        <div className="grid bg-white-blue w-full mx-w-auto mx-auto h-80 px-80 py-32 cursor-pointer rounded-xl">
            <Image 
                className="w-20 h-20 rounded-xl" 
                width={imageDimensions.width} 
                height={imageDimensions.height} 
                src={imageUrl} 
                alt='ImageIcon' 
            />
            <form id="form" encType="multipart/form-data" className="relative py-3">
                <button 
                    className="text-gray-500 text-nowrap font-semibold"
                    type="submit"
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
    )
}

export default AddPhoto