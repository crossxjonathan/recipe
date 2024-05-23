'use client';
import React, { useState } from 'react';

const TextField = ({ label, type, id, placeholder, spellCheck, className, props, onChange, validate }) => {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    let isValid = validate ? validate(newValue) : newValue.trim() !== '';

    if (isValid) {
      setStatus('success');
    } else {
      setStatus('failed');
    }

    if (onChange) {
      onChange(e);
    }
  };

  const borderColor = status === 'success' ? 'border-green-500' : status === 'failed' ? 'border-red-500' : 'border-gray-300';
  const ringColor = status === 'success' ? 'ring-green-300' : status === 'failed' ? 'ring-red-300' : 'ring-yellow-300';
  const textColor = status === 'success' ? 'text-green-300' : status === 'failed' ? 'text-red-300' : 'text-yellow-300';

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
          className={`p-5 px-2 border ${borderColor} rounded focus:outline-none focus:ring-1 ${ringColor} ${className}`}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </div>
      {status && (
        <p className={`${textColor} py-2 px-5`}>
          {status === 'success' ? '' : 'Please Fill Out This Field'}
        </p>
      )}
    </form>
  );
};

export default TextField;
