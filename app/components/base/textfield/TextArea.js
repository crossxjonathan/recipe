'use client';

import React, { useState } from 'react';

const TextArea = ({ label, type, id, placeholder, spellCheck, className, onChange, validate, value, ...props }) => {
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;

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

  const borderColor = status === 'success' ? 'border-green-800' : status === 'failed' ? 'border-red-800' : 'border-gray-300';
  const ringColor = status === 'success' ? 'ring-green-500' : status === 'failed' ? 'ring-red-500' : 'ring-yellow-500';
  const textColor = status === 'success' ? 'text-green-500' : status === 'failed' ? 'text-red-500' : 'text-yellow-500';

  return (
    <form className="w-full">
      <div className="form-group grid items-center text-left space-x-4">
        <label htmlFor={id} className="w-1/4 py-2 text-gray-500 px-5 text-nowrap">{label}</label>
        <textarea
          {...props}
          id={id}
          spellCheck={spellCheck}
          required
          placeholder={placeholder}
          className={`p-5 px-2 border ${borderColor} rounded focus:outline-none focus:ring-1 ${ringColor} ${className} w-full sm:w-3/4`}
          value={value}
          onChange={handleChange}
        />
      </div>
      {status && (
        <p className={`${textColor} py-2 px-5 text-start`}>
          {status === 'success' ? '' : 'Please Fill Out This Field'}
        </p>
      )}
    </form>
  );
};

export default TextArea;
