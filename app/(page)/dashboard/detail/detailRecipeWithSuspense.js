import React, { Suspense } from 'react'
import DetailRecipe from './page'

const DetailRecipeWithSuspense = () => {
    return (
        <Suspense>
            <DetailRecipe />
        </Suspense>
    )
};

export default DetailRecipeWithSuspense