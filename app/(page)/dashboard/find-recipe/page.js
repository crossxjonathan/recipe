import React from 'react';
import MainHeader from '@/app/components/module/header/MainHeader';
import Footer from '@/app/components/module/footer/footer';
import { GetRecipeService } from '../../../../services/client/recipe';
import FindRecipeClient from './find-recipe';
import '../../Layout.css';

const FindRecipe = async ({ searchParams }) => {
    const page = parseInt(searchParams.page) || 1;
    const limit = parseInt(searchParams.limit) || 8;
    const search = searchParams.search || "";
    const { data, total } = await GetRecipeService(page, limit, search);

    return (
        <div id="findrecipe">
            <div>
                <MainHeader />
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
