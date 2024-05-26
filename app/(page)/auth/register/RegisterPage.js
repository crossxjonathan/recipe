'use client';
import React, { useState } from 'react';
import '../../Layout.css';
import Button from '@/app/components/base/button/button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '@/app/components/base/darkmode/darkmodetoggle';
import { useRouter } from 'next/navigation';
import TextField from '../../../components/base/textfield/textfield';
import Api from '@/app/configs/Api';
import axios from 'axios';

const RegisterPage = () => {
  const Router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [passwordMismatch, setPasswordMisMatch] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if (form.email === '' || form.password === '' || form.phone === '' || form.name === '' || form.confirm === '') {
      toast.error('You must fill in all forms!!!');
      return;
    }

    if (form.password !== form.confirm) {
      setPasswordMisMatch(true);
      toast.error('Your password not match, please check again!!');
      return;
    }

    if (!isChecked) {
      toast.info("You must check the box!!!");
      return;
    }

    Api.post('/auth/register', {
      email: form.email,
      password: form.password,
      name: form.name,
      phone: form.phone,
      confirm: form.confirm
    })
    .then((res) => {
      console.log(form);
      toast.success('Registration successful!');
      localStorage.setItem('registerUser', JSON.stringify({...form}));
      Router.push(`/auth/login`);
    })
    .catch((error) => {
      console.log(error.message);
      toast.error('Registration failed. Please try again later!!');
    });
  }

  const handleChangeCheckbox = () => {
    setIsChecked(!isChecked);
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm(prevFormData => ({
      ...prevFormData,
      [id]: value
    }))
    console.log(id, value)
  };


  const handleLogin = () => {
    toast.loading("Please Wait....")
    Router.push('/auth/login')
  }

  return (
    <div id='rightAuthentication'>
      <div className='darkmode flex justify-end'>
        <ThemeSwitch />
      </div>
      <div className='logincontainer flex flex-1 flex-col justify-center text-center py-20'>
        <h1 className='text-2xl font-semibold text-light-yellow'>Let’s Get Started !</h1>
        <p className='text-gray-400'>Create new account to access all features</p>
        <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
          <TextField
            id="name"
            type="text"
            spellCheck={false}
            required
            value={form.name}
            label="Name"
            placeholder="Enter Your Name"
            className="shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
          <TextField
            id="email"
            type="email"
            spellCheck={false}
            value={form.email}
            required
            label="E-mail Address"
            placeholder="Enter Your Email"
            className="shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
          <TextField
            id="phone"
            type="number"
            spellCheck={false}
            value={form.phone}
            required
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            className="shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
          <TextField
            id="password"
            type="password"
            value={form.password}
            spellCheck={false}
            required
            label="Create New Password"
            placeholder="Enter Your New Password"
            className="shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
          <TextField
            id="confirm"
            type="password"
            value={form.confirm}
            spellCheck={false}
            required
            label="Re-Create New Password"
            placeholder="Enter Your New Password"
            className="shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-start justify-center py-5">
          <div className="flex items-center h-5">
            <input 
              id="remember" 
              type="checkbox"
              checked={isChecked} 
              onChange={handleChangeCheckbox} 
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-light-yellow dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-light-yellow hover:underline dark:text-yellow-500">terms and conditions</a>.</label>
        </div>
        <div className='flex justify-center'>
          <Button
            type="submit"
            name="Login"
            className="w-96 h-14 bg-light-yellow text-white py-3"
            onClick={handleRegister}
          />
          <ToastContainer
            position='bottom-right'
          />
        </div>
        <div className='py-5'>
          <p className='text-gray-500'>Already have account? <span onClick={handleLogin} className='text-light-yellow font-semibold hover:text-yellow-500 cursor-pointer'>Log in Here</span></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage