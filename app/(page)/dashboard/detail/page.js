import React, { Suspense } from 'react';
import Loading from './loadingrecipe';
import DetailRecipe from '../detail/detailRecipe';


const DetailRecipePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DetailRecipe />
    </Suspense>
  );
}

export default DetailRecipePage;
