"use client";

import React, { useRef } from 'react';
import Image from 'next/image';

const ImageProfile = ({img}) => {
    const imageRef = useRef(null);

  return (
    <div>
    <Image src={img} alt='img' className="rounded-full w-16"/>
    </div>
  )
}

export default ImageProfile