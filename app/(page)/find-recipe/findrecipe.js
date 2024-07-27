"use client";

import React, { useState } from 'react';
import TextField from '@/app/components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import { Pagination } from 'flowbite-react';
import Card from '@/app/components/base/card/card';
import ImageDefault from '../../../public/assets/landing page/imagedefault.png';
import { GetRecipeService } from '../../../services/client/recipe';
import '../Layout.css';
import DetailRecipe from '../dashboard/detail-recipe/[id]/page';
import { useRouter, useSearchParams } from 'next/navigation';

const FindRecipeClient = ({ initialData, initialTotal, initialSearch, initialPage, initialLimit }) => {
    const [data, setData] = useState(initialData);
    const [total, setTotal] = useState(initialTotal);
    const [search, setSearch] = useState(initialSearch);
    const [currentPage, setCurrentPage] = useState(initialPage);
    const [limit, setLimit] = useState(initialLimit);
    const [detail, setDetail] = useState(null);
    const [sortType, setSortType] = useState("ascending");
    const [sortByField, setSortByField] = useState("title");
    const [filteredData, setFilteredData] = useState(initialData);

    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const fetchData = async (page, limit, search) => {
        const { data, total } = await GetRecipeService(page, limit, search);
        setData(data);
        setTotal(total);
        const results = data.filter(item =>
            item[sortByField].toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(results);
    };

    const handleDetailRecipe = (id) => {
        router.push(`/dashboard/detail-recipe/${id}`);
    };

    const handlePageChange = async (page) => {
        setCurrentPage(page);
        await fetchData(page, limit, search);
    };

    const handleSearchChange = async (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
        await fetchData(currentPage, limit, newSearch);
    };

    const handleSortChange = async (e) => {
        const { value } = e.target;
        if (value === "title" || value === "ascending" || value === "descending") {
            if (value === "title") {
                setSortByField(value);
            } else {
                setSortType(value);
            }
            await fetchData(currentPage, limit, search);
        }
    };

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortType === "ascending") {
            return a[sortByField] < b[sortByField] ? -1 : 1;
        } else {
            return a[sortByField] > b[sortByField] ? -1 : 1;
        }
    });

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
                <div className='flex'>
                    <TextField
                        id="Search"
                        type="search"
                        name="search"
                        placeholder="Find Out Your Recipe"
                        value={search}
                        onChange={handleSearchChange}
                        className="w-full md:w-80 px-3 h-10 rounded-l border-2"
                    />
                </div>
                <select
                    id="sortOptions"
                    className="h-10 border-2 border-light-yellow focus:outline-none focus:border-light-yellow text-light-yellow rounded px-2 md:px-3 py-0 md:py-1 tracking-wider relative top-4 hover:text-white hover:bg-light-yellow"
                    onChange={handleSortChange}
                >
                    <option value="title">Title</option>
                    <option value="ascending">Asc</option>
                    <option value="descending">Desc</option>
                </select>
            </div>
            <div className='grid justify-center py-10'>
                <div className='flex justify-center py-10'>
                    <h1 className='text-4xl font-semibold'>Recipes List</h1>
                </div>
                {detail ? (
                    <DetailRecipe detail={detail} />
                ) : (
                    <div>
                        <div className="grid-container">
                            {sortedData.length > 0 ? sortedData.map((item) => (
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
                )}
            </div>
        </div>
    );
};

export default FindRecipeClient;
