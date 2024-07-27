import React from 'react';
import Image from 'next/image';

import Play from '../../../../public/assets/detail recipe/play.svg';

const VideoBtn = ({onClick}) => {
  return (
    <div className='flex justify-center bg-light-yellow w-56 h-14 rounded-xl cursor-pointer hover:bg-yellow-500'>
        <Image 
            src={Play} 
            alt='Play'
            onClick={onClick}
        />
    </div>
  )
}

export default VideoBtn