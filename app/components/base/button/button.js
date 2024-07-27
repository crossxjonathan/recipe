import React from 'react'

const Button = ({name, className, onClick, type }) => {
  return (
    <button 
        type={type}
        className={`w-24 h-10 py-1 text-gray-500 text-lg font-semibold border rounded-xl cursor-pointer hover:bg-yellow-500 hover:text-white ${className}`} 
        onClick={onClick}>
        {name}
    </button>
  )
}

export default Button