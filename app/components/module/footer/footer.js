import React from 'react'

const Footer = () => {
  return (
    <div className='bg-light-yellow h-72'>
      <div className='text-center py-16'>
        <h1 className='text-5xl py-2 text-light-purple'>Eat, Cook, Repeat</h1>
        <p className='text-2xl text-light-purple'>Share your best recipe by uploading here !</p>
      </div>
      <div className='flex justify-center gap-5'>
        <button className='text-light-purple hover:text-yellow-800 hover:font-semibold'>Product</button>
        <button className='text-light-purple hover:text-yellow-800 hover:font-semibold'>Company</button>
        <button className='text-light-purple hover:text-yellow-800 hover:font-semibold'>Learn More</button>
        <button className='text-light-purple hover:text-yellow-800 hover:font-semibold'>Get in Touch</button>
      </div>
      <div className='flex justify-end'>
        <p className='text-light-purple font-semibold'>Pijar Camp</p>
      </div>
    </div>
  )
}

export default Footer