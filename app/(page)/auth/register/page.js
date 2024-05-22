'use client';
import React from 'react';
import RegisterPage from './RegisterPage';
import LeftLayout from '../../Layout';

const register = () => {
  return (
      <div id='authentication'>
       <LeftLayout/>
       <div>
        <RegisterPage/>
       </div>
      </div>
  )
}

export default register