
import React, { useState } from 'react';
import '../../Layout.css';
import Textfield from '../../../components/base/textfield/textfield';
import Button from '@/app/components/base/button/button';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import ThemeSwitch from '@/app/components/base/darkmode/darkmodetoggle';

const LoginPage = () => {
    const Router = useRouter();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleRegister = () => {
        toast.loading("Please Wait....")
        Router.push('/auth/register')
    }

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm({
            ...form,
            [id]: value
        });
        console.log(id, value);
    };

    const handleSubmit = () => {
        if (form) {
            toast.success("Welcome")
            Router.push('/dashboard/home')
            console.log('Email', form.email);
            console.log('Password', form.password);
        } else {
            toast.error("Register Failed");
            console.error(error.message);
        }
    };

    return (
        <div id='rightAuthentication'>
            <div className='flex justify-end'>
                <ThemeSwitch />
            </div>
            <div className='flex flex-1 flex-col justify-center text-center py-36'>
                <h1 className='text-2xl font-semibold text-light-yellow'>Welcome</h1>
                <p className='text-gray-400'>Log in into your existing account</p>
                <div className='relative left-5'>
                    <Textfield
                        id="email"
                        type="email"
                        spellCheck={false}
                        required
                        label="E-mail"
                        placeholder="Enter Your Email"
                        className="w-128 h-14 relative left-10 shadow-md"
                        onChange={handleChange}
                    />
                </div>
                <div className='py-2 relative left-5'>
                    <Textfield
                        id="password"
                        type="password"
                        spellCheck={false}
                        required
                        label="Password"
                        placeholder="Enter Your Password"
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
                        name="Login"
                        className="w-96 h-14 bg-light-yellow text-white py-3"
                        onClick={handleSubmit}
                    />
                    <ToastContainer
                        position='bottom-right'
                    />
                </div>
                <div className='pl-96 py-5'>
                    <p className="text-gray-500" >Forgot Password ?</p>
                </div>
                <div>
                    <p className='text-gray-500'>Don’t have an account? <span onClick={handleRegister} className='text-light-yellow font-semibold hover:text-yellow-500 cursor-pointer'>Sign Up</span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage