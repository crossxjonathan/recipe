import React from 'react'

const input = ({ id, type, name, label, required, placeholder, className, onChange, value, ...props }) => {
    return (
        <form>
            <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">
                {label}
            </label>
            <input
                {...props}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
                onChange={onChange}
                value={value}
                required={required}
            />
        </form>
    )
}

export default input