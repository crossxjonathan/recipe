"use client";

import React from 'react';
import ErrorImage from '../public/assets/error/error.png';
import Image from 'next/image';

const ErrorHandling = ({error, reset}) => {

  return (
    <div className="grid justify-center py-48">
        <h1>Something went Wrong!!!</h1>
        <Image className="w-48 h-48" src={ErrorImage} alt='ErrorImage'/>
        <div className="px-5">
          {error.message}
        </div>
        <div className="py-5">
        <button className="bg-light-yellow w-48 rounded-xl" onClick={reset}>
          Try Again
        </button>
        </div>
    </div>
  )
}

export default ErrorHandling