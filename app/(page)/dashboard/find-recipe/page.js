"use client";

import React, { useEffect, useState } from 'react';
import MainHeader from '@/app/components/module/header/MainHeader';
import TextField from '@/app/components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import { Pagination } from 'flowbite-react';
import Card from '@/app/components/base/card/card';
import '../../Layout.css';
import { useRouter } from 'next/navigation';
import Api from '@/app/configs/Api';

import ImageDefault from '../../../../public/assets/landing page/imagedefault.png';
import Footer from '@/app/components/module/footer/footer';

const FindRecipe = () => {
    const router = useRouter();
    const [menu, setMenu] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [params, setParams] = useState({
        page: 1,
        limit: 8,
        search: ''
    });

    const handleDetailRecipe = (id) => {
        Api.get(`/recipes/${id}`)
            .then((res) => {
                router.push(`/dashboard/detail/?id=${id}`);
                // console.log(res, "<<<<<<<<<<<<<<<<<res id");
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        Api.get('/recipes/', {
            params: {
                page: currentPage,
                limit: params.limit,
                ...(params.search ? { search: params.search } : {})
            }
        })
            .then((res) => {
                if (res.data.status === "success" && res.data.data.length > 0) {
                    const result = res.data.data;
                    setMenu(result);
                    setTotalPages(res.data.meta?.totalPages ?? 1);
                } else {
                    setMenu([]);
                    setTotalPages(1);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, [currentPage, params]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (e) => {
        setParams((prevParams) => ({
            ...prevParams,
            search: e.target.value
        }));
    };

    const handleSearch = () => {
        setCurrentPage(1); 
        setParams((prevParams) => {
            const newParams = {
                ...prevParams,
                page: 1,
            };

            const URL = `/dashboard/find-recipe?page=${newParams.page}&limit=${newParams.limit}&search=${newParams.search}`;

            Api.get(`/recipes`, { params: newParams })
            .then((res) =>  {
                if (res.data.status === "success" && res.data.data.length > 0) {
                    const result = res.data.data;
                    setMenu(result);
                    setTotalPages(res.data.meta?.totalPages ?? 1);
                } else {
                    setMenu([]);
                    setTotalPages(1);
                }
            })
            .catch((err) => {
                console.error(err);
            })
            router.push(URL);
            return newParams
        });
    };

    return (
        <div id="findrecipe">
            <div>
                <MainHeader />
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
                <div className='flex'>
                    <TextField
                        id="Search"
                        type="search"
                        name="search"
                        placeholder="Find Out Your Recipe"
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2"
                        onChange={handleSearchChange}
                    />
                    <Button
                        type="submit"
                        name="Search"
                        className="text-center bg-light-yellow text-white hover:bg-light-purple hover:text-white px-2 md:px-3 py-0 md:py-1 relative top-4"
                        onClick={handleSearch}
                    />
                </div>
                <select id="pricingType" name="pricingType"
                    className="h-10 border-2 border-light-yellow focus:outline-none focus:border-light-yellow text-light-yellow rounded px-2 md:px-3 py-0 md:py-1 tracking-wider relative top-4">
                    <option value="All" selected="">All</option>
                    <option value="SortBy">SortBy</option>
                </select>
            </div>
            <div className='grid justify-center py-10'>
                <div className='flex justify-center py-10'>
                    <h1 className='text-4xl font-semibold'>Recipes List</h1>
                </div>
                <div>
                    <div className="grid-container">
                        {menu.length > 0 ? menu.slice(0, 20).map((item) => (
                            <Card
                                key={item.id}
                                image={item.image ? item.image : ImageDefault}
                                title={item.title}
                                className="grid-item cursor-pointer"
                                onClick={() => handleDetailRecipe(item.id)}
                            />
                        )) : (
                            <p>No recipes found</p>
                        )}
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
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default FindRecipe;
