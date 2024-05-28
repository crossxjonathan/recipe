import React, { Suspense } from 'react';
import DetailRecipe from './page';
import Loading from './loadingrecipe';

const DetailRecipePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DetailRecipe />
    </Suspense>
  );
}

export default DetailRecipePage;
