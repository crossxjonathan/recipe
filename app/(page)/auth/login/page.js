'use client';
import React from 'react';
import LoginPage from './LoginPage';
import '../../Layout.css';
import LeftLayout from '../../Layout';

const login = () => {
  return (
      <div>
        <LeftLayout/>
        <div>
          <LoginPage/>
        </div>
      </div>
  )
}

export default login