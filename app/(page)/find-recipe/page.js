import React from 'react';
import Header from '@/app/components/module/header/Header';
import Footer from '@/app/components/module/footer/footer';
import { GetRecipeService } from '../../../services/client/recipe';
import FindRecipeClient from './findrecipe';
import '../Layout.css';

const FindRecipe = async ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const limit = parseInt(searchParams.limit) || 8;
    const search = searchParams.search || "";
    const { data, total } = await GetRecipeService(page, limit, search);

    return (
        <div id="findrecipe">
            <div>
                <Header />
            </div>
            <FindRecipeClient 
                initialData={data}
                initialTotal={total}
                initialSearch={search}
                initialPage={page} 
                initialLimit={limit}
            />
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default FindRecipe;
