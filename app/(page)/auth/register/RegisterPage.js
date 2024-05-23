'use client';
import React, { useState } from 'react';
import '../../Layout.css';
import Textfield from '../../../components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '@/app/components/base/darkmode/darkmodetoggle';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const Router = useRouter();
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm: ''
  });


  const handleLogin = () => {
    toast.loading("Please Wait....")
    Router.push('/auth/login')
  }


  const handleChange = (e) => {
    const { id, value } = e.target;
    setformdata(prevFormData => ({
      ...prevFormData,
      [id]: value
    }))
    console.log(id, value)
  };

  const handleSubmit = (e) => {
    if (formdata) {
      toast.success("Register Success");
      Router.push('/auth/login')
      console.log(e, "<<<<<register");
    } else {
      toast.error("Register Failed");
      console.error(error.message);
    }
  }

  return (
    <div id='rightAuthentication'>
      <div className='flex justify-end'>
        <ThemeSwitch />
      </div>
      <div className='flex flex-1 flex-col justify-center text-center py-36'>
        <h1 className='text-2xl font-semibold text-light-yellow'>Let’s Get Started !</h1>
        <p className='text-gray-400'>Create new account to access all features</p>
        <div className='px-5'>
          <Textfield
            id="name"
            type="text"
            spellCheck={false}
            required
            label="Name"
            placeholder="Enter Your Name"
            className="w-128 h-14 relative left-10 shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className='px-5'>
          <Textfield
            id="email"
            type="email"
            spellCheck={false}
            required
            label="Email address"
            placeholder="Enter Your Email Address"
            className="w-128 h-14 relative left-10 shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className='px-5'>
          <Textfield
            id="phone"
            type="number"
            spellCheck={false}
            required
            label="Phone Number"
            placeholder="Enter Your Phone Number"
            className="w-128 h-14 relative left-10 shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className='px-5'>
          <Textfield
            id="password"
            type="password"
            spellCheck={false}
            required
            label="Create New Password"
            placeholder="Create Your New Password"
            className="w-128 h-14 relative left-10 shadow-md"
            onChange={handleChange}
          />
        </div>
        <div className='px-5'>
          <Textfield
            id="confirm"
            type="password"
            spellCheck={false}
            required
            label="New Password"
            placeholder="Enter Your New Password"
            className="w-128 h-14 relative left-10 shadow-md"
            onChange={handleChange}
          />
        </div>
        <div class="flex items-start py-5 px-20">
            <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-light-yellow dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800" required />
            </div>
              <label for="remember" class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-light-yellow hover:underline dark:text-yellow-500">terms and conditions</a>.</label>
        </div>
        <div className='flex justify-center'>
          <Button
            type="submit"
            name="Register Account"
            className="w-96 h-14 bg-light-yellow text-white py-3"
            onClick={handleSubmit}
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