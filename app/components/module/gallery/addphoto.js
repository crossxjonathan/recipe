import Image from 'next/image';
import React from 'react';
import ImageIcon from '../../../../public/assets/add recipe/image icon.svg';

const AddPhoto = ({onClick}) => {
    return (
        <div className="bg-white-blue w-176 h-80 px-80 py-32 cursor-pointer rounded-xl">
            <Image className="w-10 h-10" src={ImageIcon} alt='ImageIcon' />
            <div onClick={onClick} className="relative right-5 py-3">
                <p className="text-gray-500 text-nowrap font-semibold">Add Photo</p>
            </div>
        </div>
    )
}

export default AddPhoto