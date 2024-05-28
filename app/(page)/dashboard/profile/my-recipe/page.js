"use client";

import ProfileFooter from '@/app/components/module/footer/profilefooter';
import MainHeader from '@/app/components/module/header/MainHeader';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ImageProfile from '../../../../../public/assets/profile/profileimage.svg';
import EditImg from '../../../../../public/assets/profile/edit-3.svg';

import ImageDefault from '../../../../../public/assets/landing page/imagedefault.png';
import Api from '@/app/configs/Api';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination } from 'flowbite-react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyRecipe = () => {
    const Router = useRouter();
    const searchParams = useSearchParams();
    const Id = searchParams.get('id');

    const [files, setFiles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(6);

    const HandleSavedRecipe = () => {
        Router.push('/dashboard/profile/saved-recipe');
    }

    const HandleLikedRecipe = () => {
        Router.push('/dashboard/profile/liked-recipe');
    }

    const handleDetailRecipe = (id) => {
        Api.get(`/recipes/${id}`)
            .then((res) => {
                Router.push(`/dashboard/update-recipe/?id=${id}`)
                console.log(res, "<<<<<<<<<<<<<<<<<res id")
            })
            .catch((err) => {
                throw new Error(err.message)
            })
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleDelete = async (e) => {
        try {
            if (Id) {
                await Api.delete(`/recipes/${Id}`);
                toast.success("deleted successfully!");
                Router.push(`/dashboard/profile/my-recipe?id=${Id}`);
            } else {
                throw new Error("Recipe ID not found!");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while deleting the recipe.");
        }
    };

    useEffect(() => {
        Api.get('/recipes/', { params: { page: currentPage, limit: totalPages } })
            .then((res) => {
                const result = res.data.data;
                setFiles(result);
                setTotalPages(res.data.meta?.totalPages ?? 6);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [currentPage, totalPages, Id]);


    return (
        <div>
            <div>
                <MainHeader />
            </div>
            <div className="grid justify-center py-5">
                <Image className='rounded-full w-28 h-28' src={ImageProfile} alt='ImageProfile' />
                <div className='relative bottom-2 px-20 cursor-pointer'>
                    <Image src={EditImg} alt="EditImg" />
                </div>
                <div>
                    <p className='font-semibold'>Garneta Sharina</p>
                </div>
            </div>
            <div className='flex flex-row flex-1 gap-14 px-20 py-5 font-semibold'>
                <ul>
                    <li>
                        <p>My Recipe</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p onClick={HandleSavedRecipe} className='cursor-pointer text-gray-400'>Saved Recipe</p>
                    </li>
                </ul>
                <ul>
                    <li>
                        <p onClick={HandleLikedRecipe} className='cursor-pointer text-gray-400'>Liked Recipe</p>
                    </li>
                </ul>
            </div>
            <hr />
            <div className='flex flex-row flex-1 px-20 gap-5 py-10 z-0'>
                {files.map((file, index) => (
                    <div key={index} onClick={() => handleDetailRecipe(file.id)} className='flex'>
                        <FaTrash className="z-40 absolute cursor-pointer w-8 h-8 pl-3 pt-3 hover:bg-white" onClick={(e) => handleDelete(e)} />
                        <Image className="w-72 h-64 rounded-xl bg-light-yellow" src={file.image ? file.image : ImageDefault} width={1265} height={711} alt={file.title} />
                        <p className="absolute px-3 py-32 text-2xl w-48 text-white font-semibold cursor-pointer hover:text-light-purple">{file.title}</p>
                    </div>
                ))}
            </div>
            <div className="flex py-10 overflow-x-auto sm:justify-center">
                <Pagination
                    layout="table"
                    currentPage={currentPage}
                    totalPages={100}
                    onPageChange={handlePageChange}
                    showIcons
                />
            </div>
            <div>
                <ProfileFooter />
            </div>
        </div>
    )
}

export default MyRecipe