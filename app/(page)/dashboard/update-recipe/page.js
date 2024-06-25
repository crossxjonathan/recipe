import React, { Suspense } from 'react'
import Loading from './LoadingUpdate'
import UpdateRecipe from './[id]/page';

const UpdateRecipePage = () => {
  return (
    <Suspense fallback={<Loading/>}>
        <UpdateRecipe/>
    </Suspense>
  )
}

export default UpdateRecipePage;
