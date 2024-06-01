"use client";

import React, { useState, useEffect } from 'react';
import TextField from '@/app/components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import { Pagination } from 'flowbite-react';
import Card from '@/app/components/base/card/card';
import ImageDefault from '../../../../public/assets/landing page/imagedefault.png';
import { GetRecipeService } from '../../../../services/client/recipe';
import '../../Layout.css';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

const FindRecipeDashboard = ({ initialData, initialTotal, initialSearch, initialPage, initialLimit }) => {
    const [data, setData] = useState(initialData);
    const [total, setTotal] = useState(initialTotal);
    const [search, setSearch] = useState(initialSearch);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [limit, setLimit] = useState(initialLimit);
    const [detail, setDetail] = useState(null);
    const Router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const fetchData = async (page, limit, search) => {
        const { data, total } = await GetRecipeService(page, limit, search);
        setData(data);
        setTotal(total);
    };

    useEffect(() => {
        fetchData(currentPage, limit, search);
    }, [currentPage, limit, search]);

    // const handleSearch = async (e) => {
    //     e.preventDefault();
    //     fetchData(1, limit, search);
    // };

    const handleDetailRecipe = async (id) => {
        Router.push(`/dashboard/detail-recipe/${id}`)
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <div id="findrecipe">
            <div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
                <div className='flex'>
                <TextField
                        id="Search"
                        type="search"
                        name="search"
                        placeholder="Find Out Your Recipe"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2"
                    />
                    {/* <Button
                        type="submit"
                        name="Search"
                        className="text-center bg-light-yellow text-white hover:bg-light-purple hover:text-white px-2 md:px-3 py-0 md:py-1 relative top-4"
                        onClick={handleSearch}
                    /> */}
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
                        {data && data.length > 0 ? data.slice(0, 20).map((item) => (
                            <Card
                                key={item.id}
                                image={ImageDefault}
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
            </div>
        </div>
    );
}

export default FindRecipeDashboard;
