import React from 'react';

const AddVideo = ({onClick}) => {
  return (
    <div className="bg-white-blue w-176 h-16 px-10 py-2 cursor-pointer rounded-xl">
            <div onClick={onClick} className="relative right-5 py-3">
                <p className="text-gray-500 text-nowrap font-semibold">Video</p>
            </div>
        </div>
  )
}

export default AddVideo