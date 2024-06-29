'use client';
import React, { useState } from 'react';
import '../../Layout.css';
import Button from '@/app/components/base/button/button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ThemeSwitch from '@/app/components/base/darkmode/darkmodetoggle';
import { useRouter } from 'next/navigation';
import { RegisterService } from '@/services/client/auth';

const RegisterPage = () => {
  const Router = useRouter();
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm: ''
  });

  const handleChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordRegex.test(password);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    return nameRegex.test(name);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleFormData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirm } = form;

    if (!name || !email || !phone || !password || !confirm) {
      toast.error('You must fill in all forms!!!');
      return;
    }

    if (!validateName(name)) {
      toast.error('Name must contain only letters and be at least 2 characters long!');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Invalid email format!');
      return;
    }

    if (!validatePhone(phone)) {
      toast.error('Phone number must be at least 10 digits long!');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Password must be at least 6 characters long and contain both letters and numbers!');
      return;
    }

    if (password !== confirm) {
      toast.error('Your password does not match, please check again!!');
      return;
    }

    if (!isChecked) {
      toast.info("You must check the box!!!");
      return;
    }

    try {
      const payload = {
        email,
        password,
        phone,
        name
      };
      await RegisterService(payload);
      Router.push('/auth/login');
      toast.success('Registered Successfully!!');
      setForm({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirm: ''
      });
    } catch (error) {
      console.error(error);
      toast.error("Registration Failure!!! - Network Error or Server is down!!");
    }
  };

  const handleLogin = () => {
    toast.loading("Please Wait....");
    Router.push('/auth/login');
  };

  return (
    <div id='rightAuthentication'>
      <div className='darkmode flex justify-end'>
        <ThemeSwitch />
      </div>
      <div className='logincontainer flex flex-1 flex-col justify-center text-center py-20'>
        <h1 className='text-2xl font-semibold text-light-yellow'>Let’s Get Started !</h1>
        <p className='text-gray-400'>Create new account to access all features</p>
        <form onSubmit={handleFormData}>
          <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
            <input
              id="name"
              type="text"
              name='name'
              value={form.name}
              label="Name"
              placeholder="Enter Your Name"
              className="shadow-md p-5 px-2 border w-full sm:w-3/4 focus:outline-none focus:ring focus:border-blue-500 ..."
              onChange={handleChange}
            />
          </div>
          <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              label="E-mail Address"
              placeholder="Enter Your Email"
              className="shadow-md p-5 px-2 border w-full sm:w-3/4 focus:outline-none focus:ring focus:border-blue-500 ..."
              onChange={handleChange}
            />
          </div>
          <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
            <input
              id="phone"
              type="number"
              name='phone'
              value={form.phone}
              label="Phone Number"
              placeholder="Enter Your Phone Number"
              className="shadow-md p-5 px-2 border w-full sm:w-3/4 focus:outline-none focus:ring focus:border-blue-500 ..."
              onChange={handleChange}
            />
          </div>
          <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
            <input
              id="password"
              type="password"
              name='password'
              value={form.password}
              label="Create New Password"
              placeholder="Enter Your New Password"
              className="shadow-md p-5 px-2 border w-full sm:w-3/4 focus:outline-none focus:ring focus:border-blue-500 ..."
              onChange={handleChange}
            />
          </div>
          <div className='textfieldlogin relative mx-auto my-4 w-full max-w-md'>
            <input
              id="confirm"
              type="password"
              name='confirm'
              value={form.confirm}
              label="Re-Type New Password"
              placeholder="Re-Type Your New Password"
              className="shadow-md p-5 px-2 border w-full sm:w-3/4 focus:outline-none focus:ring focus:border-blue-500 ..."
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
              name="Register"
              className="w-96 h-14 bg-light-yellow text-white py-3"
            />
            <ToastContainer position='bottom-right' />
          </div>
        </form>
        <div className='py-5'>
          <p className='text-gray-500'>Already have account? <span onClick={handleLogin} className='text-light-yellow font-semibold hover:text-yellow-500 cursor-pointer'>Log in Here</span></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;
