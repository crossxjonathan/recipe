"use client";

import React from 'react';
import Image from 'next/image';
import PageNotFound from '../public/assets/error/404.png';

const pagenotfound = () => {
  return (
    <div className="grid justify-center py-48">
      <h1 className='text-4xl font-semibold'>404 | Page Not Found</h1>
      <div className="px-10">
        <Image className="w-72 h-72" src={PageNotFound} alt='PageNotFound'/>
      </div>
    </div>
  )
}

export default pagenotfound