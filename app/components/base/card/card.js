"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import './card.css';

const Card = ({image, title, className, onClick}) => {
    
    const imageRef = useRef(null);

    useEffect(() => {
        const img = imageRef.current;
        if (img) {
            img.style.width = '100%'
            img.style.height = '100%'
            img.style.objectFit = 'cover'
        }
    }, [])


    return (
        <div onClick={onClick}>
            <Image
                className={className}
                src={image}
                alt='Card'
                ref={imageRef}
                onClick={onClick}
                width={1265}
                height={711}
            />
<p className='relative bottom-40 px-5 w-64 font-semibold text-lg text-black cursor-pointer hover:text-light-yellow text-with-border'>{title}</p>
</div>
    )
}

export default Card