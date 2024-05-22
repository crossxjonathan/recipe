import React from 'react'

const textfield = ({ label, type, id, placeholder, spellCheck, className, props, onChange}) => {
  return (
    <form>
    <div className="form-group grid items-center text-left space-x-4">
      <label htmlFor={id} className="w-1/4 py-2 text-gray-500 px-14 text-nowrap">{label}</label>
      <input
        type={type} 
        id={id} 
        spellCheck={spellCheck} 
        required 
        placeholder={placeholder}
        className={`p-5 px-2 border border-gray-300 rounded focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-300 ${className}`}
        {...props}
        onChange={onChange}
      />
    </div>
  </form>
  )
}

export default textfield