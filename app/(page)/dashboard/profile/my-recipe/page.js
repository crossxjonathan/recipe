import React, { Suspense } from 'react'
import Loading from './loadingmyrecipe'
import MyRecipe from './MyRecipe'

const MyRecipePage = () => {
  return (
    <Suspense fallback={<Loading/>}>
        <MyRecipe/>
    </Suspense>
  )
}

export default MyRecipePage