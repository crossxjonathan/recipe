import React, { Suspense } from 'react'
import Loading from './LoadingUpdate'
import UpdateRecipe from './UpdateRecipe';

const UpdateRecipePage = () => {
  return (
    <Suspense fallback={<Loading/>}>
        <UpdateRecipe/>
    </Suspense>
  )
}

export default UpdateRecipePage;
