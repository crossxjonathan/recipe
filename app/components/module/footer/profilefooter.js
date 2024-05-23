import React from 'react'

const ProfileFooter = () => {
  return (
    <div className='bg-light-yellow h-16'>
      <div className='flex justify-center py-5 gap-5'>
        <button className='text-light-purple hover:text-yellow-800 hover:font-semibold'>Product</button>
        <button className='text-light-purple hover:text-yellow-800 hover:font-semibold'>Company</button>
        <button className='text-light-purple hover:text-yellow-800 hover:font-semibold'>Learn More</button>
        <button className='text-light-purple hover:text-yellow-800 hover:font-semibold'>Get in Touch</button>
      </div>
      <div className='flex justify-end relative bottom-7 pr-5'>
        <p className='text-light-purple'>Powered By <span className='font-semibold'>Pijar Camp</span></p>
      </div>
    </div> 
  )
}

export default ProfileFooter