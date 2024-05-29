import React, { Suspense } from 'react';
import DetailRecipe from './detailRecipe';
import Loading from './loadingrecipe';

const DetailRecipePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DetailRecipe />
    </Suspense>
  );
}

export default DetailRecipePage;
